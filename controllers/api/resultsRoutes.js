const router = require('express').Router();
const axios = require('axios');


router.get('/:zip', async (req, res) => {
  try {
    let zipCode = req.params.zip
    axios({
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RESTURANT_KEY,
        'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
      },
      url: `https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${zipCode}/0`
    }).then((results) => {
      console.log(results)
      if (!results.data){
            res.render('results', { 
                data: []
                });
        } else {
        console.log(req.session.logged_in)
        res.render('results', { 
            data: results.data['restaurants'],
            logged_in: req.session.logged_in
            });
        }
        return res;
        
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }


});

module.exports = router;

