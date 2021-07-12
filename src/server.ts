import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

//config template engine
server.set('view engine', 'mustache');
//path views
server.set('views', path.join(__dirname, 'views'));
//import function mustache
server.engine('mustache', mustache());

//details project example: css and images
server.use(express.static(path.join(__dirname, '../public')));


//Routes
server.use(mainRoutes);
server.use((req, res) => {
    res.render('pages/404')
});

//run server
server.listen(process.env.PORT);