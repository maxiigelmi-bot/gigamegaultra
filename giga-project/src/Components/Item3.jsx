export const Item3 = ({nombre, precio, descripcion}) => {
    return (
        <article>
            <p>Item3</p>
            <p>{nombre}</p>
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p>
        </article>
    );
    
}
