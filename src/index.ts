import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Configurar Express para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Ruta principal
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Rutas para cada framework
app.get('/angularjs', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/angularjs.html'));
});

app.get('/laravel', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/laravel.html'));
});

app.get('/nodejs', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/nodejs.html'));
});

app.get('/spring', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/spring.html'));
});

// Manejar cualquier otra ruta y redirigir a index.html
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
