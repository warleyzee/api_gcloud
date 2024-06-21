import express from 'express';
import cors from 'cors';
import testConectionRoutes from './src/routes/testConectionRoute.js';
import listPdfRoutes from './src/routes/listPdfRoutes.js';
import submittalRoutes from './src/routes/submittalRoutes.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(cors({
      exposedHeaders: ['X-Total-Count'],
    }));
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());

  }

  routes(){
    // test Conection
    this.app.use('/', testConectionRoutes);
    
    //pdf
    this.app.use('/listpdf', listPdfRoutes);

    //submittals
    this.app.use('/submittal', submittalRoutes)
    this.app.use('/submittal', submittalRoutes)
    this.app.use('/submittal', submittalRoutes)
  }
}

export default new App().app;