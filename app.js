import express from 'express';
import uploadRoutes from './src/routes/listPdfRoutes';

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
     this.app.use('/listpdf', uploadRoutes);
  }
}

export default new App().app;