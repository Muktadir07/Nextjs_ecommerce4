import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { IoMdArrowDropdown } from 'react-icons/io';;
import styles from '../../../styles/theme_four/theme_four.module.css';

const ShopPage = () => {
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

        <section className={styles.ShopProducts}>

            <Container>

                <Row>

                    <Col lg={2}>

                        {/* ..........................Filter Section,..................................
                        ................................................................................. */}
                        <div className={styles.FilterContainer}>

                            <div className={styles.Title}>

                                <h4>Filter</h4>

                            </div>

                            
                            
                            {/* <div className={styles.FilterBtn}>

                                <div className={styles.FilterText}>
                                    <p>Price Low to high <IoMdArrowDropdown/></p>

                                </div>

                                <div className={styles.FilterList}>

                                    <ul>
                                        <li><Link href='#'>Price Low to high</Link> </li>
                                        <li><Link href='#'>Color</Link> </li>
                                        <li><Link href='#'>Size</Link> </li>
                                        
                                    </ul>

                                </div>

                            </div> */}
                            <div className={styles.dropDownBox}>
                            <h5 className='mt-3 text-center'>Sort By</h5>
                            
                                <DropdownButton className='btnCustom ' title="Price low to high">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className={styles.dropDownBox}>
                            <h5 className='mt-3 text-center'>Sort By</h5>

                                <DropdownButton className='btnCustom ' title="Price low to high">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </div>

                        </div>

                        
                    
                    </Col>

                    <Col lg={10}>

                        {/* ================================= Product Container==============================================
                            ================================================================================================= */}
                            

                        <div className={styles.Box}>

                            
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
                                
                                


                            </div>
                        </div>
                            



                    {/* ================================= Product Container End==============================================
                        ================================================================================================= */}
                    
                    </Col>

                </Row>

            </Container>

        </section>

        {/* ..........................Banner Section Start..................................
        ................................................................................. */}

        <section className={styles.Banners}>

        <Container>

            <Row>

                <Col xs={6}  lg={6}>

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

        <section className={styles.ShopProducts}>

            <Container>

                <Row>

                    <Col lg={2}>

                       

                        
                    
                    </Col>

                    <Col lg={10}>

                        {/* ================================= Product Container==============================================
                            ================================================================================================= */}
                            

                        <div className={styles.Box}>

                            
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
                                
                                


                            </div>
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

export default ShopPage