import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import fileupload from 'express-fileupload';
import router from './routes/routes';

const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE'],
    optionsSuccessStatus: 200
}));

app.use(fileupload({
    createParentPath: true,
}));
app.options('*', cors());
app.use(bodyParser.json());

app.use(router);

const port = process.env.PORT;
const env = process.env.NODE_ENV || 'development';


app.listen(port, () => {
    console.log(`Server running on port ${port}, in ${env} mode`);
});



