import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './context'
import Navbar from './Navbar'
import drinks from "./data";
import Modal from './Modal';




const Cocktails = () => {

    const { data, setData ,openModal,closeModal,isopenModal} = useGlobalContext()
    const { searchedText, setSearchedText } = useState([])
    // const [open, setOpen] = useState(false);
    // const {data,setData} = useState()

    const showDetails = (e) => {
        // setOpen(true);
        console.log(e.target.textContent)
        // setSearchedText(e.target.textContent)
        const filteredData = data.filter((item) => {
            return item.strDrink.includes(e.target.textContent)
        })
        console.log("filteredData", filteredData)
        openModal(filteredData)
    }
    const handleClose = () => {
        // setOpen(false);
        closeModal()
      };
    const handleChange = event => {
        event.preventDefault()
        if (event.target.value) {
            let searchedInput = event.target.value
            const filteredData = drinks.filter((item) => {
                return item.strDrink.includes(searchedInput)
            })
            setData(filteredData)
        } else {
            setData(drinks)
        }
    };

    return (
        <div>
            <Navbar />
            <div className='cocktail_search'>
                <label className='cocktail_search__label' htmlFor="search">Search For Cocktails : </label>
                <input onChange={handleChange} id='search' type="text" />
            </div>
            <div className='cocktails_section'>
                {data.map((drink, index) => {
                    const { idDrink, strDrinkThumb, strCategory, strDrink } = drink;
                    return (
                        <div className='cocktail-item' key={index}>
                            <img src={strDrinkThumb} alt="image" className="cocktails_img" />
                            <label>Name : {strDrink}</label>
                            <label>Category : {strCategory}</label>
                            <button onClick={showDetails}>{strDrink}</button>
                            <Modal 
                                open={isopenModal}
                                onClose={handleClose}
                            />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Cocktails