import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

const HatsPage = props => (
  <div>
    <h1> Home PAGE</h1>
  </div>
)
// const HomePage = props => {
//   console.log(props);
//   return (
//     <div>
//       <Link to="/topics" >Topics</Link>
//       <button onClick={() => props.history.push('/topics')}>Topics</button>
//       <h1> Home PAGE
//     </h1>
//     </div>
//   );
// }
const TopicsList = props => {
  console.log(props);
  return (<div>
    <h1> TOPICS LIST PAGE </h1>
    <Link to={`${props.match.url}/13`}> To Topics 13</Link>
    <Link to={`${props.match.url}/16`}> To Topics 16</Link>
    <Link to={`${props.match.url}/18`}> To Topics 18</Link>
  </div >);
}
const TopicsDetail = props => {
  console.log(props);
  return (<div> <h1> TOPICS Details PAGE : {props.match.params.topicsId}</h1> </div >);
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicsId' component={TopicsDetail} />
      </Switch>
    </div>
  );
}

export default App;
