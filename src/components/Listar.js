import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { deleteAsync, listAsynFavoritos } from '../Redux/actions/actionFavorito'
import styles from "../Styles/App.module.scss"

const Listar = () => {
  
  const dispatch = useDispatch()
  const { favoritos } = useSelector(store => store.favorito)

  const navigate = useNavigate()
  const handleDetail = (drink) => {
    localStorage.setItem('drink', JSON.stringify(drink))
    navigate("/detail")
  }

  const handleDelete = (id) => {
    dispatch(deleteAsync(id))
  }

  useEffect(() => {
    dispatch(listAsynFavoritos())
  }, [])

  return (
    <div>
      <div className={styles.app_card__container}>
        {
          favoritos.map((p, index) => (
            <div key={index} className={styles.app_card}>
              <div className={styles.app_card__top}>
                <img src={p.strDrinkThumb} alt="" />
                <h1>{p.strDrink}</h1>
              </div>
              <div className={styles.app_btns}>
                <button
                  style={{ backgroundColor: '#D457FF' }}
                  onClick={() => handleDetail(p)}>Detail</button>
                <button
                  style={{ backgroundColor: '#FF4D38' }}
                  onClick={() => handleDelete(p.idDrink)}>DELETE</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Listar