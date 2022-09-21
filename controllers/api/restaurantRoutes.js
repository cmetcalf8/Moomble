const router = require('express').Router();
const { Restaurant } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRestaurant);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const restaurantData = await Restaurant.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!restaurantData) {
      res.status(404).json({ message: 'No restaurant found with this id!' });
      return;
    }

    res.status(200).json(restaurantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;