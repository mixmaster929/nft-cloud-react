import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
// import DashBoard from './components/Dashboard/DashBoard';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
// import Jungurl from './components/Jungurl/Jungurl';
// import EditWordInfo from './components/Dashboard/EditWordInfo/EditWordInfo';
// import DemoEdit from './components/Dashboard/DemoEdit';
import Header from './components/Header/Header';
// import SignUp from './components/SignUp.js/SignUp';
// import VerifyEmail from './components/VerifyEmail/VerifyEmail';
// import Login from './components/Login/Login';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthContext from './context/AuthContext/AuthContext';
// import UserPanel from './components/UserPanel/UserPanel';

function App() {
    return (
        <AuthContext>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Header></Header>
                        <Home></Home>
                    </Route>
                    <Route path="*">
                        <NotFound ></NotFound>
                    </Route>
                </Switch>
            </BrowserRouter>
        </AuthContext>
    );
}

export default App;