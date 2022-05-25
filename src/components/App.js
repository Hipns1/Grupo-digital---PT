import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addSync } from '../Redux/actions/actionFavorito';
import { logoutAsync } from '../Redux/actions/actionLogin';

const App = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('')

    const random = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
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

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }

    const handleDetail = (drink) => {
        localStorage.setItem('drink', JSON.stringify(drink))
        navigate("/detail")
    }
    const handleAdd = (drink) =>{
        dispatch(addSync(drink))
    }

    useEffect(() => {
        getData(random)
    }, [])

    return (
        <div>
            <h1>Cocktail App</h1>
            <button onClick={() => handleLogout()}>LOGOUT</button>
            <input
                type="text"
                placeholder="Buscar"
                onChange={handleChange}
            />
            {
                data.drinks && data.drinks.map(drink => {
                    return (
                        <div key={drink.idDrink}>
                            <h1>{drink.strDrink}</h1>
                            <img src={drink.strDrinkThumb} alt=""
                                style={{ width: "200px" }} />
                            <button onClick={() => handleDetail(drink)}>Detail</button>
                            <button onClick={() => handleAdd(drink)}>Favorite</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default App