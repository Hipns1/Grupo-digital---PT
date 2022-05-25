import React, { useEffect, useState } from 'react'

const App = () => {

    const [data, setData] = useState([])

    const random = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    const getData = async () => {
        const response = await fetch(random)
        const data = await response.json()
        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data)

    return (
        <div>
            {
                data.drinks && data.drinks.map(drink => {
                    return (
                        <div key={drink.idDrink}>
                            <h1>{drink.strDrink}</h1>
                            <img src={drink.strDrinkThumb} alt=""
                                style={{ width: "200px" }} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default App