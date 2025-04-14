import { useParams } from "react-router-dom"

export const PruebaDinamica = () => {

    const params = useParams()
    //es un objeto
    console.log(params)

    return (
        <div className="container">
            <h3>vista dinamica</h3>
            <p className="fs-3">valor del parametro es {params.miValor || params.categoria}</p>
        </div>
    )
}