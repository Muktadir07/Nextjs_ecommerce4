import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {  FiFacebook, FiInstagram, FiSmartphone, FiTwitter } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { BiEnvelope } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import styles from '../../../styles/theme_four/theme_four.module.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.ThemeFour}>
        
        <section className={styles.serviceSection}>
        <Container>
            <Row>
                <Col sm={6} lg={3} className={styles.serviceItem}>
                <div className='icon'>
                    <img src="/images/theme_4/fast.svg" alt="fast"/>
                </div>
                <div className={styles.text}>
                    <h4>Free Delivery</h4>
                    <p>Product are free shipping</p>
                </div>
                </Col>
                
                <Col sm={6}  lg={3} className={styles.serviceItem}>
                <div className='icon'>
                    <img src="/images/theme_4/credit-card.svg" alt="fast"/>
                </div>
                <div className={styles.text}>
                    <h4>Secure Payment</h4>
                    <p>We ensure secure payment</p>
                </div>
                </Col>
                <Col sm={6} lg={3} className={styles.serviceItem}>
                <div class="icon">
                    <img src="/images/theme_4/returning.svg" alt="fast"/>
                </div>
                <div className={styles.text}>
                    <h4>90 Days Return</h4>
                    <p>Most product are free shipping</p>
                </div>
                </Col>
                <Col sm={6} lg={3} className={styles.serviceItem}>
                <div className='icon'>
                    <img src="/images/theme_4/support.svg" alt="fast"/>
                </div>
                <div className={styles.text}>
                    <h4>Support 24/7</h4>
                    <p>Support 24/7 hours a day</p>
                </div>
                </Col>

            </Row>
        </Container>
    </section>

    {/* ================================= Footer Widget==============================================
      ================================================================================================= */}

    <section className={styles.Footer}>

        <Container>
            <Row className='justify-content-between'>

            <Col xl={2} lg={3} sm={2}>
                <div class={styles.icon}>
                    <img src="/images/theme_4/themeLogo4.svg" alt="fast"/>
                </div>
            </Col>

              
              <Col xl={3} lg={3} md={3} sm={3}>

                <div className={styles.footermenu}>

                  <h5>Important Links</h5>

                    <ul className={styles.menu}>

                      <li><Link href="#">
                      Privacy Policy</Link>
                      </li>
                      <li><Link href="#">
                      Terms & Conditions</Link>
                      </li>
                      <li><Link href="#">
                      Contact</Link>
                      </li>

                    </ul>

                </div>
              
              </Col>
              <Col xl={4} lg={3} md={3} sm={3}>

                <div className={styles.footermenu}>

                  <h5>Email us</h5>

                      <ul className={styles.menu2}>

                          <li><Link href="#"><FiSmartphone/>
                          +1 (7635) 547-12-97</Link>
                          </li>
                          <li><Link href="#"><BiEnvelope/>
                          support@website.com</Link>
                          </li>
                          <li><Link href="#"><GoLocation/>
                          4517 Washington Ave. Manchester, Kentucky 39495</Link>
                          </li>

                      </ul>

                </div>
              
              
              </Col>
              <Col xl={3} lg={3} md={3} sm={3}>
              <div className={styles.footermenu}>

                <h5>Join our social media</h5>

                    
                    <ul className={styles.social}>
                        <li>
                            <Link href="#"><FaFacebookF/></Link>
                        </li>
                        <li>
                            <Link href="#"><FaYoutube/></Link>
                        </li>

                        <li>
                            <Link href="#"><FaInstagram/></Link>
                        </li>
                        

                        <li>
                            <Link href="#"><FaTwitter/></Link>
                        </li>

                    </ul>

              </div>
              
              </Col>

            </Row>

            <Row>
              <Col lg={12}>
                <hr></hr>
                <div className='text-center'>

                  <p className={styles.footertext}>A product of  Soft IT Care</p>

                  <h4>© 2022 Soft IT Care . All Rights Reserved.</h4>

                </div>
              </Col>
            </Row>
        </Container>

        

    </section>
    </div>
  )
}

export default Footer