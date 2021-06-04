import React from 'react'
import { useState } from "react";

function Filtros({categoryItems,filter}){
 

    let categories = categoryItems
    var options = {};
    categories = categories.filter(function(current) {
    var exists = !options[current.category];
    options[current.category] = true;
    return exists;
    });


    return(
        <>
            <select name="Categorias" id="categories" onChange={filterCategory}>
                <option value="Todas">Todas</option>
                {categories.map((option)=>
                    <option key={option._id} value={option.category}>{option.category}</option>
                )}
            </select>
            <input type="radio" id="lowest" name="filter" value="lowest" onClick={filterLower}/>
            <label for="lowest">Precio más bajo</label>
            <input type="radio" id="highest" name="filter" value="highest" onClick={filterHigher} />
            <label for="highest">Precio más alto</label>
        </>
    );
    
    function filterCategory(e){
        let updatelist = categoryItems.filter((value) => {
            return e.target.value === "Todas"
              ? value
              : value.category === e.target.value;
          });
          filter(updatelist, e.target.value);
    };

    function filterHigher(e){
        let order = categoryItems.sort((a,b) => b.cost - a.cost);
        filter(order)
    };

    function filterLower(e){
        let order = categoryItems.sort((a,b) => a.cost - b.cost);
        filter(order)
    };

}

export default Filtros;