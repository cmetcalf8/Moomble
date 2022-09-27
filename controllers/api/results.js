const router = require('express').Router();
const axios = require('axios');


router.get('/:id', async (req, res) => {
  try {
    let zipCode = req.params.id
    axios({
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RESTURANT_KEY,
            'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
        },
        url: `https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${zipCode}/0`
    }).then((results) => {
        if (!results.data){
            res.render('results', { 
                data: []
                });
        } else {
        
        res.render('results', { 
            data: results.data['restaurants']
            });
        }
        return res;
        
    });
  } catch (err) {
    console.log(err);
    res.render('results', { 
        data: []
      });
  }


});

module.exports = router;

