const axios = require('axios');
const router = require('express').Router();
const config = require('../utils/config');

router.get('/featured', async (req, res) => {
  try {
    const featuredData = await axios.get(`${config.baseApiUrl}/movie/popular?api_key=${config.APIKey}&language=en-US&page=1`);

    const featuredMovies = [];

    for (let x = 0; x < 3; x++) {
      const randomNumber = Math.floor(Math.random() * 19);
      const randomMovie = featuredData.data.results[randomNumber];
      featuredMovies.push(randomMovie);
    }

    res.json({
      message: 'success',
      data: featuredMovies
    });
  } catch (error) {
    res.json({
      message: 'failure',
      error
    });
  }

});
router.get('/featured', (req, res) => {
  res.send('<h2>Just a test</h2>');
});

router.get('/now-playing', async (req, res) => {
  try {
    const comingSoonData = await axios.get(`${config.baseApiUrl}/movie/popular?api_key=${config.APIKey}&language=en-US&page=1`);

    const comingSoonMovies = comingSoonData.data.results.slice(0, 8);

    res.json({
      message: 'success',
      data: comingSoonMovies
    });
  } catch (error) {
    res.json({
      message: 'failure',
      error
    });
  }

});

router.get('/now-playing', async (req, res) => {
  try {
    const comingSoonData = await axios.get(`${config.baseApiUrl}/movie/now_playing?api_key=${config.APIKey}&language=en-US&page=1`);

    const comingSoonMovies = comingSoonData.data.results.slice(0, 8);

    res.json({
      message: 'success',
      data: comingSoonMovies
    });
  } catch (error) {
    res.json({
      message: 'failure',
      error
    });
  }

});

router.get('/coming-soon', async (req, res) => {
  try {
    const comingSoonData = await axios.get(`${config.baseApiUrl}/movie/upcoming?api_key=${config.APIKey}&language=en-US&page=1`);

    const comingSoonMovies = comingSoonData.data.results.slice(3, 6);

    res.json({
      message: 'success',
      data: comingSoonMovies
    });
  } catch (error) {
    res.json({
      message: 'failure',
      error
    });
  }

});

module.exports = router;