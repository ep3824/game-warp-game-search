import React from 'react';
import {
  Button, Typography, CardContent, CardHeader, CardActionArea, CardMedia, CardActions,
} from '@mui/material';
import PhotoModal from './PhotoModal.jsx';

// import { createMuiTheme } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    backgroundColor: '#ffffff',
    color: theme.palette.text.main,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30',
  },
});

function ListItem(props) {
  const {
    tags, name, backgroundImage, platforms,
  } = props.game;
  return (
    <div>
      <CardActionArea>
        <CardHeader
          title={name}
          subheader={`Available on ${platforms[0].platform.name} & ${platforms.length - 1} more`}
        />
        <CardMedia
          image={backgroundImage}
          sx={{ height: '25em' }}
          title={name}
        />
        <CardContent>
          <Typography color="primary" variant="body2" component="ul">
            {tags[0] ? <li>{tags[0].name}</li> : ''}
            {tags[1] ? <li>{tags[1].name}</li> : ''}
            {tags[2] ? <li>{tags[2].name}</li> : ''}
            {tags[3] ? <li>{tags[3].name}</li> : ''}
          </Typography>
          <br />
          <div />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href={`https://www.youtube.com/results?search_query=${name}`}
        >
          Search Youtube
        </Button>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href={`https://www.amazon.com/s?k=${name}`}
        >
          Search Amazon
        </Button>
      </CardActions>
    </div>
  );
}

export default ListItem;
