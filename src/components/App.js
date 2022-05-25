import React, { useEffect, useState } from 'react'

const App = () => {

    const [data, setData] = useState([])

    const busqueda = "www.thecocktaildb.com/api/json/v1/1/search.php?s=Brandy"

    const getData = async () => {
        const response = await fetch(busqueda)
        const data = await response.json()
        console.log(data)
        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data)

    return (
        <div>

        </div>
    )
}

export default App