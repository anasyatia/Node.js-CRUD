const express = require('express')
const router = express.Router()
const {
    getAuthors,
    getAuthor,
    addAuthor,
    updateAuthor,
    deleteAuthor
} = require('../controllers/AuthorController')

router.get('/', getAuthors)

router.get('/:id', getAuthor)

router.post('/', addAuthor)

router.put('/:id', updateAuthor)

router.delete('/:id', deleteAuthor)

module.exports = router