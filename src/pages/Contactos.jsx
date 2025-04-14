import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import postService from "../services/postService.js"

export const Contactos = () => {

    const { store, dispatch } = useGlobalReducer()

useEffect(()=>{
    console.log(postService);
    
    postService.loadPosts(dispatch);
    // dispatch({type:'updater', payload:{name:'agendas',value:loadPosts()}})
},[])

    console.log('contactos',store)
    // console.log('contactos',store.nombre)
    return (

        <div className="container">
            <h3>pagina de contactos</h3>
            <ul>
                {store.agendas?.length> 0 && store.agendas?.map((el,i)=> <li key={i}>{el.slug}</li>)}
            </ul>
        </div>
    )
}