import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './context'
import Navbar from './Navbar'
import drinks from "./data";




const Cocktails = () => {

    const {data,setData} = useGlobalContext()
    const {searchedText,setSearchedText} = useState([])
    // const {data,setData} = useState()

    const showDetails = (e)=>{
        console.log(e.target.textContent)
        // setSearchedText(e.target.textContent)
        const filteredData = data.filter((item)=>{
            return item.strDrink.includes(searchedText)
        })
        console.log("filteredData",filteredData)
    }
    const handleChange = event => {
        event.preventDefault()
        if(event.target.value){
            // console.log('value is:', event.target.value);
            let searchedInput = event.target.value
            const filteredData = drinks.filter((item)=>{
                return item.strDrink.includes(searchedInput)
            })
            setData(filteredData)
            // console.log("filteredData",filteredData)
        }else{
            setData(drinks)
        }
      };

  return (
    <div> 
        <Navbar />
        <div className='cocktail_search'>
            <label className='cocktail_search__label' htmlFor="search">Search For Cocktails : </label>
            <input  onChange={handleChange}   id='search' type="text" />
        </div>
        <div className='cocktails_section'>
            {data.map((drink,index)=>{
            const {idDrink,strDrinkThumb,strCategory,strDrink} = drink;
            return(
            <div className='cocktail-item' key={index}>
                <img src={strDrinkThumb} alt="image" className="cocktails_img" />
                <label>Name : {strDrink}</label>
                <label>Category : {strCategory}</label>
                <button onClick={showDetails}>{strDrink}</button>
            </div>
            )
            })}
        </div>
    
    </div>
  )
}

export default Cocktails