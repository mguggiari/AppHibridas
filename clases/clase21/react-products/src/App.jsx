import ProductListItem from "./ProductListItem"
import 'minireset.css'
import './App.css'

const PRODUCTOS = [
    {
        id: 1, 
        name: "Cafe Expreso",
        price: 450
    },
    {
        id: 2, 
        name: "Cafe Americano",
        price: 350
    },
    {
        id: 3, 
        name: "Cafe Moca",
        price: 480
    },
    {
        id: 4,
        name: "Cafe con leche",
        price: 350
    }
]


function App(){
    return (
        <div>
            <h1>Productos</h1>
            <p>El mejor caje a un click de distancia!</p>
            <ul>
                {/* map es una expresion que devuelve un array, con la misma cantidad de elementos que el array que le estes pasando, pero por cada elemento lo transforma, a lo que vos "queres". 
                En este caso, le estamos diciendo que a cada uno de los productos lo transforme en un <ProductListItem />.
                Esto alfinal termina generando un array de componentes. 
                Por lo tanto lo podemos "dibujar" y ver en el html. 
                la propiedad key es necesaria para poder identificar cual elemento de la lista puede ser cambiado, y no tiene que forzar a renderizar todos los elementos devuelta.*/}
                {PRODUCTOS.map(product => <ProductListItem key={product.id} product={product} />)}
            </ul>
        </div>
    )
}

export default App