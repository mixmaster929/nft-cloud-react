import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-light.png';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { state, dispatch } = useAuth();
    const [login, setLogin] = useState('');

    useEffect(() => {
        setLogin(localStorage.getItem("token"));
    }, [state.isLogin]);

    return (
      <div>
        <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    <div id="logo">
                                      <NavLink to="/"><img alt="" src= {logo} /></NavLink>
                                    </div>
                                </div>
                                <div className="de-flex-col">
                                  <input id="quick_search" className="xs-hide" name="quick_search" placeholder="Search items, collections, and creators" type="text" />
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li>
                                     <NavLink to="/">Explore<span></span></NavLink>
                                    </li>
                                    <li>
                                     <NavLink to="/">Create<span></span></NavLink>
                                    </li>
                                    <li>
                                     <a href="/">Activity<span></span></a>
                                    </li>
                                </ul>
                                <div className="menu_side_area">
                                  <a href="/" className="btn-main btn-wallet"><i className="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                                  <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </div>
    );
};

export default Header;