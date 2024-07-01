import express from 'express';
import cors from 'cors';

import testConectionRoutes from './src/routes/testConectionRoute.js';
import listPdfRoutes from './src/routes/listPdfRoutes.js';
import submittalRoutes from './src/routes/submittalRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import companyRoutes from './src/routes/companyRoutes.js';


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
    this.app.use('/uploads', express.static('uploads'));

  }

  routes(){
    // test Conection
    this.app.use('/', testConectionRoutes);
    
    //pdf
    this.app.use('/listpdf', listPdfRoutes);

    //submittals
    this.app.use('/submittal', submittalRoutes)
    // this.app.use('/submittal', submittalRoutes)
    // this.app.use('/submittal', submittalRoutes)

    //users
    this.app.use('/users', userRoutes);

    //company
    this.app.use('/company', companyRoutes)
  }
}

export default new App().app;