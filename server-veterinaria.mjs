import 'dotenv/config';

import express, { json } from 'express';
import RegistroController from './features/registros/api/v1/registro-controller.mjs';


const app = express();

// Middleware
app.use(json());

// Routes

const registroApiController= new RegistroController();

app.use('/api/', registroApiController.getRouter());



// Start the server
const PORT = process.env.PORT || 3000;

console.log(process.env.MYSQL_DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
