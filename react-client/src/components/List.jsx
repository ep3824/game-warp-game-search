import React, { Suspense } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled, withStyles, fade } from '@mui/material/styles';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import ListItem from './ListItem.jsx';
import GameSearch from './GameSearch.jsx';
import LoadingComponent from './LoadingComponent.jsx';

const apiURL = 'http://192.168.70.11:4002/api';

const styles = (theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30',
  },
});

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasGames: null,
      games: [],
      genres: [
        { id: 4, name: 'Action' },
        { id: 5, name: 'RPG' },
        { id: 2, name: 'Shooter' },
        { id: 3, name: 'Adventure' },
        { id: 10, name: 'Strategy' },
      ],
      platforms: [
        { id: 4, name: 'PC' },
        { id: 18, name: 'PlayStation 4' },
        { id: 1, name: 'Xbox One' },
        { id: 7, name: 'Nintendo Switch' },
        { id: 187, name: 'PlayStation 5' },
      ],
      tags: [
        { id: 7, name: 'Multiplayer' },
        { id: 18, name: 'Co-op' },
        { id: 24, name: 'RPG' },
        { id: 13, name: 'Atmospheric' },
        { id: 31, name: 'Singleplayer' },
      ],
    };

    this.handleListUpdate = this.handleListUpdate.bind(this);
    this.randomizeArr = this.randomizeArr.bind(this);
    this.filterGameList = this.filterGameList.bind(this);
  }

  handleListUpdate(genre, platform, tag, combo) {
    this.setState({ isLoading: true });
    fetch(`${apiURL}/${combo}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const filteredGames = this.filterGameList(genre, platform, tag, data.results);
        console.log('game data', data.results);
        console.log(filteredGames, 'filtered games');
        if (filteredGames.length > 0) {
          this.setState({ hasGames: true });
        } else {
          this.setState({ hasGames: false });
        }
        console.log('genre, platform, tag', genre, platform, tag);
        const randomizedGames = this.randomizeArr(filteredGames);
        this.setState({ games: randomizedGames });
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.error('Error fetching data:', error);
      });
  }

  filterGameList(genre, platform, tag, list) {
    console.log('this is what the filter game list args look like:', genre, platform, tag);
    return list.filter((item) => item.platforms.some((p) => p.platform.name === platform)
    && item.tags.some((t) => t.name === tag)
    && item.genres.some((g) => g.name === genre));
  }

  randomizeArr(array) {
    if (Array.isArray(array) === false) {
      console.error('randomizeArr only accepts arrays');
      return;
    }
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    const { updateList } = this.props;
    const {
      games, genres, platforms, tags, isLoading, hasGames,
    } = this.state;
    return (
      <Card>
        <GameSearch
          updateList={this.handleListUpdate}
          genres={genres}
          platforms={platforms}
          tags={tags}
          handleReset={this.handleReset}
        />
        <br />
        {games.length > 0 && !isLoading ? (
          <div>
            {games.map((game) => (
              <div key={game.slug}>
                <Card>
                  <ListItem
                    game={game}
                    key={game.slug}
                    handleListUpdate={this.handleListUpdate}
                  />
                </Card>
                <br />
              </div>
            ))}
          </div>
        ) : null }
        {
          hasGames === false && (
            (
              <Typography>
                No games found, please try again.
              </Typography>
            )
          )
        }

        {isLoading && (
          <LoadingComponent />
        )}

      </Card>

    );
  }
}

export default List;
