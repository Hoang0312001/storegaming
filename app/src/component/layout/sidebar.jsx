import React from 'react';
const Sidebar = () => {
    const style = {
        display: "block"
    }
    return (
        <>
           <div class="sidebar fl-left">
            <div class="section" id="category-product-wp">
                <div class="section-head">
                    <h3 class="section-title">Danh mục sản phẩm</h3>
                </div>
                <div class="secion-detail">
                    <ul class="list-item">
                      
                        <li>
                            <a href="" title="">Ghế Gaming</a>
                        </li>
                        <li>
                            <a href="" title="">Ghế Công Thái Học</a>
                        </li>
                        <li>
                            <a href="" title="">Bàn Gaming</a>
                        </li>
                    
                    </ul>
                </div>
            </div>
            <div class="section" id="selling-wp">
                <div class="section-head">
                    <h3 class="section-title">Sản phẩm bán chạy</h3>
                </div>
                <div class="section-detail">
                    <ul class="list-item">

                      
                           
                        <li class="clearfix">
                            <a href="" title="" class="thumb fl-left">
                                <img src="<?= $rs['image'] ?>" alt="" />
                            </a>
                            <div class="info fl-right">
                                <a href="" title="" class="product-name"></a>
                                <div class="price"> 
                                    <span style= {{display: style.display}} class="new"></span>
                                    <span style= {{display: style.display}} class="old"></span>
                                </div>
                                <a href="checkout.php?id=<?= $rs['id'] ?>" class="buy-now fl-right">Mua Ngay</a>
                            </div>
                        </li>
               
                        
                    </ul>
                </div>
            </div>
            <div class="section" id="banner-wp">
                <div class="section-detail">
                    <a href="" title="" class="thumb">
                        <img src="" alt="" />
                    </a>
                   
                </div>
            </div>
        </div>
        </>
    )
}
export default Sidebar