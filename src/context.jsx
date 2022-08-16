import React, { useContext, useState } from "react";
import drinks from "./data";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [data, setData] = useState(drinks)
    const [modaldata, setmodalData] = useState({})
    const [isopenModal, setIsOpenModal] = useState(false)

    const openModal = (text) => {
        setIsOpenModal(true)
        setmodalData(text)
    }
    const closeModal = () => {
        setIsOpenModal(false)
    }

    return <AppContext.Provider value={{ data, isopenModal, openModal, setData, closeModal, modaldata, setmodalData }} >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}