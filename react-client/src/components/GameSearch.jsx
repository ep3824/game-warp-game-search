import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Button,
} from '@mui/material';
import { useStyles } from '@mui/material/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
//   media: {
//     paddingTop: '56.25%', // 16:9,
//     marginTop:'30',
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   inputRoot: {
//     fontSize: 25
//   },
//   labelRoot: {
//     fontSize: 25,
//     color: "red",
//   }
// }));

function GameSearch(props) {
  // const classes = useStyles();
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

  const genreArray = props.genres;
  const platformsArray = props.platforms;
  const tagArray = props.tags;
  const platformName = att2;
  let genreName = att1;
  if (att1 === 'RPG') {
    genreName = 'role-playing-games-rpg';
  }
  const platformIdNameMap = {};
  const convertPlatformName = function (name) {
    for (let i = 0; i < props.platforms.length; i++) {
      const idArr = props.platforms[i].id;
      const nameArr = props.platforms[i].name;
      platformIdNameMap[nameArr] = idArr;
    }
  };

  convertPlatformName();

  const handleClick = function () {
    if (att1 && att2 && att3) {
      const comboString = `?genres=${genreName.toLowerCase()}&platforms=${platformIdNameMap[att2]}&tags=${att3.toLowerCase()}`;
      // console.log(comboString)
      props.updateList(comboString);
    } else {
      console.log('error, enter all 4 input fields');
    }
  };

  // create function that calls updateList correctly according to user inpht
  // activate on clicking the search button
  // {att1 ? props.updateList(att1) : ''}
  return (
    <div>
      <Card style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <CardActionArea>
          <CardMedia
            // className={classes.media}
            src="banner.png"
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
          <FormControl>
            <InputLabel id="select-label-attribute1">Genre</InputLabel>
            <Select
              labelId="select-label-attribute1"
              id="select-attribute-1"
              value={att1}
              onChange={handleChangeAtt1}
            >
              {genreArray ? genreArray.map((genre, i) => <MenuItem key={i} value={genreArray[i].name}>{genreArray[i].name}</MenuItem>) : ''}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="select-label-attribute2">Platform</InputLabel>
            <Select
              labelId="select-label-attribute2"
              id="select-attribute-2"
              value={att2}
              onChange={handleChangeAtt2}
            >
              {platformsArray ? platformsArray.map((genre, i) => <MenuItem key={i} value={platformsArray[i].name}>{platformsArray[i].name}</MenuItem>) : ''}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="select-label-attribute3">Tags</InputLabel>
            <Select
              labelId="select-label-attribute3"
              id="select-attribute-3"
              value={att3}
              onChange={handleChangeAtt3}
            >
              {tagArray ? tagArray.map((genre, i) => <MenuItem key={i} value={tagArray[i].name}>{tagArray[i].name}</MenuItem>) : ''}
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
  );
}

export default GameSearch;
