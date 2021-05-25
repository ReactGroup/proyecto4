import React from 'react'


function ProductCard(product){
    return(
        <div className="each-product" key={product.id}>
            <div className="image-container">
                <img src={product.img.url} alt={product.name} className="image-product"/>
            </div>
            <h5 className="category">{product.category}</h5>
            <h6 className="name-product">{product.name}</h6>
        </div>
    )
}


export default ProductCard