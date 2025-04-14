import useGlobalReducer from "../hooks/useGlobalReducer"

export const VistaPrueba = () => {

    const {store, dispatch} = useGlobalReducer()

    console.log(store)


    const handleMessageChange = () => {
        dispatch({type: 'changeMessage', payload: 'lola es mejor'})
        store.message = 'lola es mejor' //no funciona, solo se puede modificar el store mediante el storeReducer (dispatch)
    }

    return (

        <div className="container">
            <h3>Vista prueba para {store.nombre}</h3>
            <p className="fs-3">el mesange es : {store.message || 'no hay mensaje'}</p>
            <button onClick={handleMessageChange}>cambiar mensaje</button>
        </div>
    )
}