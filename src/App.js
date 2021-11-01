import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AddPromotions from './components/AddPromotions/AddPromotions';
import AuthProvider from './AuthContext/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Promotions from './components/Promotions/Promotions';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path="/login">
            <Login></Login>

          </Route>
          <PrivateRoute path="/add">
            <AddPromotions></AddPromotions>

          </PrivateRoute>
          <PrivateRoute path="/promotions">
            <Promotions></Promotions>

          </PrivateRoute>

        </Switch>
        <Footer></Footer>

      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
