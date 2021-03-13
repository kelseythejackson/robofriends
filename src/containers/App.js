import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return (
    <div className='tc'>
      <h1 className='f2'>Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState({ robots: users }));
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchField: event.target.value });
//   };
//   render() {
//     const { robots, searchField } = this.state;
//     const filteredRobots = robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchField.toLowerCase());
//     });
//     return !robots.length ? (
//       <div className='tc'>
//         <h1>Loading...</h1>
//       </div>
//     ) : (
//       <div className='tc'>
//         <h1 className='f2'>Robofriends</h1>
//         <SearchBox searchChange={this.onSearchChange} />
//         <Scroll>
//           <ErrorBoundry>
//             <CardList robots={filteredRobots} />
//           </ErrorBoundry>
//         </Scroll>
//       </div>
//     );
//   }
// }

export default App;
