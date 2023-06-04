import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ProductListItem.css'


function ProductListItem({product}){
    return (
        <li className='product-list-item' >
            <img className='product-list-item__image' src={`https://picsum.photos/200/200?random=${product._id}`} />
            <div className='product-list-item__details'>
                <h3 className='product-list-item__name'>{product.name} <span className='product-list-item__code'>#{product._id}</span></h3>
                <p className='product-list-item__price'>Precio ${product.price}</p>
                <div className='product-list-item__actions'>
                    <Link className='product-list-item__view' to={`/products/${product._id}`}>Ver producto</Link>
                </div>
            </div>
        </li>
    )
}

ProductListItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductListItem