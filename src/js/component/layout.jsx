import React, {useEffect, useState} from "react";
import Counter from "./counter.jsx";


const Layout = (props)=>{
    const [count, setCount] = useState (0) 


    let six = Math.floor(count/100000)
    let five = Math.floor(count/10000)
    let four = Math.floor(count/1000)
    let three = Math.floor(count/100)
    let two= Math.floor(count/10)
    let one = Math.floor(count/1)

    const [intervalId, setIntervalId] = useState ()

    useEffect( ()=> {
        console.log("ejecutando useEffect")
        const id = setInterval( ()=> {
            setCount(count + 1)
        }, 1000)
        return ()=>{
            clearInterval(id)
        }
    },)

    return(
        <Counter digiOne={one} digiTwo={two} digiThree={three} digiFour={four} digiFive={five} digiSix={six}/>
    );
}

export default Layout;