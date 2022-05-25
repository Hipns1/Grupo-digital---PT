import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../Firebase/credentials"
import { typesFavoritos } from "../types/types"

const nombreEntidad = "favoritosBD"



//-------------------delete--------------------//
export const deleteSync = (emailUsuario) => {
  return {
    type: typesFavoritos.delete,
    payload: emailUsuario
  }

}

//---------------listar----------------//

export const listSync = (favorito) => {
  return {
    type: typesFavoritos.list,
    payload: favorito
  }

}

//-------------agregar---------------//

export const addSync = (favorito) => {
  return {
    type: typesFavoritos.add,
    payload: favorito,
  }
}