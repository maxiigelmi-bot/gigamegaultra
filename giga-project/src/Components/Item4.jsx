export const Item4 = ({nombre, precio, descripcion}) => {
    return (
        <article>
            <p>Item4</p>
            <p>{nombre}</p>
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p>
        </article>
    );
    
}
