// ./express-server/controllers/article.server.controller.js
import mongoose from 'mongoose';
//import models
import Article from '../models/article.server.model';

export const getArticles = (req,res) => {
  Article.find().exec((err,articles) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Articles fetched successfully',articles});
  });
}

export const addArticle = (req,res) => {
  console.log(req.body)
  const newArticles = new Article(req.body);
  newArticles.save((err,article) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Articles added successfully',article});
  })
}

export const deleteArticle = (req,res) => {
  console.log(req.params.id);
  Article.findByIdAndRemove(req.params.id, (err,article) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':article.title+' deleted successfully'});
  })
}
