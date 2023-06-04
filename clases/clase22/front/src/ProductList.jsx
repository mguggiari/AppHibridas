import PropTypes from 'prop-types'
import ProductListItem from "./ProductListItem"
import './ProductList.css'
import { useEffect, useState } from 'react'


function ProductList({list}){
    const [products, setProducts] = useState(list)

    const onChangeFilter = (event) =>{
        const filterText = event.target.value.toLowerCase()
        const listFilter = list.filter(product => product.name.toLowerCase().includes(filterText))
        setProducts(listFilter)
    }

    useEffect(()=>{
        setProducts(list)
    }, [list])

    return (
        <div className='product-list'>
            <form className='product-list__form'>
                Filtro: <input id='filtro' className='product-list__filter' type='text' onChange={onChangeFilter} />
            </form>
            <ul className='product-list__list'>
                {products.map(product => <ProductListItem key={product._id} product={product}/>)}
            </ul>
        </div>
    )
}

ProductList.propTypes = {
    list: PropTypes.array.isRequired
}

export default ProductList