import React from 'react'
import { useNavigate } from 'react-router'

const Detail = () => {

    const drinkStorage = JSON.parse(localStorage.getItem('drink'))

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <div>
                <button onClick={() => handleBack()}>BACK...</button>
            </div>
            <div>
                <h1>{drinkStorage.strDrink}</h1>
                <img src={drinkStorage.strDrinkThumb} alt=""
                    style={{ width: "200px" }} />
                <h1>Category: <span>{drinkStorage.strCategory}</span></h1>
                <h1>Alcoholic: <span>{drinkStorage.strAlcoholic}</span></h1>
                <h1>Glass: <span>{drinkStorage.strGlass}</span></h1>
                {drinkStorage.strTags
                    ? <h1>Tags: <span>{drinkStorage.strTags}</span></h1>
                    : <h1>Tags:<span> No have tags</span></h1>}
                <h1>Instructions: {drinkStorage.strInstructions}</h1>
                <ul>
                    <h1>Ingredients:</h1>
                    {
                        drinkStorage.strIngredient1 &&
                        <li>{drinkStorage.strIngredient1} ({drinkStorage.strMeasure1})</li>
                    }
                    {
                        drinkStorage.strIngredient2 &&
                        <li>{drinkStorage.strIngredient2} ({drinkStorage.strMeasure2})</li>
                    }
                    {
                        drinkStorage.strIngredient3 &&
                        <li>{drinkStorage.strIngredient3} ({drinkStorage.strMeasure3})</li>
                    }
                    {
                        drinkStorage.strIngredient4 &&
                        <li>{drinkStorage.strIngredient4} ({drinkStorage.strMeasure4})</li>
                    }
                    {
                        drinkStorage.strIngredient5 &&
                        <li>{drinkStorage.strIngredient5} ({drinkStorage.strMeasure5})</li>
                    }
                    {
                        drinkStorage.strIngredient6 &&
                        <li>{drinkStorage.strIngredient6} ({drinkStorage.strMeasure6})</li>
                    }
                    {
                        drinkStorage.strIngredient7 &&
                        <li>{drinkStorage.strIngredient7} ({drinkStorage.strMeasure7})</li>
                    }
                    {
                        drinkStorage.strIngredient8 &&
                        <li>{drinkStorage.strIngredient8} ({drinkStorage.strMeasure8})</li>
                    }
                    {
                        drinkStorage.strIngredient9 &&
                        <li>{drinkStorage.strIngredient9} ({drinkStorage.strMeasure9})</li>
                    }
                    {
                        drinkStorage.strIngredient10 &&
                        <li>{drinkStorage.strIngredient10} ({drinkStorage.strMeasure10})</li>
                    }
                    {
                        drinkStorage.strIngredient11 &&
                        <li>{drinkStorage.strIngredient11} ({drinkStorage.strMeasure11})</li>
                    }
                    {
                        drinkStorage.strIngredient12 &&
                        <li>{drinkStorage.strIngredient12} ({drinkStorage.strMeasure12})</li>
                    }
                    {
                        drinkStorage.strIngredient13 &&
                        <li>{drinkStorage.strIngredient13} ({drinkStorage.strMeasure13})</li>
                    }
                    {
                        drinkStorage.strIngredient14 &&
                        <li>{drinkStorage.strIngredient14} ({drinkStorage.strMeasure14})</li>
                    }
                    {
                        drinkStorage.strIngredient15 &&
                        <li>{drinkStorage.strIngredient15} ({drinkStorage.strMeasure15})</li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Detail