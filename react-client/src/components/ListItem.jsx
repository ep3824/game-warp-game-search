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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
//   cardAction: {
//     display: 'block',
//     textAlign: 'initial'
//   }
// }));

function ListItem(props) {
  console.log(props.game);
  // const { firstStyle, secondStyle } = useStyles(props);
  // const { classes } = props;

  // const handleClick = () => {
  //   let randomGenreIndex = Math.floor(Math.random() * props.game.genres.length)
  //   let randomGenre = props.game.genres[randomGenreIndex].slug
  //   console.log(randomGenre)
  //   props.handleListUpdate('?' + randomGenre + '&platforms=' )
  // }
  const platformArr = props.game.platforms;
  return (
    <div>
      <CardActionArea>
        <CardHeader
          title={props.game.name}
          subheader={`Available on ${platformArr[0].platform.name} & ${platformArr.length - 1} more`}
        />
        <CardMedia
          // className={classes.media}
          image={props.game.background_image}
          sx={{ height: '25em' }}
          title={props.game.name}
        />
        <CardContent>
          <Typography color="primary" variant="body2" component="ul">
            {/* {props.game.genre} */}
            {props.game.tags[0] ? <li>{props.game.tags[0].name}</li> : ''}
            {props.game.tags[1] ? <li>{props.game.tags[1].name}</li> : ''}
            {props.game.tags[2] ? <li>{props.game.tags[2].name}</li> : ''}
            {props.game.tags[3] ? <li>{props.game.tags[3].name}</li> : ''}
          </Typography>
          <br />
          {/* {props.game.clip ?
            <CardMedia
            component="iframe"
            height="360"
            src={props.game.clip ? props.game.clip.clip : ''}
            />
            :
            ''
          } */}
          <div />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href={`https://www.youtube.com/results?search_query=${props.game.name}`}
        >
          Search Youtube
        </Button>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href={`https://www.amazon.com/s?k=${props.game.name}`}
        >
          Search Amazon
        </Button>
        <PhotoModal game={props.game} />
      </CardActions>
    </div>
  );
}

export default ListItem;
