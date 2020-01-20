import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { GameState } from './context/game/GameState';
import { AuthState } from './context/auth/AuthState';
import { GamePage } from './pages/Game/GamePage';
import { AuthPage } from './pages/Auth/AuthPage';

const App = () => {
  return (
    <Router>
      <AuthState>
        <GameState>
          <Switch>
            <PrivateRoute exact path={'/'} component={GamePage} />
            <Route exact path={'/signin'} component={AuthPage} />
          </Switch>
        </GameState>
      </AuthState>
    </Router>
  );
};

export default App;
