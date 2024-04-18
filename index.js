import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

//DECLARACION __DIRNAME PARA ES6
const __dirname = dirname(fileURLToPath(import.meta.url));

//INICIAR EXPRESS
const app = express()

//USAR PUBLIC COMO ARCHIVO ESTATICO
app.use(express.static('public'));

//CONFIGURACION DE PUERTO
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor se inicio en http://localhost:${PORT}`)
})


app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})


//CONFIGURACION PAGINAS NO RUTEADAS MSJ ERROR (SIEMPRE AL FINAL)
app.get("/*", (req,res)=>{
    res.send("404 Error not found")
})