const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => { //works
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => { //works
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'selected_tags' }] //define alias like planned_trips
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => { //works
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => { //works
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }, //search for Tag by id value
  })
    .then(tagData => {
      if (!tagData[0]) {
        res.status(404).json({ message: 'No tag found with this id' });
        return; // if id value is 0, then return message above
      }
      res.json(tagData);//return tagData as a json
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', async (req, res) => { //works
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

//Miscellanous code
  // try {
  //   const tagData = await Tag.update({where: { id: req.params.id }});
  //   res.status(200).json(tagData);
  // } catch (err) {
  //   res.status(400).json(err);
  // }