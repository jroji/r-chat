import { Link, useParams } from "react-router-dom";

export default function Chat() {
    const params = useParams();

    return <>
        <Link to="/">Volver</Link>
        <h1>Esta es la vista de chat con {params.id}</h1>
    </>
}
