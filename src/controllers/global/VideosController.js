const Videos = require("../../models/global/Videos");

class VideosController {
  async create(req, res) {
    try {
      const { titulo, descripcion, topics, CursoId } = JSON.parse(
        req.body.data
      );
      console.log(req.files);
      if (req.files) {
        var url = `http://${
          process.env.DB_HOST
        }:3000/api/uploads/${req.files.video[0].filename.replace(/\s+/g, "")}`;
        var urlminiatura = `http://${
          process.env.DB_HOST
        }:3000/api/uploads/${req.files.miniatura[0].filename.replace(
          /\s+/g,
          ""
        )}`;
        /*
        console.log("DATOS PARA CREAR VIDEO: ", {
          titulo,
          descripcion,
          url,
          topics,
          CursoId,
        });
        */
        console.log("url", url);
        console.log("urlminiatura", urlminiatura);
        if (!CursoId) {
          return res.status(400).json({ error: "Se necesita Id de Curso" });
        }
        const result = await Videos.sequelize.transaction(async (t) => {
          const maxRecord = await Videos.findOne({
            attributes: ["id", "order"],
            where: { CursoId },
            order: [["order", "DESC"]],
            transaction: t,
          });

          const maxId = maxRecord ? maxRecord.id : null;
          const maxorder = maxRecord ? maxRecord.order + 1 : 1;
          console.log("maxId", maxId);
          console.log("maxorder", maxorder);
          const VideoCreado = await Videos.create(
            {
              titulo,
              descripcion,
              url,
              urlminiatura,
              topics,
              CursoId,
              antecesor: maxId,
              order: maxorder,
            },
            { transaction: t }
          );

          if (maxorder > 1) {
            await Videos.update(
              { sucesor: VideoCreado.id },
              {
                where: { id: maxId },
                transaction: t,
              }
            );
          }
          return VideoCreado;
        });

        return res.json(result);
      } else {
        return res.status(400).json({ message: "No se subio ningun video" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Error al crear el video", error });
    }
  }
  async byCurso(req, res) {
    const { CursoId } = req.params;
    const videos = await Videos.findAll({
      where: { CursoId },
      order: [["order"]],
    });
    return res.status(200).json(videos);
  }
  async update(req, res) {
    console.log(req.body);
    return res.status(200).json({ message: "Actualizado correctamente" });
  }
}

module.exports = new VideosController();
