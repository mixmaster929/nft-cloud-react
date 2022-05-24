import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
// import DashBoard from './components/Dashboard/DashBoard';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Activity from './components/Activity/Activity';
import Create from './components/Create/Create';
import SingleCollection from './components/Create/SingleCollection';
import MultipleCollection from './components/Create/MultipleCollection';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Explorer from './components/Explorer/Explorer';
import ScrollToTop from './components/ScrollToTop';
import MyItems from './components/MyItem/MyItem';
import Login from './components/Login/Login';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthContext from './context/AuthContext/AuthContext';
// import UserPanel from './components/UserPanel/UserPanel';
import React from 'react';
import ScriptTag from 'react-script-tag';


function App() {
    return (
        <AuthContext>
            <BrowserRouter>
            <Header />
            <ScrollToTop />
                <Switch>
                    <Route exact path="/" component = {Home}></Route>
                    <Route exact path="/profile" component = {Profile}></Route>
                    <Route exact path="/explorer" component = {Explorer}></Route>
                    <Route exact path="/activity" component = {Activity}></Route>
                    <Route exact path="/create" component = {Create}></Route>
                    <Route exact path="/create/single" component = {SingleCollection}></Route>
                    <Route exact path="/create/multiple" component = {MultipleCollection}></Route>
                    <Route exact path="/myitems" component = {MyItems}></Route>
                    <Route exact path="/admin">
                        <Login />
                        <Footer />
                    </Route>
                    <Route path="*" component = {NotFound}></Route>
                </Switch>
            <Footer />
            </BrowserRouter>
        </AuthContext>
    );
}

export default App;