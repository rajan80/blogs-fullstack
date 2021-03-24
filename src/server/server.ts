import * as express from 'express';
import apiRouter from './routes';

const app = express();
app.use(express.json());


const path = require("path");

app.use(express.static('public'));
app.use('/api/blogs',apiRouter)


const port = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, "../client")));
app.listen(port, () => console.log(`Server listening on port: ${port}`));
