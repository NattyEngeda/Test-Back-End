import express from "express";
import { dbTest, index } from "../controllers/index.controller";
import { uploadImages, viewImages } from "../controllers/image.controller";

const router = express.Router();

// Index Routes
router.get('/', index);
router.get('/dbtest', dbTest);

// Image Routes
router.get('/viewImages', viewImages);
router.post('/uploadImages', uploadImages);


export default router;
