import Usuario from "../model/Usuario.js";

class UsuarioController {
  async store(req, res) {
    const nombre = req.body.nombre;
    const nuevo=await Usuario.create({nombre});
    return res.json(nuevo);
  }

  async index(req, res) {
    return res.json();
  }

  async create(req, res) {
    return res.json();
  }

  async show(req, res) {
    const usuarios = await Usuario.findAll();
    return res.json(usuarios);
  }

  async edit(req, res) {
    return res.json();
  }

  async update(req, res) {
    return res.json();
  }

  async destroy(req, res) {
    return res.json();
  }

  async view(req, res) {
    return res.json();
  }

  async grid(req, res) {
    return res.json();
  }

  async form(req, res) {
    return res.json();
  }
}

export default new UsuarioController();
