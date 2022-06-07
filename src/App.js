import './App.css';
import ExamPage from './components/ExamPage';
import Home from './components/Home';
import {Switch, Route, HashRouter} from 'react-router-dom';


function App() {
  return (
    <>
      
      <HashRouter>
        <Switch>
          {/*<Route path='/' component={Home} />*/}
          <Route path='/' exact component={ExamPage} />
        </Switch>

      </HashRouter>

    </>
  );
}

export default App;
