import express from 'express';
import cors from 'cors';

class Server {
    constructor () {
        this.app = express();
        this.server();
        this.routes();
    }

    server() {
        this.app.listen(3333);
    }
    routes() {
      this.app.use(express.json());
      this.app.use(cors());
      this.app.get('/', (req, res) => {
        return res.json({
          'message': 'All Books'
        });
      })
   }
}

export default new Server();
