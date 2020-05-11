const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    //get a list of posts from the database
    // SELECT * FROM Posts;
    db.select('*')
    .from('posts')
    .then(posts => {res.status(200).json({data: posts})})
    .catch(error => { console.log('Error', error); res.status(500).json({Error: error})})
});

router.get('/:id', (req, res) => {
    // get a post from the database based on id
    // SELECT "" FROMS Posts WHERE ID = blank;
    db('posts')
    .where({id: req.params.id})
    .first()
    .then(post => {if(post){res.status(200).json({data: post})}else{res.status(404).json({message: "record not found"})}})
    .catch(error => {console.log('Error', error); res.status(500).json({Error: error})})
});

router.post('/', (req, res) => {
    const post = req.body
    // post a new post to the database
    // INSERT INTO Posts (Title, Contents) VALUES ('TEST TITLE', 'TEST CONTENTS')
    db.insert((post, "id"),['id'])
    .into('posts')
    .then(id => {res.status(201).json({data: id, message: 'post created successfully'})})
    .catch(error => {res.status(500).json({Error: error})})
});

router.put('/:id', (req, res) => {
    const post = req.body
    // update a post in the database
    db('posts').where({id: req.params.id}).update({title: post.title, contents: post.contents}, ['id', 'title', 'contents']).then(count => {if(count!==0){res.status(200).json(count)}else{res.status(404).json({error: "no record with that ID"})}})
});

router.delete('/:id', (req, res) => {
    db('posts').where({id: req.params.id}).del().then(resp => {if(resp !== 0){res.status(200).json({deletedCount: resp})}else{res.status(404).json({error: 'no post with that id'})}})
});

module.exports = router;