import React from 'react'
import ProductCard from './ProductCard'
import { Link} from 'react-router-dom';

function Results({productList}){
    return(
        <div className="product-container">
            {productList.map((product) =>
            <Link to ={`producto/${product._id}`} style={{ textDecoration: 'none' }}>
                <ProductCard 
                product={product}
                {...product}/>
            </Link>
            )}
        </div>
    )
    
    
    
    
    {/* 
    if(productList.length > 15 && !pagination ){
        return ( 
        <>
        <div className="product-container">
            {productList.slice(16,32).map((product) =>
            <Link to ={`producto/${product._id}`} style={{ textDecoration: 'none' }}>
                <ProductCard 
                product={product}
                {...product}/>
            </Link>
            )}
        </div>
        </>
        )} else{
            return(
                <>
                <div className="product-container">
                    {productList.slice(0,16).map((product) =>
                    <Link to ={`producto/${product._id}`} style={{ textDecoration: 'none' }}>
                        <ProductCard 
                        product={product}
                        {...product}/>
                    </Link>
                    )}
                </div>
                </>
            )}
                    
        */}
}



export default Results;