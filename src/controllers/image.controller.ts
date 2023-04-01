import { Request, Response } from 'express';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();
export const uploadImages = async (req: Request<never, never, {name:String, }>, res: Response) => {
    try {
        if (!req.files) {
            res.status(401).json({ status: "Failed", message: "No Files Uploaded" });
        } else {
            const {
                name,
            } = req.body;
            console.log(req.body);
            const str = uuidv4();
            const strStr = str.toString();
            // const image = req.files.image;
            // const imageNaame = name + "-" + strStr.substring(0, 3) + path.extname(image.name);
            // image.mv()

        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ msg: "Error", error: error });
    }

}

export const viewImages = async (req: Request, res: Response) => {

}