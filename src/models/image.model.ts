import { DataTypes } from "sequelize";
import database from "../database/database";

const ImageModel = database.define('images', {
    name: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    size: {
        type: DataTypes.STRING,
    },
});

// (async () => {
//     await database.sync({ force: true });
//     // Code here
// })();

export default ImageModel;
