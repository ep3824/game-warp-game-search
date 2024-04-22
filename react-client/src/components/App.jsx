import React, { useState, useEffect } from 'react';
import {
  ThemeProvider, styled, useTheme, createTheme,
} from '@mui/material/styles';
import {
  CssBaseline, Container, Box, Button, Card, CardContent, CardHeader, AppBar, Toolbar, IconButton, InputBase, Typography,
} from '@mui/material';
import {
  Menu as MenuIcon, Search as SearchIcon, MailOutline as MailOutlineIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import List from './List.jsx';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     margin: theme.spacing(3),
//     width: 345,
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
//   media: {
//     height: 140,
//   },
//   title: {
//     color: theme.palette.primary.main,
//   },
//   appBarTitle: {
//     flexGrow: 1,
//     display: 'block',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   }
// }));

// componentDidMount() {
//   fetch('https://api.rawg.io/api/games')
//     .then(data => data.json())
//     .then(moreData => this.setState({
//       games: moreData.results
//     }))
// }

export default function ListContainer(props) {
  // const classes = useStyles();
  // const [data, setData] = useState({ hits: []});

  const theme = createTheme({
    status: {
      danger: 'orange',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box my={4}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6" noWrap>
                Game Warp Home
              </Typography>
              <div>
                {/* <div>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search..."
                  inputProps={{ 'aria-label': 'search' }}
                /> */}
              </div>
            </Toolbar>
          </AppBar>
        </Box>
        <Box>
          <List />
        </Box>
        <br />
        <Card>
          <CardHeader
            title="About"
            subheader="Game Warp is a minimalist approach to window shopping for video games.
            Simply enter a genre, a platform, and a tag, and recieve a list of hand curated
            video games."
          />
          <CardContent>
            <Typography />
            <Typography>
              If you would like to contact the developer, please use the buttons below.
            </Typography>

          </CardContent>
          <Box my={3} mx={1}>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              target="_blank"
              href="mailto:ethan.parent1@gmail.com"
            >
              <MailOutlineIcon />
              EMAIL
            </Button>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              target="_blank"
              href="http://github.com/ep3824"
            >
              <GitHubIcon />
              GitHub
            </Button>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              target="_blank"
              href="http://linkedin.com/in/ep3824"
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
      </Container>
    </ThemeProvider>
  );
}

// export default function ListContainer() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Hook</Button>;
// };
