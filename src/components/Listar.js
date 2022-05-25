import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAsync } from '../Redux/actions/actionFavorito'

const Listar = () => {
    const dispatch = useDispatch()
  const { favoritos } = useSelector(store => store.favoritos)

  return (
    <div>
      <table>
        <thead>
          <tr >
            <td>Nombre</td>
            <td>Descripción</td>
            <td>
              acciones
            </td>
          </tr>
        </thead>
        <tbody>
          {
            favoritos.map((p, index) => (
              <tr key={index}>
                <td>{p.strDrink}</td>
                <td>{p.strCategory}</td>
                <td>
                  <button margin={10} onClick={() => dispatch(deleteAsync(p.id))}> <img onClick={() => dispatch(deleteAsync(p.id))} width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015682/trash_2_vcdean.png' /> </button>

                </td>

              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default Listar