import React from 'react';
import Card from '@mui/material/Card';
import { styled, withStyles, fade } from '@mui/material/styles';
import ListItem from './ListItem.jsx';
import GameSearch from './GameSearch.jsx';

const apiURL = 'http://192.168.70.11:3001/api';

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
      games: {},
      genres: [],
      platforms: [],
      tags: [],
    };
    this.handleListUpdate = this.handleListUpdate.bind(this);
    this.randomizeArr = this.randomizeArr.bind(this);
  }

  componentDidMount() {
    // Fetch genres
    fetch(`${apiURL}/genres`)
      .then((response) => response.json())
      .then((data) => this.setState({
        genres: this.randomizeArr(data.results),
      }));

    // Fetch platforms
    fetch(`${apiURL}/platforms?page_size=30`)
      .then((response) => response.json())
      .then((data) => this.setState({
        platforms: this.randomizeArr(data.results),
      }));

    // Fetch tags
    fetch(`${apiURL}/tags?page_size=20`)
      .then((response) => response.json())
      .then((data) => this.setState({
        tags: this.randomizeArr(data.results),
      }));
  }

  handleListUpdate(genre) {
    fetch(`${apiURL}/games?genre=${genre}`)
      .then((response) => response.json())
      .then((data) => this.setState({
        games: this.randomizeArr(data.results),
      }));
  }

  randomizeArr(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render(props) {
    const { classes } = this.props;
    // const classes = useStyles();
    return (
      <div>
        <GameSearch
          updateList={this.handleListUpdate}
          genres={this.state.genres}
          platforms={this.state.platforms}
          tags={this.state.tags}
          handleReset={this.handleReset}
        />
        <br />
        { this.state.games.results
          ? (
            <div>
              { this.state.games.results.map((game, i) => (
                <div key={i}>
                  <Card className={classes.root}>
                    {game.name ? (
                      <ListItem
                        game={game}
                        key={i}
                        handleListUpdate={this.handleListUpdate}
                      />
                    ) : ''}
                  </Card>
                  <br />
                </div>
              ))}

            </div>
          ) : <div />}

        {this.props.updateList}
      </div>
    );
  }
}

export default List;
