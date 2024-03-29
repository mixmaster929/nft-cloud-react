import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import previewItem from '../../assets/images/collections/coll-item-2.jpg'
import previewAutherItem from '../../assets/images/author/author-5.jpg'
import loadjs from 'loadjs'

const Create = () => {
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
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
			<section aria-label="section">
                <div className="container">
                    <div className="row wow fadeIn">
                        <div className="col-lg-7 offset-lg-1">
                            <form id="form-create-item" className="form-border" method="post" action="email.php">
                                <div className="field-set">
                                    <h5>Upload file</h5>

                                    <div className="d-create-file">
                                        <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                                        <input type="button" id="get_file" className="btn-main" value="Browse" />
                                        <input type="file" id="upload_file" />
                                    </div>

                                    <div className="spacer-40"></div>

                                    <h5>Select method</h5>
                                    <div className="de_tab tab_methods">
                                        <ul className="de_nav">
                                            <li className="active"><span><i className="fa fa-tag"></i>Fixed price</span>
                                            </li>
                                            <li><span><i className="fa fa-users"></i>Open for bids</span>
                                            </li>
                                        </ul>

                                        <div className="de_tab_content">

                                            <div id="tab_opt_1">
                                                <h5>Price</h5>
                                                <input type="text" name="item_price" id="item_price" className="form-control" placeholder="enter price for one item (ETH)" />
                                            </div>

                                            <div id="tab_opt_2">
                                            </div>

                                        </div>

                                    </div>

                                    <div className="spacer-20"></div>

                                    <div className="switch-with-title">
                                        <h5><i className="fa fa- fa-unlock-alt id-color-2 icon_padlock"></i>Unlock once purchased</h5>
                                        <div className="de-switch">
                                          <input type="checkbox" id="switch-unlock" className="checkbox" />
                                          <label htmlFor="switch-unlock"></label>
                                        </div>
                                        <div className="clearfix"></div>
                                        <p className="p-info">Unlock content after successful transaction.</p>

                                        <div className="hide-content">
                                            <input type="text" name="item_unlock" id="item_unlock" className="form-control" placeholder="Access key, code to redeem or link to a file..." />             
                                        </div>
                                    </div>

                                    <div className="spacer-20"></div>

                                    <h5>Choose collection</h5>
                                    <p className="p-info">This is the collection where your item will appear.</p>

                                    <div id="item_collection" className="dropdown fullwidth mb20">
                                        <a href="#" className="btn-selector">Select Collection</a>
                                        <ul>
                                            <li><span>Create New</span></li>
                                            <li><span>Abstraction</span></li>
                                            <li><span>Patternlicious</span></li>
                                            <li><span>Skecthify</span></li>
                                            <li><span>Cartoonism</span></li>
                                            <li><span>Virtuland</span></li>
                                            <li><span>Papercut</span></li>
                                        </ul>
                                    </div>

                                    <div className="spacer-20"></div>

                                    <h5>Title</h5>
                                    <input type="text" name="item_title" id="item_title" className="form-control" placeholder="e.g. 'Crypto Funk" />

                                    <div className="spacer-20"></div>

                                    <h5>Description</h5>
                                    <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="e.g. 'This is very limited item'"></textarea>

                                    <div className="spacer-20"></div>

                                    <h5>Royalties</h5>
                                    <input type="text" name="item_royalties" id="item_royalties" className="form-control" placeholder="suggested: 0, 10%, 20%, 30%. Maximum is 70%" />

                                    <div className="spacer-single"></div>

                                    <h5>Number of copies</h5>
                                    <input type="text" name="item_royalties" id="item_royalties" className="form-control" placeholder="E.g. 25" />

                                    <div className="spacer-single"></div>

                                    <input type="button" id="submit" className="btn-main" value="Create Item" />
                                    <div className="spacer-single"></div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-xs-12">
                                <h5>Preview item</h5>
                                <div className="nft__item">
                                    <div className="de_countdown" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                    <div className="author_list_pp">
                                        <a href="#">                                    
                                            <img className="lazy" src={previewAutherItem} alt="" />
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="#">
                                            <img src={previewItem} id="get_file_2" className="lazy nft__item_preview" alt="" />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="#">
                                            <h4>Silver Surver</h4>
                                        </a>
                                        <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                            0.08 ETH<span>1/20</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart"></i><span>50</span>
                                        </div>                            
                                    </div> 
                                </div>
                            </div>                                         
                    </div>
                </div>
            </section>
            <a href="#" id="back-to-top"></a>
        </div>
    );
};

export default Create;