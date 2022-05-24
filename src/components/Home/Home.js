import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import nft from '../../assets/images/misc/nft.png'
import author from '../../assets/images/author/author-1.jpg'
import item from '../../assets/images/items/static-1.jpg'
import collection from '../../assets/images/collections/coll-1.jpg'
import loadjs from 'loadjs'

const Home = () => {
    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadjs(['/js/plugins.js', '/js/designesia.js'], function() {
            
        });
        // axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/word/wordsLimit`).then(res => {
        //     setIsLoading(true);
        //     if (res) {
        //         setWords(res.data);
        //         setIsLoading(false);
        //     }
        // })
    }, []);
    return (
      <div>
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            <section id="section-hero" aria-label="section" className="no-top no-bottom vh-100" data-bgimage="url(images/background/bg-shape-1-dark.jpg) bottom">
                <div className="v-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="spacer-single"></div>
                                <h6 className="wow fadeInUp" data-wow-delay=".5s"><span className="text-uppercase id-color-2">The First Market</span></h6>
                                <div className="spacer-10"></div>
                                <h1 className="wow fadeInUp" data-wow-delay=".75s">Gaming NFTs Marketplace</h1>
                                <p className="wow fadeInUp lead" data-wow-delay="1s">Discover, collect, and sell exclusive NFTs, straight from the world of gaming</p>
                                <div className="spacer-10"></div>
                                <Link to="/explorer" className="btn-main wow fadeInUp lead" data-wow-delay="1.25s">Explore</Link>
                                <div className="mb-sm-30"></div>
                            </div>
                            <div className="col-md-6 xs-hide">
                                <img src={nft} className="lazy img-fluid wow fadeIn" data-wow-delay="1.25s" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-intro" className="no-top no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Set up your wallet</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i className="wm icon_wallet"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Add your NFT's</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i className="wm icon_cloud-upload_alt"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_tags_alt"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Sell your NFT's</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i className="wm icon_tags_alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            

            <section id="section-collections" className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Hot Collections</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div id="collection-carousel" className="owl-carousel wow fadeIn">
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <Link to="/"><img src={collection} className="lazy img-fluid" alt="" /></Link>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <Link to="/"><img className="lazy pp-coll" src={author} alt="" /></Link>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <Link to="/"><h4>Abstraction</h4></Link>
                                        <span>ERC-192</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <Link to="/"><img src="images/collections/coll-2.jpg" className="lazy img-fluid" alt="" /></Link>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <Link to="/"><img className="lazy pp-coll" src={author} alt="" /></Link>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <Link to="/"><h4>Patternlicious</h4></Link>
                                        <span>ERC-61</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <Link to="/"><img src={collection} className="lazy img-fluid" alt="" /></Link>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <Link to="/"><img className="lazy pp-coll" src={author} alt="" /></Link>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <Link to="/"><h4>Skecthify</h4></Link>
                                        <span>ERC-126</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <Link to="/"><img src={collection} className="lazy img-fluid" alt="" /></Link>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <Link to="/"><img className="lazy pp-coll" src={author} alt="" /></Link>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <Link to="/"><h4>Cartoonism</h4></Link>
                                        <span>ERC-73</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <Link to="/"><img src={collection} className="lazy img-fluid" alt="" /></Link>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <Link to="/"><img className="lazy pp-coll" src={author} alt="" /></Link>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <Link to="/"><h4>Virtuland</h4></Link>
                                        <span>ERC-85</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <Link to="/"><img src={collection} className="lazy img-fluid" alt="" /></Link>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <Link to="/"><img className="lazy pp-coll" src={author} alt="" /></Link>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <Link to="/"><h4>Papercut</h4></Link>
                                        <span>ERC-42</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

            <section id="section-items" className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>New Items</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div id="items-carousel" className="owl-carousel wow fadeIn">
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="de_countdown" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <Link to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Monica Lucas">                                    
                                                <img className="lazy" src={author} alt="" />
                                                <i className="fa fa-check"></i>
                                            </Link>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <Link to="" target="_blank"><i className="fa fa-facebook fa-lg"></i></Link>
                                                        <Link to="" target="_blank"><i className="fa fa-twitter fa-lg"></i></Link>
                                                        <Link to=""><i className="fa fa-envelope fa-lg"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={"/"}>
                                              <img src={item} className="lazy nft__item_preview" alt="" />
                                            </Link>
                                        </div>
                                        <div className="nft__item_info">
                                            <Link to={"/"}>
                                                <h4>Pinky Ocean</h4>
                                            </Link>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.08 ETH<span>1/20</span>
                                            </div>
                                            <div className="nft__item_action">
                                              <Link to={"/"}>Place a bid</Link>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>50</span>
                                            </div>                            
                                        </div> 
                                    </div>
                                </div>                 
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <Link to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Stacy Long">                                    
                                                <img className="lazy" src={author} alt="" />
                                                <i className="fa fa-check"></i>
                                            </Link>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <Link to={"/"}><i className="fa fa-facebook fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-twitter fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-envelope fa-lg"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={"/"}>
                                                <img src={item} className="lazy nft__item_preview" alt="" />
                                            </Link>
                                        </div>
                                        <div className="nft__item_info">
                                            <Link to={"/"}>
                                                <h4>Deep Sea Phantasy</h4>
                                            </Link>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.06 ETH<span>1/22</span>
                                            </div>
                                            <div className="nft__item_action">
                                              <Link to={"/"}>Place a bid</Link>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>80</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="de_countdown" data-year="2022" data-month="6" data-day="14" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <Link to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Ida Chapman">                                    
                                                <img className="lazy" src={author} alt="" />
                                                <i className="fa fa-check"></i>
                                            </Link>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <Link to={"/"}><i className="fa fa-facebook fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-twitter fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-envelope fa-lg"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={"/"}>
                                                <img src={item} className="lazy nft__item_preview" alt="" />
                                            </Link>
                                        </div>
                                        <div className="nft__item_info">
                                            <Link to={"/"}>
                                                <h4>Rainbow Style</h4>
                                            </Link>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.05 ETH<span>1/11</span>
                                            </div>
                                            <div className="nft__item_action">
                                              <Link to={"/"}>Place a bid</Link>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>97</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <Link to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                                                <img className="lazy" src={author} alt="" />
                                                <i className="fa fa-check"></i>
                                            </Link>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <Link to={"/"}><i className="fa fa-facebook fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-twitter fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-envelope fa-lg"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={"/"}>
                                                <img src={item} className="lazy nft__item_preview" alt="" />
                                            </Link>
                                        </div>
                                        <div className="nft__item_info">
                                            <Link to={"/"}>
                                                <h4>Two Tigers</h4>
                                            </Link>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.02 ETH<span>1/15</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <Link to={"/"}>Place a bid</Link>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>73</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <Link to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Franklin Greer">                                    
                                                <img className="lazy" src={author} alt="" />
                                                <i className="fa fa-check"></i>
                                            </Link>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <Link to={"/"}><i className="fa fa-facebook fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-twitter fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-envelope fa-lg"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={"/"}>
                                                <img src={item} className="lazy nft__item_preview" alt="" />
                                            </Link>
                                        </div>
                                        <div className="nft__item_info">
                                            <Link to={"/"}>
                                                <h4>The Truth</h4>
                                            </Link>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.06 ETH<span>1/20</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <Link to={"/"}>Place a bid</Link>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>26</span>
                                            </div>                                 
                                        </div>
                                    </div>
                                </div>
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="de_countdown" data-year="2022" data-month="6" data-day="6" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <Link to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Mamie Barnett">                                    
                                                <img className="lazy" src={author} alt="" />
                                                <i className="fa fa-check"></i>
                                            </Link>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <Link to={"/"}><i className="fa fa-facebook fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-twitter fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-envelope fa-lg"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={"/"}>
                                                <img src={item} className="lazy nft__item_preview" alt="" />
                                            </Link>
                                        </div>
                                        <div className="nft__item_info">
                                            <Link to={"/"}>
                                                <h4>Running Puppets</h4>
                                            </Link>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.03 ETH<span>1/24</span>
                                            </div>    
                                            <div className="nft__item_action">
                                                <Link to={"/"}>Place a bid</Link>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>45</span>
                                            </div>                                  
                                        </div> 
                                    </div>
                                </div>
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <Link to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Nicholas Daniels">                                    
                                                <img className="lazy" src={author} alt="" />
                                                <i className="fa fa-check"></i>
                                            </Link>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <Link to={"/"}><i className="fa fa-facebook fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-twitter fa-lg"></i></Link>
                                                        <Link to={"/"}><i className="fa fa-envelope fa-lg"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={"/"}>
                                                <img src={item} className="lazy nft__item_preview" alt="" />
                                            </Link>
                                        </div>
                                        <div className="nft__item_info">
                                            <Link to={"/"}>
                                                <h4>USA Wordmation</h4>
                                            </Link>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.09 ETH<span>1/25</span>
                                            </div>
                                            <div className="nft__item_action">
                                              <Link to={"/"}>Place a bid</Link>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>76</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

            <section id="section-popular" className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Top Sellers</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div className="col-md-12 wow fadeIn">
                            <ol className="author_list">
                                <li>                                    
                                    <div className="author_list_pp">
                                        <Link to={"/"}>
                                            <img className="lazy" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>                                    
                                    <div className="author_list_info">
                                        <Link to={"/"}>Monica Lucas</Link>
                                        <span>3.2 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                                  
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                        <Link to={"/"}>Mamie Barnett</Link>
                                        <span>2.8 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                               
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                        <Link to={"/"}>Nicholas Daniels</Link>
                                        <span>2.5 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                                  
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                        <Link to={"/"}>Lori Hart</Link>
                                        <span>2.2 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                                    
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                        <Link to={"/"}>Jimmy Wright</Link>
                                        <span>1.9 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                                
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                      <Link to={"/"}>Karla Sharp</Link>
                                        <span>1.6 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                                    
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                        <Link to={"/"}>Gayle Hicks</Link>
                                        <span>1.5 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                                 
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                        <Link to={"/"}>Claude Banks</Link>
                                        <span>1.3 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                              
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                        <Link to={"/"}>Franklin Greer</Link>
                                        <span>0.9 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                                  
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                    <Link to={"/"}>Stacy Long</Link>
                                        <span>0.8 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                                  
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                    <Link to={"/"}>Ida Chapman</Link>
                                        <span>0.6 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <Link to={"/"}>                                   
                                            <img className="lazy pp-author" src={author} alt="" />
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="author_list_info">
                                        <Link to={"/"}>Fred Ryan</Link>
                                        <span>0.5 eth</span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>        
            <section id="section-category" className="no-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Browse by category</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".1s">
                            <Link to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-image"></i>
                                <span>Art</span>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
                            <Link to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-music"></i>
                                <span>Music</span>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".3s">
                            <Link to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-search"></i>
                                <span>Domain Names</span>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
                            <Link to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-globe"></i>
                                <span>Virtual Worlds</span>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".5s">
                            <Link to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-vcard"></i>
                                <span>Trading Cards</span>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
                            <Link to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-th"></i>
                                <span>Collectibles</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>     
        </div>
        <Link to="#" id="back-to-top"></Link>
      </div>
    );
};

export default Home;