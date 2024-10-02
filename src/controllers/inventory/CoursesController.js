const { Op } = require("sequelize");
const Archivo = require("../../models/global/Archivo");
const Courses = require("../../models/inventory/Courses");
const Entidad = require("../../models/users/Entidad");
const Categorias = require("../../models/inventory/Categorias");
class CoursesController {
  async getById(req, res) {
    const { id } = req.params;
    const course = await Courses.findByPk(id, {
      include: [
        { model: Archivo, as: "ImagenPortada" },
        { model: Entidad, as: "autor", attributes: ["id", "nombre"] },
        { model: Categorias, attributes: ["id", "nombre"] },
      ],
      attributes: [
        "id",
        "nombre",
        "descripcion",
        "precio",
        "duracion",
        "nivel",
      ],
    });

    return res.status(200).json(course);
  }
  async getByCategoria(req, res) {
    const { id } = req.params;
    console.log("id", id);
    const course = await Courses.findAll({
      where: { CategoriaId: id },
      include: [
        { model: Archivo, as: "ImagenPortada" },
        { model: Entidad, as: "autor", attributes: ["id", "nombre"] },
      ],
      attributes: [
        "id",
        "nombre",
        "descripcion",
        "precio",
        "duracion",
        "nivel",
      ],
      limit: 10,
    });
    console.log(course);
    return res.status(200).json(course);
  }
  async getAll(req, res) {
    const courses = await Courses.findAll({
      include: [
        { model: Archivo, as: "ImagenPortada" },
        { model: Entidad, as: "autor", attributes: ["id", "nombre"] },
        { model: Entidad, as: "creador", attributes: ["id", "nombre"] },
      ],
    });
    return res.status(200).json(courses);
  }
  async create(req, res) {
    try {
      const {
        nombre,
        descripcion,
        precio,
        duracion,
        nivel,
        EntidadAutorId,
        EntidadCreadorId,
        CategoriaId,
      } = JSON.parse(req.body.curso);
      console.log({
        nombre,
        descripcion,
        precio,
        duracion,
        nivel,
        EntidadAutorId,
        EntidadCreadorId,
        CategoriaId,
      });
      if (req.files) {
        console.log(req.files.fileprincipal[0]);
        const filename = req.files.fileprincipal[0].filename.replace(
          /\s+/g,
          ""
        );
        const prefijo = `http://${process.env.DB_HOST}:3000/api/uploads`;
        const ImagenPortada = await Archivo.create({
          url: `${prefijo}/${filename}`,
          nombre: req.files.fileprincipal[0].originalname,
          tipo_Archivo: "imagen",
          ubicacion: req.files.fileprincipal[0].destination,
          descripcion: "PortadaCurso",
        });
        console.log("aqui llega");
        const cursocreado = await Courses.create({
          nombre,
          descripcion,
          precio,
          duracion,
          nivel,
          EntidadAutorId,
          EntidadCreadorId,
          ImagenPortadaId: ImagenPortada.id,
          CategoriaId,
        });
        console.log(cursocreado);
        return res.status(200).json({ message: "Curso creado exitosamente" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Error al curso" });
    }
  }
  async paged(req, res) {
    const { search, categoria, page, size, sort } = req.query;
    try {
      const limit = size ? parseInt(size) : 10; // Si no hay size, se usa 10 como valor por defecto
      const offset = page ? parseInt(page) * limit : 0; // Si no hay page, empieza desde la primera página

      const { count: totalItems, rows: productos } =
        await Courses.findAndCountAll({
          where: {
            nombre: {
              [Op.like]: `%${search}%`,
            },
          },
          include: [
            {
              model: categoria,
              required: true,
              foreignKey: "CategoriaId",
              ...(categoria?.length > 0 && {
                where: {
                  nombre: { [Op.in]: categoria.split(",") }, // Solo aplica si hay subcategorías
                },
              }),
            },
            {
              model: Archivo,
              as: "ImagenPortada", // alias para el campo en el resultado JSON
              required: true,
              attributes: ["url"],
            },
            {
              model: Entidad,
              as: "autor",
              attributes: ["id", "nombre"],
            },
            {
              model: Entidad,
              as: "creador",
              attributes: ["id", "nombre"],
            },
          ],
          limit: limit,
          offset: offset,
          ...(sort && { order: [["precio", sort]] }),
        });
      return res.status(200).json({ totalItems, productos });
    } catch (error) {
      return res.status(500).json({ message: "Error al obtener los cursos" });
    }
  }
  async getCursesHome(req, res) {
    const nuevos = await Courses.findAll({
      include: [
        { model: Archivo, as: "ImagenPortada", attributes: ["nombre", "url"] },
        { model: Entidad, as: "autor", attributes: ["id", "nombre"] },
      ],
      attributes: [
        "id",
        "nombre",
        "descripcion",
        "precio",
        "duracion",
        "nivel",
      ],
      limit: 10,
      order: [["createdAt", "DESC"]],
    });
    const categorias = await Categorias.findAll();
    const porCategoria = await Promise.all(
      categorias.map(async (categoria) => {
        const cursos = await Courses.findAll({
          where: { CategoriaId: categoria.id },
          include: [
            {
              model: Archivo,
              as: "ImagenPortada",
              attributes: ["nombre", "url"],
            },
            { model: Entidad, as: "autor", attributes: ["id", "nombre"] },
          ],
          attributes: [
            "id",
            "nombre",
            "descripcion",
            "precio",
            "duracion",
            "nivel",
          ],
          limit: 10,
        });
        return { categoria, cursos };
      })
    );
    return res.status(200).json({ nuevos, porCategoria });
  }
}

module.exports = new CoursesController();
