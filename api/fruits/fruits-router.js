const express = require('express');
const Fruit = require('./fruits-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    
  } catch (err) {
    next(err)
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('fruits').where({ id }).first()
    .then(fruit => {
      res.json(fruit);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve fruit' });
    });
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
