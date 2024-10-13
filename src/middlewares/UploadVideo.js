const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadDir = "./public/uploads";

// Verificar si el directorio existe, si no, crearlo
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, ""));
  },
});

// Función de filtrado de archivos
const fileFilter = (req, file, cb) => {
  if (file.fieldname === "video") {
    // Validar tipos de video
    const videoTypes = /mp4|avi|mkv|mov/;
    const extname = videoTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = videoTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      return cb(new Error("Error: Solo se permiten videos!"));
    }
  } else if (file.fieldname === "miniatura") {
    // Validar tipos de imagen
    const imageTypes = /jpeg|jpg|png|gif/;
    const extname = imageTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = imageTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      return cb(new Error("Error: Solo se permiten imágenes como miniaturas!"));
    }
  } else {
    cb(new Error("Error: Campo de archivo desconocido!"));
  }
};

// Configuración de Multer
const uploadvideo = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    // Limites generales; puedes ajustarlos según tus necesidades
    fileSize: 10 * 1024 * 1024 * 1024, // 10 GB para videos
  },
});

// Exportar el middleware configurado para múltiples campos
module.exports = uploadvideo.fields([
  { name: "video", maxCount: 1 },
  { name: "miniatura", maxCount: 1 },
]);
