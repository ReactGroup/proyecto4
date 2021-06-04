import React from 'react'
import next from '../images/icons/arrow-right.svg'

function Paginador({productsItems}){
    return(
        <>
        {productsItems.length > 16 && (
            <a className="pagination" href="" target="_self">
            Siguiente
                <img src={next} alt="next"/>
            </a>
        )}
        </>
    )
};

export default Paginador