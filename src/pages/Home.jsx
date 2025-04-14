import { Link, useNavigate } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const navigate = useNavigate()

	const handleGoToPrueba = () => {
		navigate('/prueba')
	}

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>ir a prueba {store.nombre}</p>
			{/* el nuevo <a> */}
			<Link to={'/prueba'}>
				aqui
			</Link>
			<p>mensaje: {store.message}</p>
			<button onClick={handleGoToPrueba}>
				ir a prueba
			</button>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 