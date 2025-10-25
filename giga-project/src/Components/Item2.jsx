export const Item2 = ({item}) => {
    return (
        <article>
            <p>Item2</p>
            <p>{item.nombre}</p>
            <p>Precio: ${item.precio}</p>
            <p>Descripcion: {item.descripcion}</p>
        </article>
    );
    
}
