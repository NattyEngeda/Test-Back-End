import { Request, Response } from "express";
import database from "../database/database";

export const index = (req: Request, res: Response) => {
    console.log("Index controller");

    res.json({ message: "Index Controller" });
}

export const dbTest = async (req: Request, res: Response) => {
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');
        res.json({ message: "DB Test Success" });

    } catch (error) {
        console.error('Unable to connect to the database:', error);
        res.json({ message: "DB Test Error", error: error });

    }
}