import React from 'react'
import './Details.scss'
import { productData as product } from '../data/data'
const Details = () => {
    return (
        <React.Fragment>
            <section className='product-details'>
                <div className="product-page-img">
                    {product.images.map((image, index) => (
                        <div key={index} className='mySlides'>
                            <div className="numbertext">{index + 1} / {product.images.length}</div>
                            <img src={image.src} alt="" />
                        </div>
                    ))}

                    <a href="#!" className='prev'>&#10094;</a> 
                    <a href="#!" className='next'>&#10095;</a>

                    <div className="slider-img">
                        {
                            product.images.map((image,index)=>(
                                <div className="slider-box">
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
                </div>
            </section>

            <section className="product-all-info">

            </section>

        </React.Fragment>
    )
}

export default Details