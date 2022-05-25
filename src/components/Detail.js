import React, { useEffect, useState } from 'react'

const Detail = () => {

    const [drink, setDrink] = useState([])
    const drinkStorage = JSON.parse(localStorage.getItem('drink'))

    useEffect(() => {
        setDrink(drink)
    }, [drinkStorage])
    return (
        <div>
            <h1>{drinkStorage.strDrink}</h1>
            <img src={drinkStorage.strDrinkThumb} alt=""
                style={{ width: "200px" }} />
            <h1>Instructions: {drinkStorage.strInstructions}</h1>

            <ul>
                <h1>Ingredients:</h1>
                {
                    drinkStorage.strIngredient &&
                    <li>{drinkStorage.strIngredient}</li>
                }
                {
                    drinkStorage.strIngredient1 &&
                    <li>{drinkStorage.strIngredient1}</li>
                }
                {
                    drinkStorage.strIngredient2 &&
                    <li>{drinkStorage.strIngredient2}</li>
                }
            </ul>
        </div>
    )
}

export default Detail