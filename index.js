import express from 'express';
import { engine } from 'express-handlebars';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { frutas } from './public/assets/js/frutas.js';

//DECLARACION __DIRNAME PARA ES6
const __dirname = dirname(fileURLToPath(import.meta.url));

//INICIAR EXPRESS
const app = express()

//USAR PUBLIC COMO ARCHIVO ESTATICO
app.use(express.static('public'));

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');
//CONFIGURACION DE PUERTO
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor se inicio en http://localhost:${PORT}`)
})


app.get('/', (req,res)=>{
    res.render('home')
})


//CONFIGURACION PAGINAS NO RUTEADAS MSJ ERROR (SIEMPRE AL FINAL)
app.get("/*", (req,res)=>{
    res.send("404 Error not found")
})