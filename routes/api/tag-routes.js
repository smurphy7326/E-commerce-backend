const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      through: ProductTag,
      as: 'products'
    }
  })
  .then(newTagData => res.json(newTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.FindOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        through:ProductTag,
        as: 'products'
    }
    ]
  })
  .then(newTagData => res.json(newTagData))
  .catch(err => {
    console.log('There is no ID associated with this Product'); // this goes above with the other comments
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.tag_name
  })
  .then(newTagData => res.json(newTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
