import Users from "../model/Users.js";

class UsersController {
  async store(req, res) {
    const nombre = req.body.nombre;
    const nuevo=await Users.create({nombre});
    return res.json(nuevo);
  }

  async index(req, res) {
    return res.json();
  }

  async create(req, res) {
    return res.json();
  }

  async show(req, res) {
    const Userss = await Users.findAll();
    return res.json(Userss);
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

export default new UsersController();
