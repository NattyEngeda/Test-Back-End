import { DataTypes } from "sequelize";
import database from "../database/database";

const ImageModel = database.define('images', {
    name: {
        type: DataTypes.STRING,
    },
    size: {
        type: DataTypes.STRING,
    },
});

export default ImageModel;
