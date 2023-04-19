import * as React from 'react';

export const ResultContext = React.createContext({})

export const ResultProvider = ({children}) => {

    const [results, setResults] = React.useState([])
    return <ResultContext.Provider value={{results, setResults}}>
        {children}
    </ResultContext.Provider>
}