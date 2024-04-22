import React, { useEffect, useState } from 'react';
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
  Grid,
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
  const [genre, setGenre] = React.useState('');
  const [platform, setPlatform] = React.useState('');
  const [tag, setTag] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [platformIdNameMap, setPlatformIdNameMap] = useState({});

  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleChangePlatform = (event) => {
    setPlatform(event.target.value);
  };

  const handleChangeTag = (event) => {
    setTag(event.target.value);
  };

  useEffect(() => {
    const newPlatformIdNameMap = {};
    platforms.forEach((platform) => {
      newPlatformIdNameMap[platform.name] = platform.id;
    });
    setPlatformIdNameMap(newPlatformIdNameMap);
  }, [platforms]);

  const {
    updateList, genres, platforms, tags,
  } = props;
  const platformName = platform;
  let genreName = genre;
  if (genre === 'RPG') {
    genreName = 'role-playing-games-rpg';
  }

  const convertPlatformName = function (name) {
    for (let i = 0; i < props.platforms.length; i++) {
      const idArr = props.platforms[i].id;
      const nameArr = props.platforms[i].name;
      platformIdNameMap[nameArr] = idArr;
    }
  };

  convertPlatformName();

  const handleClick = function () {
    if (genre && platform && tag) {
      const comboString = `games?genres=${genreName.toLowerCase()}&platforms=${platformIdNameMap[platform]}&tags=${tag.toLowerCase()}`;
      // console.log(comboString)
      updateList(comboString);
      setErrorMsg(null);
    } else {
      setErrorMsg('Please select an option for each category.');
    }
  };

  // create function that calls updateList correctly according to user inpht
  // activate on clicking the search button
  // {att1 ? props.updateList(att1) : ''}
  return (
    <Grid container spacing={2}>
      <Card>
        <CardHeader
          title="Enter genre, platform, and tags. Get a list of games."
        />
        {/* <Typography color="primary" variant="h4" gutterBottom>
        </Typography> */}
        <Box mx={2}>
          <FormControl>
            <InputLabel id="select-label-attribute1">Genre</InputLabel>
            <Select
              labelId="select-label-attribute1"
              id="select-attribute-1"
              value={genre}
              onChange={handleChangeGenre}
              // Needs responsive width
              sx={{ width: 160 }}
            >
              {genres ? genres.map((genreItem, i) => <MenuItem key={i} value={genreItem.name}>{genreItem.name}</MenuItem>) : ''}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="select-label-attribute2">Platform</InputLabel>
            <Select
              labelId="select-label-attribute2"
              id="select-attribute-2"
              value={platform}
              onChange={handleChangePlatform}
              sx={{ width: 160 }}
            >
              {platforms ? platforms.map((platformItem, i) => <MenuItem key={i} value={platformItem.name}>{platformItem.name}</MenuItem>) : ''}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="select-label-attribute3">Tags</InputLabel>
            <Select
              labelId="select-label-attribute3"
              id="select-attribute-3"
              value={tag}
              onChange={handleChangeTag}
              sx={{ width: '100%' }}
            >
              {tags ? tags.map((tagItem, i) => <MenuItem key={i} value={tagItem.name}>{tagItem.name}</MenuItem>) : ''}
            </Select>
          </FormControl>
        </Box>
        <Box my={3} mx={2}>
          <Button onClick={handleClick} variant="outlined" color="primary">
            Search
          </Button>
          {
          errorMsg && (
            <Typography color="error">{errorMsg}</Typography>
          )
        }
        </Box>
      </Card>
    </Grid>
  );
}

export default GameSearch;
