function TarjetaVehiculo(props) {
    return (
        <article>
            <h2>Vehiculo</h2>
            <p>{props.marca}</p>
            <p>{props.modelo}</p>
            <p>{props.año}</p>
            <p>${props.precio.toLocaleString()}</p>
        </article>
    )
}

export default TarjetaVehiculo;

