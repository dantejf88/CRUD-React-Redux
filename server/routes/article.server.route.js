// ./express-server/routes/article.server.route.js
import express from 'express';
//import controller file
import * as articleController from '../controllers/article.server.controller';
// get an instance of express router
const router = express.Router();
router.route('/')
     .get(articleController.getArticles)
     .post(articleController.addArticle)

router.route('/:id')

      .delete(articleController.deleteArticle);
export default router;
