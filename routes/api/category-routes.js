const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//http://localhost:3001/api/categories/
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});
//http://localhost:3001/api/categories/1
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});
//http://localhost:3001/api/categories/
router.post('/', (req, res) => {
  // create a new category
});
//http://localhost:3001/api/categories/1
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});
//http://localhost:3001/api/categories/1
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
