import React from 'react'
import { coinContext } from '../contexts';
import { useState } from "react";

function CoinProvider({children}){
    const [coins, setCoins] = useState(0)
    return(
        <coinContext.Provider value={{coins, setCoins}}>
            {children}
        </coinContext.Provider>
    )
}

export default CoinProvider