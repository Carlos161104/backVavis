import { User } from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({
      data: users,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json({
      data: user,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({
      data: user,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "User updated",
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "User deleted",
    });
  } catch (error) {
    console.error(error);
  }
};
