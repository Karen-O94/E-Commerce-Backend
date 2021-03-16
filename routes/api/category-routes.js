const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
    
      include: [{ model: Product}]
      //include: [{ model: Product, through: Product, as: 'product_name' }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
 // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    }, //search for category by id value
  })
    .then(categoryData => {
      if (!categoryData[0]) {
        res.status(404).json({ message: 'No tag found with this id' });
        return; // if id value is 0, then return message above
      }
      res.json(categorytData);//return categoryData as a json
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

//Miscellaneous code
 
  // try {
  //   const categoryData = await Category.update({where: { id: req.params.id }})
  //   res.status(200).json(categoryData);
  // } catch (err) {
  //   res.status(400).json(err);
  // }