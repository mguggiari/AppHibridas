import { useState, useEffect } from "react"
import ProductList from "../../ProductList"

function ProductListPage(){
    const [products, setProducts] = useState([])

    
    // se ejecuta cuando se monta el componente
    useEffect(()=>{
        fetch('http://localhost:2023/api/products')
            .then(response => response.json())
            .then(data =>{
                setProducts(data) // forzar el render
            })
    }, [])

    // se ejecuta cuando modifican la lista de productos
    useEffect(()=>{

    }, [products])

    return <ProductList list={products} />

}

export default ProductListPage