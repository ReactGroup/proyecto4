import React from 'react'
import next from '../images/icons/arrow-right.svg'

function Paginador({productList, pagination,setPagination}){

    return(
        <div>
            {productList.length > 15 &&
                (pagination ? (
                    <button onClick={()=>setPagination(!pagination)}>Siguente</button>
                ) : (
                    <button onClick={()=>setPagination(!pagination)}>Anterior</button>
            ))}
        </div>
    )

    //function fnPaginacion(){
    //    console.log("lalalla");
    //    let number = 1
    //    numberPag(number)
    //}
};

export default Paginador