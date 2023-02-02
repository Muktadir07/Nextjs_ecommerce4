import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../../styles/theme_four/theme_four.module.css';

const Home = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  return (
    <div className={styles.ThemeFour}>

        {/* ..........................Carousel Section start..................................
        ................................................................................. */}

        <section className={styles.CarouselSection}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/theme_4/slider1-2.png"
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                 <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/theme_4/slider1-2.png"
                    alt="Second slide"
                    />

                </Carousel.Item>
               {/* <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>

        </section>


        {/* ..........................Carousel Section end,..................................
        ................................................................................. */}

        {/* ..........................Product Tab Section start..................................
        ................................................................................. */}


        
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
                                

                                
                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/headphone.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Sony headphones hd with reasonable prising</h6>

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
                                


                            {/* </div>


                            <div className={styles.ProductContainer}> */}
                            
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
                        <Tab eventKey="contact" title="Contact" >

                            
                        <div className={styles.ProductContainer}>
                                
                                
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
        


                            </div>

                        </Tab>                            
                        </Tabs>


                    </div>
                

                
                </Col>

            </Row>

            </Container>

        </section>
        {/* ..........................Product Tab Section end..................................
        ................................................................................. */}

         {/* ..........................Banner Section Start..................................
        ................................................................................. */}

        <section className={styles.Banners}>

            <Container>

                <Row>

                    <Col xs={6} lg={6}>

                        <div className={styles.Images1}>
                            <img src="/images/theme_4/banner1.png" alt="" />
                        </div>
                    
                    </Col>
                    <Col xs={6}  lg={6}>
                        <div className={styles.Images}>
                            <img src="/images/theme_4/banner2_1.png" alt="" />
                        </div>
                        <div className={styles.Images}>
                            <img src="/images/theme_4/banner2_2.png" alt="" />
                        </div>
                    
                    </Col>

                </Row>

            </Container>

        </section>

        {/* ..........................Product List Start..................................
        ................................................................................. */}

        <section className={styles.ProductList}>

            <Container>
                <Row>

                    <Col lg={12}>

                          {/* ================================= Product Container==============================================
                            ================================================================================================= */}

                            <div className={styles.ProductContainer}>
                                <div className={styles.ProductCard}>

                                    <div className={styles.ImgBox}>
                                        <img src="/images/theme_4/refrigerator2.png" alt="" />
                                    </div>
                                    <div className={styles.titleBox}>

                                        <div className={styles.Title}>
                                            <h6>Mi band 6 (Brand new) Ok good good bye</h6>

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
                                



                            {/* </div>


                            <div className={styles.ProductContainer}> */}
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
                                


                            </div>


                            

                            <div className={styles.AllProduct}>
                                <h5>View All Product</h5>
                                
                                </div>


                    {/* ================================= Product Container End==============================================
                        ================================================================================================= */}

                    
                    </Col>

                </Row>

            </Container>

        </section>
        

    </div>
  )
}

export default Home