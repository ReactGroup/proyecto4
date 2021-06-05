import React from 'react'
import ProductCard from './ProductCard'
import { Link} from 'react-router-dom';

function Results({productList, pagination}){
    
    // function setPaginacion(){
    //     let inicial = 0;
    //     let final = 16;
    //     const newFinal = final*pagination;
    //     if(pagination === 1){return {inicial, final} }
    //     else { return {final, newFinal} }
    // };

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
}



export default Results;