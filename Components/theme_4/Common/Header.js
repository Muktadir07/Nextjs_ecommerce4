import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import styles from '../../../styles/theme_four/theme_four.module.css';

const options = [
  
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
  },
  
];

const Header = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <div className={styles.ThemeFour}>

      {/* ................ Mobile Header ...............................
      .................................................................. */}

      <section className={styles.MobileHeader}>

        <Container>

          <Row>

            <Col>
                <div className={styles.HeaderRight}>
                  <ul>
                    <li>
                      <Link href='' className='d_flex'>
                        <div className={styles.svg}>
                          <AiOutlineUser />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href='/theme_1/check_out' className='d_flex'>
                        <div className={styles.svg}>
                          <AiOutlineShoppingCart />
                          <span>7</span>
                        </div>   
                      </Link>
                    </li>

                    
                  </ul>
                </div>
            
            </Col>

          </Row>
          <hr className='my-1'></hr>

          <Row>

            <Col xs={10}>


              <div className={styles.Logo}>
                    
                    <img className={styles.imgBlack} src="/images/theme_4/themeLogo4.svg" alt="" />

              </div>
            
            </Col>

            {/* <Col xs={2} className='d-flex justify-content-center'>
              <div className={styles.IconMenu}>

                <Link href='/theme_1/check_out' className='d-flex align-items-center'>
                  <div className={styles.svg}>
                    <AiOutlineSearch />
                  </div>   
                </Link>

              </div>
                
            
            </Col> */}

            <Col xs={2} className='d-flex justify-content-center'>
              <div className={styles.IconMenu}>

                <Link onClick={toggleShow} href='#' className='d-flex align-items-center'>
                  <div className={styles.svg}>
                    <FiMenu />
                  </div>   
                </Link>
                <Offcanvas className='offcanvas-bg' show={show} onHide={handleClose} {...props}>
                  <Offcanvas.Header closeButton className=''>
                    <Offcanvas.Title><img className={styles.imgBlack} src="/images/theme_4/themeLogo4.svg" alt="" /></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                      <nav className="animated bounceInDown">
                      <div className={styles.HeaderMiddle}>

                          <input type='text' name='' placeholder='SEARCH HERE...' />

                          <div  className={styles.svg} style={{ cursor: "pointer" }}>
                            <AiOutlineSearch/>
                          </div>

                      </div>
                        <ul>
                          <li className="active"><a href="/">Home</a></li>
                          <li><a href="#about-us">About us</a></li>
                          <li className="sub-menu"><a href="#contact-us">Contact Us</a></li>
                          <li className="sub-menu"><a href="/shoppage">Shop</a></li>
                          <li><a href="#message">Logout</a></li>
                        </ul>

                          <div className={styles.navIcons}>

                                <ul>
                                    <li><Link href='#'><FaFacebookF/></Link> </li>
                                    <li><Link href='#'><FaYoutube/></Link> </li>
                                    <li><Link href='#'><FaInstagram/></Link> </li>
                                    <li><Link href='#'><FaTwitter/></Link> </li>
                                    
                                </ul>

                          </div>
                      </nav>
                  </Offcanvas.Body>
                </Offcanvas>

              </div>
                
            
            </Col>

          </Row>

        </Container>

      </section>

      {/* ................ Normal Header ...............................
      .................................................................. */}

      <section className={styles.Header}>

        <Container>

          <Row>

            <Col lg={12}>
              <div className={styles.Menubar}>

              

                  <div className={styles.HeaderLeftLogo}>
                  
                    <div className={styles.Logo}>
                    
                      <img className={styles.imgBlack} src="/images/theme_4/themeLogo4.svg" alt="" />

                    </div>


                  </div>


                <div className={styles.HeaderMiddle}>

                  <input type='text' name='' placeholder='SEARCH HERE...' />

                  <div  className={styles.svg} style={{ cursor: "pointer" }}>
                    <AiOutlineSearch/><p>SEARCH</p>
                  </div>
                  
                </div>


                  <div className={styles.HeaderRight}>
                    <ul>
                      <li>
                        <Link href='' className='d_flex'>
                          <div className={styles.svg}>
                            <AiOutlineHeart />
                            <span>2</span>
                          </div>
                          Wishlist
                          
                        </Link>
                      </li>

                      <li>
                        <Link href='/theme_1/check_out' className='d_flex'>
                          <div className={styles.svg}>
                            <AiOutlineShoppingCart />
                            <span>7</span>
                          </div>
                          Cart
                          
                        </Link>
                      </li>

                      <li>
                        <a href='' className='d_flex'>
                          <div className={styles.svg}>
                            <AiOutlineUser />
                          </div>
                          Account
                        </a>
                      </li>
                    </ul>
                  </div>

              </div>
            
            </Col>

          </Row>
          
        </Container>

      </section>
      
        
    </div>
  )
}

export default Header