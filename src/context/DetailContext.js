import * as React from 'react';

export const DetailContext = React.createContext({
    // movie: {},
    // setMovie: ()=>{},
    // isOpen: false,
    // setIsOpen: ()=> {},
})

export const  DetailProvider = ({children}) => {

    const [movie, setMovie] = React.useState({})
    const [isOpen, setIsOpen] = React.useState(false)
    const [currentSection, setCurrentSection] = React.useState('')

    return <DetailContext.Provider value={{movie, setMovie, isOpen, setIsOpen, currentSection, setCurrentSection}}>
            {children}
        </DetailContext.Provider>
}