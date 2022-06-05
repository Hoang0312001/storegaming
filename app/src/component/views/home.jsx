import React from 'react';
import Header from "../layout/header";
import Footer from "../layout/footer";
import Sidebar from "../layout/sidebar";
import Image1 from "../public/images/icon-1.png"
import Image2 from "../public/images/icon-2.png"
import Image3 from "../public/images/icon-3.png"
import Image4 from "../public/images/icon-4.png"
import Image5 from "../public/images/icon-5.png"
import Banner1 from "../public/uploads/slider-01.png"
const  HOME = () => {
    const style = {
        display: "block"
    }
    return (
        <>
           <div id="site">
           <Header />
         <div id="main-content-wp" class="home-page clearfix">
    <div class="wp-inner">
        <div class="main-content fl-right">
            <div class="section" id="slider-wp">
                <div class="section-detail">

                    <div class="item">
                        <img src= {Banner1} alt="" />
                    </div>
                 
                </div>
            </div>
            <div class="section" id="support-wp">
                <div class="section-detail">
                    <ul class="list-item clearfix">
                        <li>
                            <div class="thumb">
                                <img src={Image1} />
                            </div>
                            <h3 class="title">Miễn phí vận chuyển</h3>
                            <p class="desc">Tới tận tay khách hàng</p>
                        </li>
                        <li>
                            <div class="thumb">
                                <img src={Image2} />
                            </div>
                            <h3 class="title">Tư vấn 24/7</h3>
                            <p class="desc">1900.9999</p>
                        </li>
                        <li>
                            <div class="thumb">
                                <img src={Image3}/>
                            </div>
                            <h3 class="title">Tiết kiệm hơn</h3>
                            <p class="desc">Với nhiều ưu đãi cực lớn</p>
                        </li>
                        <li>
                            <div class="thumb">
                                <img src={Image4}/>
                            </div>
                            <h3 class="title">Thanh toán nhanh</h3>
                            <p class="desc">Hỗ trợ nhiều hình thức</p>
                        </li>
                        <li>
                            <div class="thumb">
                                <img src={Image5} />
                            </div>
                            <h3 class="title">Đặt hàng online</h3>
                            <p class="desc">Thao tác đơn giản</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="section" id="feature-product-wp">
                <div class="section-head">
                    <h3 class="section-title">Sản phẩm nổi bật</h3>
                </div>
                <div class="section-detail">
                    <ul class="list-item">

                     

                        <li>
                        <a href="" title="" class="thumb">
                                <img  src='https://hanoicomputercdn.com/media/product/66072_ghe_gamer_cooler_master_caliber_r2c_grey_0002_3.jpg'/>
                            </a>
                            <a href="" title="" class="product-name"></a>
                            <div class="price">
                                <span style= {{display: style.display}}  class="new"></span>
                                <span  style= {{display: style.display}} class="old"></span>
                            </div>
                            <div class="action clearfix">
                            
                                <form  method="post">
  
                                
                                <input type="submit" value="Thêm giỏ hàng" class="add-cart fl-left" name ="addcart" />
                             
                                <a href="checkout.php?id=<?= $rs['id'] ?>" class="buy-now fl-right">Mua Ngay</a>
                                </form>
                            </div>
                        </li>
                        
              

                    </ul>
                </div>
            </div>
            <div class="section" id="list-product-wp">
                <div class="section-head">
                    <h3 class="section-title">GHÊ GAMING</h3>
                </div>
                <div class="section-detail">
                    <ul class="list-item clearfix">

                    
                         <li>
                            <a href="" title="" class="thumb">
                                <img src="https://hanoicomputercdn.com/media/product/66072_ghe_gamer_cooler_master_caliber_r2c_grey_0002_3.jpg" />
                            </a>
                            <a href="" title="" class="product-name"></a>
                            <div class="price">
                                <span style= {{display: style.display}} class="new"></span>
                                <span style= {{display: style.display}} class="old"></span>
                            </div>
                           
                            <div class="action clearfix">
                            
                                <form  method="post">
        
                                <input type="submit" value="Thêm giỏ hàng" class="add-cart fl-left" name ="addcart" />
                                <a href="checkout.php?id=<?= $rs['id'] ?>" class="buy-now fl-right">Mua Ngay</a>
                                </form>
                            </div>
                        </li>
                
                    </ul>
                   
                </div>
            </div>
            <div class="section" id="list-product-wp">
                <div class="section-head">
                    <h3 class="section-title">GHẾ CÔNG THÁI HỌC</h3>
                </div>
                <div class="section-detail">
                    <ul class="list-item clearfix">
                
                         <li>
                         <a href="" title="" class="thumb">
                                <img src = "" />
                            </a>
                            <a href="" title="" class="product-name"></a>
                            <div class="price">
                                <span style= {{display: style.display}} class="new"></span>
                                <span style= {{display: style.display}} class="old"></span>
                            </div>
                            <div class="action clearfix">
                          
                                <form  method="post">
               

                                <input type="submit" value="Thêm giỏ hàng" class="add-cart fl-left" name ="addcart" />
                                <a href="checkout.php?id=<?= $rs['id'] ?>" class="buy-now fl-right">Mua Ngay</a>
                                </form>
                            </div>
                        </li>
                        
              


                    </ul>
                </div>
            </div>
            <div class="section" id="list-product-wp">
                <div class="section-head">
                    <h3 class="section-title">BÀN GAMING</h3>
                </div>
                <div class="section-detail">
                    <ul class="list-item clearfix">

                   
                         <li>
                         <a href="" title="" class="thumb">
                                <img src= "" />
                            </a>
                            <a href="" title="" class="product-name"></a>
                            <div class="price">
                                <span  class="new"></span>
                                <span  class="old"></span>
                            </div>
                            <div class="action clearfix">
                           
                                <form  method="post">
                               

                                <input type="submit" value="Thêm giỏ hàng" class="add-cart fl-left" name ="addcart" />
                                <a href="" class="buy-now fl-right">Mua Ngay</a>
                                </form>
                            </div>
                        </li>
                        
                     


                    </ul>
                </div>
            </div>
        </div>
       
      
    </div>
    <Sidebar />
</div>

</div>
      <Footer />
         
        </>
    )
}
export default HOME;