import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addSync } from '../Redux/actions/actionFavorito';
import styles from "../Styles/App.module.scss"
import search from "../Styles/Images/SEARCH.svg"

const App = () => {

    const [data, setData] = useState()
    const [query, setQuery] = useState('')

    const busqueda = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

    const getData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
        getData(busqueda)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDetail = (drink) => {
        localStorage.setItem('drink', JSON.stringify(drink))
        navigate("/detail")
    }
    const handleAdd = (drink) =>{
        dispatch(addSync(drink))
    }

    return (
        <div className={styles.app_container}>
            <div className={styles.app_input}>
                <input
                    type="text"
                    placeholder="Search a cocktail..."
                    onChange={handleChange}
                />
            </div>
            <div className={styles.app_card__container}>
                {
                    data ?
                        data.drinks && data.drinks.map(drink => {
                            return (
                                <div key={drink.idDrink} className={styles.app_card}>
                                    <img src={drink.strDrinkThumb} alt="" />
                                    <h1>{drink.strDrink}</h1>
                                    <div className={styles.app_btns}>
                                        <button onClick={() => handleDetail(drink)}>Detail</button>
                                        <button onClick={handleAdd}>Favorite</button>
                                    </div>
                                </div>
                            )
                        })
                        : <div className={styles.app_search}>
                            <img src={search} />
                            <h1>Search a cocktail...</h1>
                        </div>
                }
            </div>
        </div>
    )
}

export default App