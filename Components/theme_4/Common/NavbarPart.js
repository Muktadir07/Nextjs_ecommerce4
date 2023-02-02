import React from 'react'
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from '../../../styles/theme_four/theme_four.module.css';

const Navbar = () => {
  return (
    <div className={styles.ThemeFour}>

    
        <section className={styles.Navbar}>

            <Container>

                <Row>

                    <Col lg={12}>

                        <div className={styles.NavContainer}>

                            <div className={styles.navLeft}>
                                <ul>
                                    <li><Link href='/'>Home</Link> </li>
                                    <li><Link href='/shoppage'>Shop</Link> </li>
                                    <li><Link href='#'>About us</Link> </li>
                                    <li><Link href='#'>Contact us</Link> </li>
                                </ul>

                            </div>

                            <div className={styles.navRight}>

                                <ul>
                                    <li><Link href='#'><FaFacebookF/></Link> </li>
                                    <li><Link href='#'><FaYoutube/></Link> </li>
                                    <li><Link href='#'><FaInstagram/></Link> </li>
                                    <li><Link href='#'><FaTwitter/></Link> </li>
                                    
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

export default Navbar