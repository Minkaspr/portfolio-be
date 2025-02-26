import express from 'express';

const projectsRouter = express.Router();

projectsRouter.get('/', (req, res) => {
  res.send('Estoy trabajando en ello');
});

export default projectsRouter;