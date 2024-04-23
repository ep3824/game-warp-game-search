import React, { useEffect, useState } from 'react';
import {
  Typography,
  CardHeader,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Button,

} from '@mui/material';

function GameSearch(props) {
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [tag, setTag] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [platformIdNameMap, setPlatformIdNameMap] = useState({});
  const {
    updateList, genres, platforms, tags,
  } = props;

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
    platforms.forEach((p) => {
      newPlatformIdNameMap[p.name] = p.id;
    });
    setPlatformIdNameMap(newPlatformIdNameMap);
  }, [platforms]);

  const handleClick = function () {
    let genreName = genre;
    if (genreName.toLowerCase() === 'rpg') {
      genreName = 'role-playing-games-rpg';
    }
    if (genre && platform && tag) {
      const comboString = `games?genres=${genreName.toLowerCase()}&platforms=${platformIdNameMap[platform]}&tags=${tag.toLowerCase()}`;
      console.log(comboString);
      updateList(genre, platform, tag, comboString);
      setErrorMsg(null);
    } else {
      setErrorMsg('Please select an option for each category.');
    }
  };

  return (
    <Box>
      <CardHeader
        title="Enter genre, platform, and tags. Get a list of games."
      />
      <FormControl sx={{ mt: 5, pt: 1, mx: 2 }}>
        <InputLabel id="select-label-attribute1">Genre</InputLabel>
        <Select
          labelId="select-label-attribute1"
          id="select-attribute-1"
          value={genre}
          onChange={handleChangeGenre}
              // Needs responsive width
          sx={{ width: 260 }}
        >
          {genres ? genres.map((genreItem) => <MenuItem key={genreItem.name} value={genreItem.name}>{genreItem.name}</MenuItem>) : ''}
        </Select>
      </FormControl>

      <FormControl sx={{ mt: 5, pt: 1, mx: 2 }}>
        <InputLabel id="select-label-attribute2">Platform</InputLabel>
        <Select
          labelId="select-label-attribute2"
          id="select-attribute-2"
          value={platform}
          onChange={handleChangePlatform}
          sx={{ width: 260 }}
        >
          {platforms ? platforms.map((platformItem) => <MenuItem key={platformItem.name} value={platformItem.name}>{platformItem.name}</MenuItem>) : ''}
        </Select>
      </FormControl>

      <FormControl sx={{ mt: 5, pt: 1, mx: 2 }}>
        <InputLabel id="select-label-attribute3">Tags</InputLabel>
        <Select
          labelId="select-label-attribute3"
          id="select-attribute-3"
          value={tag}
          onChange={handleChangeTag}
          sx={{ width: 260 }}
        >
          {tags ? tags.map((tagItem, i) => <MenuItem key={i} value={tagItem.name}>{tagItem.name}</MenuItem>) : ''}
        </Select>
      </FormControl>
      <Box my={3} mx={2}>
        <Button onClick={() => handleClick()} variant="outlined" color="primary">
          Search
        </Button>
        {
          errorMsg && (
            <Typography color="error">{errorMsg}</Typography>
          )
        }
      </Box>
    </Box>
  );
}

export default GameSearch;
