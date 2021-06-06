import React from 'react'
import next from '../images/icons/arrow-right.svg'
import prev from '../images/icons/arrow-left.svg'


function Paginador({productList, pagination,setPagination}){

    return(
        <div className="pagination">
            {productList.length > 15 &&
                (pagination ? (
                    <>
                    <button onClick={()=>setPagination(!pagination)}>
                        Siguente <img src={next} alt="next"/>
                    </button>
                    </>
                ) : (
                    <button onClick={()=>setPagination(!pagination)}>
                        <img src={prev} alt="prev"/>Anterior
                        </button>
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