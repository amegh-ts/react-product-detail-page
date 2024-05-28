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
                </div>

                <div className='product-page-details'>

                </div>
            </section>

            <section className="product-all-info">

            </section>

        </React.Fragment>
    )
}

export default Details