import React from 'react';
import './App.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UserRetrievalBoundary from './boundaries/UserRetrievalBoundary';
import RecordPrice from './pages/RecordPrice';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <UserRetrievalBoundary>
        <Header/>
        <div className="Content">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/price" component={RecordPrice} />
            <Route exact path="/" component={Home} />
            <Route path="/*" render={() => (<Redirect to="/" />)}/>
          </Switch>
        </div>
        <Footer/>
      </UserRetrievalBoundary>
    </div>
  );
}

export default App;
