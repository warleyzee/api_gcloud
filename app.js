import express from 'express';
import testConectionRoutes from './src/routes/testConectionRoute.js';
import listPdfRoutes from './src/routes/listPdfRoutes.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());

  }

  routes(){
    this.app.use('/listpdf', listPdfRoutes);
    this.app.use('/', testConectionRoutes);
  }
}

export default new App().app;