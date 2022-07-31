import React, { useContext, useEffect, useState } from "react";
import drinks from "./data";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


const AppContext = React.createContext()

export const AppProvider = ({children})=>{
    const [data,setData] = useState(drinks)
    const [modaldata,setmodalData] = useState({})
    const [isopenModal,setIsOpenModal] = useState(false)
    // const [isopenModal,setIsOpenModal] = useState(false)

    const openModal = (text)=>{
        console.log("in context....",text)
        setIsOpenModal(true)
        setmodalData(text)
    }
    const closeModal = ()=>{
        setIsOpenModal(false)
    }

    // const fetchData = async()=>{
    //     const response = await fetch(url);
    //     const newData = await response.json()
    //     setData(newData)
    // }
    // useEffect(()=>{
    //     fetchData()
    // },[])

    return <AppContext.Provider value={{data,isopenModal,openModal,setData,closeModal,modaldata,setmodalData}} >{children}</AppContext.Provider> 
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}