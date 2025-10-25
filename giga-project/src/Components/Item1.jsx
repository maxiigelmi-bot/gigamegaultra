export const Item1 = ({nombre, precio, descripcion}) => {
    return (
        <article>
            <p>Item1</p>
            <p>{nombre}</p>
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p>
        </article>
    );
    
}
