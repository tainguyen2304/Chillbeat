
import 'bootstrap/dist/css/bootstrap.min.css';
import ChillBeat from 'Components';
import Login from 'Components/Login';
import { CHILL_BEAT, SIGNIN } from 'constans';
import Approvider from 'Context/Approvider';
import AuthProvider from 'Context/AuthProvider';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router className="App">
      <AuthProvider>
        <Approvider>
          <Switch>
            <Route component={Login} exact path={SIGNIN} />
            <Route component={ChillBeat} path={CHILL_BEAT} />
            <Route path='*'>
              <div className="d-flex w-100 h-100">
                <div className="m-auto">
                  <h1>
                    404! Not Found
                  </h1>
                </div>
              </div>
            </Route>
          </Switch>
        </Approvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
