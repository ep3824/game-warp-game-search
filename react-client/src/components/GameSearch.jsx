import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ListItem from './ListItem.jsx';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  media: {
    paddingTop: '56.25%', // 16:9,
    marginTop:'30',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputRoot: {
    fontSize: 25
  },
  labelRoot: {
    fontSize: 25,
    color: "red",
  }
}));


const GameSearch = (props) => {
  const classes = useStyles();
  const [att1, setAtt1] = React.useState('');
  const [att2, setAtt2] = React.useState('');
  const [att3, setAtt3] = React.useState('');


  const handleChangeAtt1 = (event) => {
    setAtt1(event.target.value);
  };

  const handleChangeAtt2 = (event) => {
    setAtt2(event.target.value);
  };

  const handleChangeAtt3 = (event) => {
    setAtt3(event.target.value);
  };

  let genreArray = props.genres
  let platformsArray = props.platforms
  let tagArray = props.tags
  let platformName = att2;
  let genreName = att1;
  if (att1 === 'RPG') {
    genreName = 'role-playing-games-rpg';
  }
  let platformIdNameMap = {};
  let convertPlatformName = function(name) {
    for (let i = 0; i < props.platforms.length; i++) {
      let idArr = props.platforms[i].id
      let nameArr = props.platforms[i].name
      platformIdNameMap[nameArr] = idArr
    }
  }

  convertPlatformName();

  let handleClick = function() {
    if (att1 && att2 && att3) {
      let comboString = '?genres=' + genreName.toLowerCase() + '&platforms=' + platformIdNameMap[att2] + '&tags=' + att3.toLowerCase()
      // console.log(comboString)
      props.updateList(comboString)
    } else {
      console.log('error, enter all 4 input fields')
    }
  }

  // create function that calls updateList correctly according to user inpht
  // activate on clicking the search button
  // {att1 ? props.updateList(att1) : ''}
  return (
    <div>
      <Card style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://mvp-project-ep.s3-us-west-1.amazonaws.com/game+warp+banner-01.png"
            title="Tetris"
            />
        </CardActionArea>
      </Card>
      <Card>
      <Box>
        <CardHeader
          title="Enter genre, platform, and tags. Get a list of games."
        />
        {/* <Typography color="primary" variant="h4" gutterBottom>
        </Typography> */}
        <FormControl  className={classes.formControl}>
            <InputLabel id="select-label-attribute1">Genre</InputLabel>
          <Select
            labelId="select-label-attribute1"
            id="select-attribute-1"
            value={att1}
            onChange={handleChangeAtt1}
          >
            {genreArray ? genreArray.map((genre, i) => {
              return <MenuItem key={i} value={genreArray[i].name}>{genreArray[i].name}</MenuItem>}): ''
            }
          </Select>
        </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="select-label-attribute2">Platform</InputLabel>
        <Select
          labelId="select-label-attribute2"
          id="select-attribute-2"
          value={att2}
          onChange={handleChangeAtt2}
        >
          {platformsArray ? platformsArray.map((genre, i) => {
            return <MenuItem key={i} value={platformsArray[i].name}>{platformsArray[i].name}</MenuItem>}): ''
          }
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="select-label-attribute3">Tags</InputLabel>
        <Select
          labelId="select-label-attribute3"
          id="select-attribute-3"
          value={att3}
          onChange={handleChangeAtt3}
        >
          {tagArray ? tagArray.map((genre, i) => {
            return <MenuItem key={i} value={tagArray[i].name}>{tagArray[i].name}</MenuItem>}): ''
          }
        </Select>
      </FormControl>
      <Box my={3} mx={1}>
        <Button onClick={handleClick} variant="outlined" color="primary">
            Search
        </Button>
      </Box>
      </Box>
      </Card>
    </div>
  )
}


export default GameSearch;