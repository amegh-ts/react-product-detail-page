import React, { useState, useEffect, useRef } from 'react'
import './Details.scss'
import { productData as product } from '../data/data'
const Details = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const plusSlides = (n) => {
        setSlideIndex(prev => prev + n);
        slideShow(slideIndex + n)
    }

    const slideShow = (n) => {
        if (n > product.images.length) { setSlideIndex(1) }
        if (n < 1) { setSlideIndex(product.images.length) }
    }

    return (
        <React.Fragment>
            <section className='product-details'>
                <div className="product-page-img">
                    {product.images.map((image, index) => (
                        <div
                            key={index} className='mySlides'
                            style={{ display: (index + 1) === slideIndex ? 'block' : 'none' }}
                        >
                            <div className="numbertext">{index + 1} / {product.images.length}</div>
                            <img src={image.src} alt="" />
                        </div>
                    ))}

                    <a href="#!" className='prev' onClick={() => plusSlides(-1)} >&#10094;</a>
                    <a href="#!" className='next' onClick={() => plusSlides(1)} >&#10095;</a>

                    <div className="slider-img">
                        {
                            product.images.map((image, index) => (
                                <div className={`slider-box ${index + 1 === slideIndex && 'active'}`}>
                                    <img src={image.src} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='product-page-details'>
                    <strong>{product.name}</strong>
                    <p className='product-category'>{product.brand} - {product.category}</p>
                    <p className="product-price">
                        ${Math.round(product.price - (product.price * product.discount) / 100)} <del>${product.price}</del>
                    </p>
                    <p className="small-desc">{product.desc}</p>
                    <div className="product-options">
                        {product.colors.map(color => (
                            <div key={color}>
                                <button></button>
                            </div>
                        ))}
                    </div>
                    <div className="product-page-offer">
                        <p>{product.discount}% Discount</p>
                    </div>
                    <div className="product-sold">
                        <img src="sold.png" alt="soldIcon" />
                        <strong>{product.sold} <span>Products Sold</span></strong>
                    </div>
                    <div className="cart-btns">
                        <a href="#!" className='add-cart'>Add to Cart</a>
                        <a href="#!" className='add-cart buy-now'>Buy Now</a>
                    </div>
                </div>
            </section>

            <section className="product-all-info">

            </section>

        </React.Fragment>
    )
}

export default Details