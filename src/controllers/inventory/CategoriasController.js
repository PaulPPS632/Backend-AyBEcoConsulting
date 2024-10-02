const Categorias = require("../../models/inventory/Categorias");
class CategoriasController {
  async getAll(req, res) {
    const categorias = await Categorias.findAll();
    return res.status(200).json(categorias);
  }
  async create(req, res) {
    try {
      const { nombre, descripcion } = req.body;
      if (!nombre)
        return res.status(400).json({ message: "El nombre es requerido" });
      if (!descripcion)
        return res.status(400).json({ message: "La descripcion es requerida" });
      const categoria = await Categorias.create({ nombre, descripcion });

      return res.status(200).json({ message: "Categoria creada exitosamente" });
    } catch (error) {
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  }
}

module.exports = new CategoriasController();
