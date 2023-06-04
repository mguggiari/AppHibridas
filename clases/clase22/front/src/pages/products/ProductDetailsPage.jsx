import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ProductDetailsPage(){
    const [product, setProduct ] = useState({})
    const {idProduct} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:2023/api/products/${idProduct}`)
            .then(response => response.json())
            .then(data =>{
                setProduct(data) // forzar el render
            })
    }, [idProduct])

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetailsPage