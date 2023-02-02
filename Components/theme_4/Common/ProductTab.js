import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import styles from '../../../styles/theme_four/theme_four.module.css';

const ProductTab = () => {
  return (
    <div className={styles.ThemeFour}>

        <section className={styles.ProductTab}>
        <Container>

            <Row>

                <Col lg={12}>
                   <div className='ProductsItem'>

                    <Tabs
                        defaultActiveKey="Categories"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="Categories" title="Categories">

    {/* ================================= Product Container==============================================
    ================================================================================================= */}
                            <div className={styles.ProductContainer}>
                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/watch1.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                
                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/headphone.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Sony headphones hd</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 45,650  <span>bdt 12,050</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/smarttv.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>samsung led tv (full hd)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 50,000  <span>bdt 60,750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/refrigerator.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>smart refrigerator</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 9050</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/watch2.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>huwaei band (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 2750  <span>bdt 5050</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>


                            </div>


                            <div className={styles.ProductContainer}>
                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/refrigerator2.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                
                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/android.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/airpod.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/tablefan.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/remote.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>



                            </div>

                            <div className={styles.AllProduct}>
                                <h5>View All Product</h5>
                                
                                </div>


  {/* ================================= Product Container End==============================================
    ================================================================================================= */}

                        </Tab>
                        <Tab eventKey="refrigerator" title="refrigerator">

                        <div className={styles.ProductContainer}>
                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/refrigerator2.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                
                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/android.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/airpod.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/tablefan.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>
                                <div className={styles.verticalLine}></div>

                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/remote.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new)</h6>

                                        </div>
                                        <div className={styles.Wishlist}>
                                            <AiOutlineHeart/>

                                        </div>
                                    </div>

                                    <div className={styles.PriceBox}>

                                        <h5>bdt 6750  <span>bdt 7750</span></h5> 

                                    </div>
                                    <div className={styles.btnBox}>

                                        <Link href='' className={styles.bgBorder}>Add To Cart</Link>
                                        <Link href='' className={styles.bg}>Buy Now</Link>

                                    </div>
                                </div>



                            </div>



                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim maxime adipisci recusandae incidunt pariatur nam illum tenetur optio eveniet!</p>
                        </Tab>
                        </Tabs>

                    {/* <Tabs
                        defaultActiveKey="profile"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                        >
                        <Tab eventKey="Categories" title="Home">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic, necessitatibus aliquam quo eaque, minima praesentium fugiat modi ratione dolorum facere asperiores dolor vero reiciendis beatae obcaecati quod voluptatibus eligendi!</p>
                        </Tab>
                        <Tab eventKey="refrigerator" title="Profile">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic, necessitatibus aliquam quo eaque, minima praesentium fugiat modi ratione dolorum facere asperiores dolor vero reiciendis beatae obcaecati quod voluptatibus eligendi!</p>

                        </Tab>
                        <Tab eventKey="Smart Tv" title="Loooonger Tab">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic, necessitatibus aliquam quo eaque, minima praesentium fugiat modi ratione dolorum facere asperiores dolor vero reiciendis beatae obcaecati quod voluptatibus eligendi!</p>

                        </Tab>
                        <Tab eventKey="contact" title="Contact1">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic, necessitatibus aliquam quo eaque, minima praesentium fugiat modi ratione dolorum facere asperiores dolor vero reiciendis beatae obcaecati quod voluptatibus eligendi!</p>

                        </Tab>
                        <Tab eventKey="refrigerator2" title="Contact2">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic, necessitatibus aliquam quo eaque, minima praesentium fugiat modi ratione dolorum facere asperiores dolor vero reiciendis beatae obcaecati quod voluptatibus eligendi!</p>

                        </Tab>
                        <Tab eventKey="refrigerator3" title="Contact3">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic, necessitatibus aliquam quo eaque, minima praesentium fugiat modi ratione dolorum facere asperiores dolor vero reiciendis beatae obcaecati quod voluptatibus eligendi!</p>

                        </Tab>
                    </Tabs> */}

                    </div>
                

                
                </Col>

            </Row>

            </Container>

        </section>
        

    </div>
  )
}

export default ProductTab