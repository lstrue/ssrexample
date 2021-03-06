import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore'

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  console.log('-------', matchRoutes(Routes, req.path));
  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });

  console.log('promises-------', promises);

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3005, () => {
  console.log('Listening on prot 3005');
});