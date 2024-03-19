const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(`${__dirname}/../react-client/dist`));
// app.use(bodyParser.json());
const dotenv = require('dotenv');

dotenv.config();
const cors = require('cors');

app.use(cors());

app.get('/api/:endpoint', async (req, res) => {
  const { endpoint } = req.params;
  const API_KEY = process.env.RAWG_API_KEY;
  const apiURL = `https://api.rawg.io/api/${endpoint}?key=${API_KEY}`;

  try {
    const apiResponse = await fetch(apiURL);
    if (!apiResponse.ok) {
      throw new Error('Failed to fetch game data from RAWG API');
    }
    const data = await apiResponse.json();
    res.json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// app.get('/api/games', function(req, res) {
//   fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=10`, {
//       headers: {
//         'Content-Type': 'application/json',
//       }})
//       .then(data => data.json())
//       .then(moreData => this.randomizeArr(moreData.results))
// })

app.listen(3001, () => {
  console.log('listening on port 3001!');
});
