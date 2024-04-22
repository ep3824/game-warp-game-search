import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import ListContainer from './components/App.jsx';

const apiURL = 'http://192.168.70.11:4002/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      genreData: [],
    };
  }

  render() {
    const divStyle = {
      background: '#9dabb9',
    };
    return (
      <div style={divStyle}>
        <ListContainer
          games={this.state.items}
          genres={this.state.genreData}
        />
      </div>
    );
  }
}

export default App;

const root = createRoot(document.getElementById('app'));
root.render(<App />);
