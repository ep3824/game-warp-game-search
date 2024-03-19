import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from './ListItem.jsx';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import GameSearch from './GameSearch.jsx'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  }
})

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      games: {},
      genres: [],
      platforms: [],
      tags: [],
    }
    this.handleListUpdate = this.handleListUpdate.bind(this);
    this.randomizeArr = this.randomizeArr.bind(this);
  }

  componentDidMount() {
    fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=10`, {
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(data => data.json())
      .then(moreData => this.randomizeArr(moreData.results))

    fetch(`https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`, {
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(data => data.json())
      .then(moreData => this.setState({
        genres: moreData.results
      }))

    fetch(`https://api.rawg.io/api/platforms?key=${process.env.RAWG_API_KEY}&page_size=30`, {
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(data => data.json())
      .then(moreData => this.setState({
        platforms: moreData.results
      }))

    fetch(`https://api.rawg.io/api/tags?key=${process.env.RAWG_API_KEY}&page_size=20`, {
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(data => data.json())
      .then(moreData => this.setState({
        tags: moreData.results
      }))
    }


  randomizeArr(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({
      games: array
    })
  }

  handleListUpdate(genre) {
    fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&genre=${genre}`)
      .then(data => data.json())
      .then(moreData => this.setState({
        games: moreData
      }))
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
        <br></br>
        { this.state.games.results ?
        <div>
        { this.state.games.results.map((game, i) =>
          <div key={i}>
              <Card className={classes.root}>
                {game.name ? <ListItem
                  game={game}
                  key={i}
                  handleListUpdate={this.handleListUpdate}
                /> : ''}
              </Card>
            <br></br>
          </div>
        )}

        </div> : <div></div>}

        {this.props.updateList}
      </div>
    )
  }

}


export default withStyles(styles)(List);