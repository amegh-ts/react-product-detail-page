import React, { useState, useEffect, useRef } from 'react'
import './Details.scss'
import { productData as product } from '../data/data'
const Details = () => {
    const [slideIndex, setSlideIndex] = useState(1)
    const [width, setWidth] = useState(0)
    const [start, setStart] = useState(0)
    const [change, setChange] = useState(9)
    const slideRef = useRef();

    useEffect(() => {
        if(!slideRef.current) return;
        const scrollWidth = slideRef.current.scrollWidth;
        const childrenElementCount=slideRef.current.childElementCount;
        const width = scrollWidth / childrenElementCount;
        setWidth(width);
    }, [])

    const plusSlides = (n) => {
        setSlideIndex(prev => prev + n);
        slideShow(slideIndex + n)
    }

    const slideShow = (n) => {
        if (n > product.images.length) { setSlideIndex(1) }
        if (n < 1) { setSlideIndex(product.images.length) }
    }

    //  drag

    const dragStart = (e) => { 
        setStart(e.clientX)
    }

    const draOver = (e) => { 
        let touch = e.clientX;
        setChange(start - touch);
    }

    const dragEnd = (e) => { 
        // drag left change >0
        // drag right change >0
        if(change > 0){
            slideRef.current.scrollLeft += width
        }else{
            slideRef.current.scrollLeft -= width
        }
    }

    useEffect(() => {
        if(!slideRef.current || !width) return;
        let numOfThumb=Math.round(slideRef.current.offsetWidth/width);
        slideRef.current.scrollLeft = slideIndex > numOfThumb ? (slideIndex-1) * width : 0
    }, [width, slideIndex])


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

                    <div className="slider-img" draggable={true} ref={slideRef}
                        onDragStart={dragStart} onDragOver={draOver} onDragEnd={dragEnd}
                    >
                        {
                            product.images.map((image, index) => (
                                <div className={`slider-box ${index + 1 === slideIndex && 'active'}`}
                                    onClick={() => setSlideIndex(index + 1)}
                                >
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