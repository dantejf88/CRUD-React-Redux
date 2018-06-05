import express from 'express';
//import controller file
import * as filesController from '../controllers/files.server.controller';
// get an instance of express router
const router = express.Router();


router.route("/files")
      .post(articleController.uploadImage)
