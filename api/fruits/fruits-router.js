const express = require('express');
const Fruit = require('./fruits-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const all = await Fruit.getAll()
    res.json(all)
  } catch (err) {
    next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const fruit = await Fruit.getBy(req.params.id)
    res.json(fruit)
  } catch (err) {
    next(err)
  }
});

router.post('/', (req, res) => {
  const fruitData = req.body;
  db('fruits').insert(fruitData)
    .then(ids => {
      db('fruits').where({ id: ids[0] })
        .then(newFruitEntry => {
          res.status(201).json(newFruitEntry);
        });
    })
    .catch(err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
