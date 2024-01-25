import { Request, Response, NextFunction } from "express";
import { UserType, UserModel } from "../../models/user/index";

export const userRegister = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      return res.status(200).json({
        error: "User already exists",
      });
    }

    const newUser: UserType = new UserModel({
      username,
      password,
    });

    const savedUser = await newUser.save();
    const { username: _username, _id } = savedUser as UserType;

    res.status(201).json({ username: _username, _id });
  } catch (err) {
    console.error("Error creating an User:", err);
    res.status(500).send("Internal Server Error");
  }
};

export const userLogin = (req: Request, res: Response) => {
  try {
    const { user } = req;
    const { username, _id } = user as UserType;

    if (!req.isAuthenticated()) {
      return res.status(200).json({ error: "Authentication failed" });
    }

    res.status(200).json({ username, _id });
  } catch (err) {
    console.error("Error logging in an User:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const userLogout = (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    console.log("Usuario deslogueado");
  }
  res.sendStatus(200);
};
