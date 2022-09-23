const router = require('express').Router();
const { Restaurant, User } = require('../models');
const withAuth = require('../utils/auth');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '803769a760msh0b927317a3037b5p16a8f3jsnaab08108dfb1',
		'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
	}
};

router.get('/', async (req, res) => {
  try {
    // Get all restaurants and JOIN with user data
    const restaurantAPI = req.params.zip;
    const restaurantData = await Restaurant.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    fetch(`https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${restaurantAPI}/0`, options)
	.then(response => response.json())
	.then(response => {
    console.log(response)
    res.render('results', { 
      restaurants, 
      logged_in: req.session.logged_in 
    });
  })
	.catch(err => console.error(err));

    // Serialize data so the template can read it
    // const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));

    // Pass serialized data and session flag into template

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/restaurant/:id', async (req, res) => {
  try {
    const restaurantData = await Restaurant.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const restaurant = restaurantData.get({ plain: true });

    res.render('restaurant', {
      ...restaurant,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Restaurant }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
