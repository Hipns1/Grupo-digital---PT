import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../Firebase/firebaseConfig"//Ingresar la bd de Daniel
import { typesFavoritos } from "../types/types"

const nombreEntidad = "favoritosBD"

//---------------------Edit-----------//
export const editAsync = (emailUsuario, favorito) => {
  return async (dispatch) => {
    const colleccionTraer = collection(db, nombreEntidad)
    const q = query(colleccionTraer, where("email", "==", emailUsuario))
    const traerDatosQ = await getDocs(q)
    let id
    traerDatosQ.forEach(async (docu) => {
      id = docu.id
    })
    const documenRef = doc(db, nombreEntidad, id)
    await updateDoc(documenRef, favorito)
      .then(resp => {
        dispatch(editSync(favorito))
        dispatch(listAsynFavoritos())
      })
      .catch((err) => console.log(err))

  }
}

export const editSync = (favorito) => {
  return {
    type: typesFavoritos.edit,
    payload: favorito
  }

}

//-------------------delete--------------------//
export const deleteAsync = (emailUsuario) => {

  return async (dispatch) => {
    const colleccionTraer = collection(db, nombreEntidad)
    const q = query(colleccionTraer, where("email", "==", emailUsuario))
    const traerDatosQ = await getDocs(q)
    traerDatosQ.forEach((docum => {
      deleteDoc(doc(db, nombreEntidad, docum.id))
    }))
    dispatch(deleteSync(emailUsuario))
    dispatch(listAsynFavoritos())
  }
}

export const deleteSync = (emailUsuario) => {
  return {
    type: typesFavoritos.delete,
    payload: emailUsuario
  }

}

//---------------listar----------------//
export const listAsynFavoritos = () => {
  return async (dispatch) => {
    const colleccionTraer = await getDocs(collection(db, nombreEntidad))
    const favoritos = []
    colleccionTraer.forEach((doc) => {
      favoritos.push({
        ...doc.data()


      })
    })
    dispatch(listSync(favoritos))

  }
}

export const listSync = (favorito) => {
  return {
    type: typesFavoritos.list,
    payload: favorito
  }

}

//-------------agregar---------------//
export const addAsync = (favorito) => {
  return (dispatch) => {
    addDoc(collection(db, nombreEntidad), favorito)
      .then(resp => {
        dispatch(addSync(favorito))
        //  dispatch(listAsyn())
      })
      .catch(error => {
        console.warn(error);
      })
  }
}

export const addSync = (favorito) => {
  return {
    type: typesFavoritos.add,
    payload: favorito,
  }
}