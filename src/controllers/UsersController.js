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
    try {
      const { nombre, document, adress, phone, email, password } = req.body;
      if (!nombre || !email || !password) {
        return res.status(400).json({ error: 'Nombre, email y contraseña son obligatorios' });
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'El formato del email no es válido' });
      }
  
      const existingUser = await Users.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'El email ya está en uso' });
      }

      await Users.create({
        nombre,
        document,
        adress,
        phone,
        email,
        password,
      });
  
      return res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
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
