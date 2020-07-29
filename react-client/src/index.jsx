import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import theme from './theme';
// import { makeStyles } from '@material-ui/styles'
import { withStyles } from '@material-ui/core/styles';
import ListContainer from './components/App.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      genreData: [],
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items',
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });

    fetch('https://api.rawg.io/api/genres')
      .then(response => response.json())
      .then(data => this.setState({
        genreData: data
      }))
  }

  // handleGameSearch() {
  //   fetch('')
  // }



  render () {
    // const { classes } = this.props;
    const divStyle = {
      background: '#9dabb9'
    }
    return (
      <div style={divStyle}>
        <ListContainer
          games={this.state.items}
          genres={this.state.genreData}
        />
      </div>
    )
  }
}

// export default withStyles(styles)(App);
// export default App;
// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
  <App/>,
  document.getElementById('app'),
);
