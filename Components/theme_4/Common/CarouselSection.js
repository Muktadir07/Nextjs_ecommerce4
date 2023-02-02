import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../../styles/theme_four/theme_four.module.css';

const CarouselSection = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  return (
    <div className={styles.ThemeFour}>
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
        

    </div>
  )
}

export default CarouselSection