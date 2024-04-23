import React from 'react';
import {
  ThemeProvider, createTheme,
} from '@mui/material/styles';
import {
  CssBaseline, Container, Box, Button, Card, CardContent, CardHeader, AppBar, Toolbar, Typography,
} from '@mui/material';
import {
  MailOutline as MailOutlineIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import List from './List.jsx';

export default function ListContainer(props) {
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
              <Typography variant="h6" noWrap>
                Game Warp Home
              </Typography>
              <div />
            </Toolbar>
          </AppBar>
        </Box>
        <List />
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
          <Box my={3} mx={2}>
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
