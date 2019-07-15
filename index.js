import '@babel/polyfill';
import express from 'express';
import logger from 'morgan';
import Debug from 'debug';
import ServerResponse from './server/modules/ServerResponse';

// import router
import routes from './server/routes';

const debug = Debug('dev');
const { successfulRequest, serverError, error404 } = ServerResponse;
const API_PREFIX = '/api/v1';
const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.get('/', (req, res) => successfulRequest(res, 200, { message: 'Welcome To Edustripe-Save!' }));
app.use(`${API_PREFIX}`, routes);

app.use(serverError, error404);
app.listen(PORT, () => {
  debug(`Server is up and running on Port ${PORT}`);
});
