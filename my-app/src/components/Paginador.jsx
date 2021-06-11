import React from 'react'
import next from '../images/icons/arrow-right.svg'
import prev from '../images/icons/arrow-left.svg'


function Paginador({pages,current,handlePaginador}){

    return(
        <div className="pagination">
            {current > 0 && (
                <button onClick={() => handlePaginador(current-1)}>
                    <img src={prev} alt="prev"/>Anterior
                </button>
            )}

            {current < pages-1 && (
                <button onClick={() => handlePaginador(current+1)}>
                        Siguiente <img src={next} alt="next"/>
                </button>
            )}
        </div>
    )


    // return(
    //     <div className="pagination">
    //         {productList.length > 15 &&
    //             (pagination ? (
    //                 <>
    //                 <button onClick={()=>setPagination(!pagination)}>
    //                     Siguiente <img src={next} alt="next"/>
    //                 </button>
    //                 </>
    //             ) : (
    //                 <button onClick={()=>setPagination(!pagination)}>
    //                     <img src={prev} alt="prev"/>Anterior
    //                     </button>
    //         ))}
    //     </div>
    // )


    //function fnPaginacion(){
    //    console.log("lalalla");
    //    let number = 1
    //    numberPag(number)
    //}
};

export default Paginador