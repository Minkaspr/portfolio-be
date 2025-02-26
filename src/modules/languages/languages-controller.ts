import express from 'express';

const projectsRouter = express.Router();

projectsRouter.get('/', (req, res) => {
  res.send('AQUI conseguiras los idiomas! Puedes probarlo');
});

export default projectsRouter;