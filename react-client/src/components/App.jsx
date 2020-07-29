import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import List from './List.jsx'
import theme from '../theme';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3),
    width: 345,
  },
  button: {
    margin: theme.spacing(1),
  },
  media: {
    height: 140,
  },
  title: {
    color: theme.palette.primary.main,
  },
  appBarTitle: {
    flexGrow: 1,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
}));

// componentDidMount() {
//   fetch('https://api.rawg.io/api/games')
//     .then(data => data.json())
//     .then(moreData => this.setState({
//       games: moreData.results
//     }))
// }

export default function ListContainer(props) {
  const classes = useStyles();
  // const [data, setData] = useState({ hits: []});

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="md">
      <Box my={4}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.appBarTitle} variant="h6" noWrap>
              Game Warp Home
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Box my={4}>
        <div>
          <List />
        </div>
      </Box>
      <Box my={4}>
        <Card className={classes.card}>
          <CardHeader
            title="About"
            subheader="Game Warp is a minimalist approach to window shopping for video games.
            Simply enter a genre, a platform, and a tag, and recieve a list of hand curated
            video games."
          />
          <CardContent >
            <Typography>

            </Typography>
            <Typography>
            If you would like to contact the developer, please use the buttons below.
            </Typography>


          </CardContent>
          <Box my={3} mx={1}>
            <Button
              className={classes.button}
              size="small"
              color="primary"
              variant="outlined"
              target="_blank"
              href={`mailto:ethan.parent1@gmail.com`}
            >
              <MailOutlineIcon />
              EMAIL
            </Button>
            <Button
              className={classes.button}
              size="small"
              color="primary"
              variant="outlined"
              target="_blank"
              href={`http://github.com/ep3824`}
            >
              <GitHubIcon />
              GitHub
            </Button>
            <Button
              className={classes.button}
              size="small"
              color="primary"
              variant="outlined"
              target="_blank"
              href={`http://linkedin.com/in/ep3824`}
            >
              <LinkedInIcon />
                LinkedIn
            </Button>
          </Box>
          <Box my={3} mx={2}>
            <Typography>
              Created by Ethan Parent
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  </ThemeProvider>
  )
}

// export default function ListContainer() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Hook</Button>;
// };