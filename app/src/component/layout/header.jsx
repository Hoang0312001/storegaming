import React from 'react';
import "../public/style.css"


const Header = () => {
   
    const style = {
        display: "inline"
    }
    
    return (
        <>
             <div id="site">
            <div id="container">
                <div id="header-wp">
                    <div id="head-top" class="clearfix">
                        <div class="wp-inner">
                            <a href="" title="" id="payment-link" class="fl-left">Hình thức thanh toán</a>
                            <div id="main-menu-wp" class="fl-right">
                                <ul id="main-menu" class="clearfix">
                                    
                                  
                                    <li>
                                        <a href="" title=""></a>
                                    </li>
                                   
                                    <li>
                                        <a href="" title="">(Đăng xuất)</a>
                                    </li>
                         
                                   

                               <li>
                                        <a href="" title="">Đăng kí</a>
                                    </li>
                                    <li>
                                        <a href="" title="">Đăng nhập</a>
                                    </li> 
                                    <a style= {{display: style.display}} href=""></a>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="head-body" class="clearfix">
                        <div class="wp-inner">
                            <a href="" title="" id="logo" class="fl-left"><img  id ="logoimg" src=""/></a>
                            <div id="search-wp" class="fl-left">
                           
                                <form method="post" action="../viewsclient/searchproduct.php" >
                                    <input type="text" name="key" id="s" placeholder="Nhập từ khóa tìm kiếm tại đây!" />
                                    <input type="submit" id="sm-s" name="btnsearch" value="Tìm kiếm" />
                                </form>
                            </div>
                            <div id="action-wp" class="fl-right">
                                <div id="advisory-wp" class="fl-left">
                                    <span class="title">Tư vấn</span>
                                    <span class="phone">0987.654.321</span>
                                </div>
                                <div id="btn-respon" class="fl-right"><i class="fa fa-bars" aria-hidden="true"></i></div>
                                <a href="?page=cart" title="giỏ hàng" id="cart-respon-wp" class="fl-right">
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <span id="num">2</span>
                                </a>
                                
                                <div id="cart-wp" class="fl-right">
                                    <div id="btn-cart">
                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <span id="num"></span>
                                    </div>
                                    <div id="dropdown">
                                     
                                        <p class="desc">Có <span> sản phẩm</span> trong giỏ hàng</p>
                                        <ul class="list-cart">
                                         
                                      
                                            <li class="clearfix">
                                                <a href="" title="" class="thumb fl-left">
                                                    <img src="" alt="" />
                                                </a>
                                                <div class="info fl-right">
                                                    <a href="" title="" class="product-name"></a>
                                                    <p class="price"></p>
                                                    <p class="qty">Số lượng: <span>  </span></p>
                                                </div>
                                            </li>
                                       
                                        </ul>
                                        <div class="total-price clearfix">
                                            <p class="title fl-left">Tổng:</p>
                                            <p class="price fl-right"></p>
                                        </div>
                                     
                                        <div class="action-cart clearfix">
                                            <a href="" title="Giỏ hàng" class="view-cart fl-left">Giỏ hàng</a>
                                            <a href="" title="Thanh toán" class="checkout fl-right">Thanh toán</a>
                                        </div>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
             </div>  
        </>
    )
    
}

export default Header