import { Request, Response } from "express";
import database from "../database/database";

export const index = (req: Request, res: Response) => {
    console.log("Index controller");
    // console.log();

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

export const test = async (req: any, res: any) => {
    try {
        // console.log(req.body);
        // console.log(req.body);
        // const { name } = req.body;
        // console.log(name);


        if (!req.files) {
            console.log("No Files");
        } else {
            const { name } = req.body;
            const image = req.files.image;

            console.log("Name", name);
            console.log("Image", image);
        }







        res.json({ message: "Test Success" });
    } catch (error) {
        console.log(error);
        res.status(401).json({ msg: "Error", error: error });

    }
}