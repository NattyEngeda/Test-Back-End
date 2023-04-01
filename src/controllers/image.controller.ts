import { Request, Response } from 'express';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import ImageModel from '../models/image.model';
import byteSize from 'byte-size';

dotenv.config();
export const uploadImages = async (req: Request<never, never, { name: String, imageSize: String }>, res: Response) => {
    try {
        if (!req.files) {
            res.status(401).json({ status: "Failed", message: "No Files Uploaded" });
        } else {
            const {
                name,
                imageSize
            } = req.body;
            console.log(req.body);
            const size = byteSize(imageSize, { units: 'iec', precision: 3 });
            const strSize = size.value + size.unit;
            const str = uuidv4();
            const strStr = str.toString();
            const image = req.files.image;
            console.log(image);
            const imageNaame = name + "-" + strStr.substring(0, 3) + path.extname(image?.name);
            image.mv('/uploads/' + imageNaame);
            ImageModel.create({
                name: name,
                image: imageNaame,
                size: strSize.toString()
            });
            res.status(200).json({ send: "Success", message: "Image Uploaded" });

        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ msg: "Error", error: error });
    }

}

export const viewImages = async (req: Request, res: Response) => {
    const images = await ImageModel.findAll();
    res.json(images);

}