import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, Link  } from 'react-router-dom';
import logo from '../../assets/images/logo-light.png';
import useAuth from '../../hooks/useAuth';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletLink from "walletlink";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "web3modal";
import loadjs from 'loadjs'


const { ethereum } = window;

const Header = () => {

    // useEffect(() => {
        
        // axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/word/wordsLimit`).then(res => {
        //     setIsLoading(true);
        //     if (res) {
        //         setWords(res.data);
        //         setIsLoading(false);
        //     }
        // })
    // }, []);

    const { state, dispatch } = useAuth();
    const [islogin, setLogin] = useState(false);
    const [account, setAccount] = useState();
    const [balances, setBalances] = useState();
    const [chainID, setChainID] = useState();
    const history = useHistory();

    const providerOptions =  !ethereum ? {
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                infuraId: "223f20f418c34a758240a7f416435110", // Required
                network: "mainnet",
                qrcodeModalOptions: {
                    mobileLinks: ["rainbow", "metamask", "argent", "trust", "imtoken", "pillar"]
                }
            }
        },
        walletlink: {
            package: WalletLink, 
            options: {
              appName: "Web 3 Modal",
              infuraId: "223f20f418c34a758240a7f416435110"
            }
        },
        "custom-metamask": {
            display: {
            logo: providers.METAMASK.logo,
            name: 'Install MetaMask',
            description: 'Connect using browser wallet'
            },
            package: {},
            connector: async () => {
            window.open('https://metamask.io')
            throw new Error('MetaMask not installed');
            }
        }
    } : ethereum.isCoinbaseWallet ? {
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                infuraId: "223f20f418c34a758240a7f416435110", // Required
                network: "mainnet",
                qrcodeModalOptions: {
                    mobileLinks: ["rainbow", "metamask", "argent", "trust", "imtoken", "pillar"]
                }
            }
        },  
        "custom-metamask": {
            display: {
            logo: providers.METAMASK.logo,
            name: 'Install MetaMask',
            description: 'Connect using browser wallet'
            },
            package: {},
            connector: async () => {
            window.open('https://metamask.io')
            throw new Error('MetaMask not installed');
            }
        }
    } : {
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                infuraId: "223f20f418c34a758240a7f416435110", // Required
                network: "mainnet",
                qrcodeModalOptions: {
                    mobileLinks: ["rainbow", "metamask", "argent", "trust", "imtoken", "pillar"]
                }
            }
        },
        walletlink: {
            package: WalletLink, 
            options: {
              appName: "Web 3 Modal",
              infuraId: "223f20f418c34a758240a7f416435110"
            }
        },
    };

    const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required
        theme: "dark"
    });

    useEffect(() => {
        loadjs(['/js/plugins.js', '/js/designesia.js'], function() {
            
        });
        if(web3Modal.cachedProvider) {
            handleConnectWallet();
        }
    }, []);
    
    const handleConnectWallet =  async () => {          
        try {
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const account = await web3.eth.getAccounts();
            const balances = await web3.eth.getBalance(account[0]);
            const chainID = web3.currentProvider.chainId;
            setChainID(chainID)
            setAccount(account[0]);
            setBalances(balances)
            
        } catch(error) {
            if(error.message == "User rejected") window.location.reload();
        }
    };
    const disconnectButton = async () => {
        await web3Modal.clearCachedProvider();
        setAccount("");
        history.push('/')
    };
    const convertToAddress = (address) => {
        const string = String(address);
        const len = string.length
        const firstAdr = string.slice(0,8)
        const lastAdr = string.slice(len-4, len)
        const _address = firstAdr + "..." + lastAdr

        return _address
    }
    const onClickProfile = () => {
        history.push('/profile')
    }
    const onClickSettings = () => {
        history.push('/profile')
    }
    const onClickActivity = () => {
        history.push('/activity')
    }
    const onClickHelpCenter = () => {
        history.push('/')
    }
    const onClickDiscussion = () => {
        history.push('/')
    }
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
                                        <Link to="/"><img alt="" src= {logo} /></Link>
                                    </div>
                                </div>
                                <div className="de-flex-col">
                                    <input id="quick_search" className="xs-hide" name="quick_search" placeholder="Search items, collections, and creators" type="text" />
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li>
                                        <Link to="/explorer" className="active">Explore</Link>
                                    </li>
                                    <li>
                                        {account && <Link to="/create" className="active">Create</Link>}
                                    </li>
                                    <li>
                                        {account && <Link to="/activity" className="active">Activity</Link>}
                                    </li>
                                </ul>
                                <div className="menu_side_area">
                                    <div className="de-login-menu">
                                        {!account?
                                        (<a href='#' onClick={handleConnectWallet} className="btn-main btn-wallet"><i className="icon_wallet_alt"></i><span>Connect Wallet</span></a>):
                                        (<div>
                                        <span id="de-click-menu-notification" className="de-menu-notification">
                                            <span className="d-count">8</span>
                                            <i className="fa fa-bell"></i>
                                        </span>

                                        <span id="de-click-menu-profile" className="de-menu-profile">                           
                                            <img src="images/author_single/author_thumbnail.jpg" className="img-fluid" alt="" />
                                        </span>

                                        <div id="de-submenu-notification" className="de-submenu">
                                            <div className="de-flex">
                                                <div><h4>Notifications</h4></div>
                                                <a href="#">Show all</a>
                                            </div>

                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                        <div className="d-desc">
                                                            <span className="d-name"><b>Mamie Barnett</b> started following you</span>
                                                            <span className="d-time">1 hour ago</span>
                                                        </div>
                                                    </a>  
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                                        <div className="d-desc">
                                                            <span className="d-name"><b>Nicholas Daniels</b> liked your item</span>
                                                            <span className="d-time">2 hours ago</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                        <div className="d-desc">
                                                            <span className="d-name"><b>Lori Hart</b> started following you</span>
                                                            <span className="d-time">18 hours ago</span>
                                                        </div>
                                                    </a>    
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img className="lazy" src="images/author/author-5.jpg" alt="" />
                                                        <div className="d-desc">
                                                            <span className="d-name"><b>Jimmy Wright</b> liked your item</span>
                                                            <span className="d-time">1 day ago</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img className="lazy" src="images/author/author-6.jpg" alt="" />
                                                        <div className="d-desc">
                                                            <span className="d-name"><b>Karla Sharp</b> started following you</span>
                                                            <span className="d-time">3 days ago</span>
                                                        </div>
                                                    </a>    
                                                </li>
                                            </ul>
                                        </div>

                                        <div id="de-submenu-profile" className="de-submenu">
                                            <div className="d-name">
                                                <h4>Monica Lucas</h4>
                                                <a href="02_dark-profile.html">Set display name</a>
                                            </div>
                                            <div className="spacer-10"></div>
                                            <div className="d-balance">
                                                <h4>Balance</h4>
                                                {Number(balances).toFixed(4)}{Number(chainID) === 1? "ETH" : ""}
                                            </div>
                                            <div className="spacer-10"></div>
                                            <div className="d-wallet">
                                                <h4>My Wallet</h4>
                                                <span id="wallet" className="d-wallet-address">{convertToAddress(account)}</span>
                                                <button id="btn_copy" title="Copy Text">Copy</button>
                                            </div>

                                            <div className="d-line"></div>

                                            <ul className="de-submenu-profile">
                                                <li><Link to ="/myitems"><i className="fa fa-user"></i>Profile</Link></li>
                                                <li><Link to ="/profile"><i className="fa fa-cog"></i>Settings</Link></li>
                                                <li><Link to ="/"><i className="fa fa-medkit"></i>Help Center</Link></li>
                                                <li><Link to ="/"><i className="fa fa-comments"></i>Discussion</Link></li>
                                                <li><a href="#" onClick={disconnectButton}><i className="fa fa-sign-out"></i> Sign out</a></li>
                                            </ul>
                                        </div></div>)}
                                        <span id="menu-btn"></span>
                                    </div>
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