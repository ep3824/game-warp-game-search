
import React from 'react';
import ReactDOM from 'react-dom';
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
    console.log("process.env", process.env)

    fetch(`https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`)
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
