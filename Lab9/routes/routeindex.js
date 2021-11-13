const { render } = require('ejs');
const express = require('express');
const router = express.Router();
//const Task = require('../model/task');
const Post = require('../model/post')
//-----

router.get('/', async function(req,res){
  var posts = await Post.find()
  console.log(posts)

  res.render('index', {posts});
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

// subir el newPost
router.post('/newPost', async (req,res)=> {
  var post = new Post(req.body)
  console.log(post)
  await post.save()
  res.redirect('/')
});

//edit
router.get('/edit/:id',   async(req,res) =>{

  var id= req.params.id
  var post = await Post.findById(id)
  res.render('edit', {post})
})

// Ruta para efectuar la actualizacion de los datos utilizando el metodo update()
router.post('/edit/:id',   async(req,res) =>{
  console.log(req.body)
  var id = req.params.id
  await Post.updateOne({_id: id}, req.body)
  res.redirect('/')

  })

//end edit

//delete
router.get('/delete/:id',   async(req,res) =>{

  var id= req.params.id
  var post = await Post.findById(id)
  res.render('delete', {post})
})

// Ruta para borrar el post
router.post('/delete/:id',   async(req,res) =>{
  //console.log(req.body)
  var id = req.params.id
  await Post.remove({_id: id})
  res.redirect('/')
  })

//end delete

module.exports = router;