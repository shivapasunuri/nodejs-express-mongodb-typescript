import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import log from "../log/logger";

export default {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body) {
        const user = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
        });
        await user.save();
        log.info("User Created!!");
        res.status(200).json({ msg: "New User Created" });
      } else {
        log.error("User creation failed!!");
        res.status(500).json({ msg: "No data" });
      }
    } catch (err) {
      next(err);
    }
  },
  getAllUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allUsers = await User.find();
      if (allUsers.length > 0) {
        log.info(`Total no of users ${allUsers.length}`);
        res.status(200).send(allUsers);
      } else {
        log.error("Failed!! getting all users");
        res.status(500).json({ msg: "Query failed" });
      }
    } catch (err) {
      next(err);
    }
  },
};
