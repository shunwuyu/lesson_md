import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../store/actions'
import { Link } from 'react-router-dom'

function Index(props) {
    const { products } = props
    const { getProductsDispatch } = props
    useEffect(() => {
        getProductsDispatch();
    }, [])
    return (
    <div className="container fl main-index">
        {products.map(product =>
            <div id={product.id} className="product-list fl" key={product.id}>
            <img src={'../../src/assets/images/'+product.src} alt=""/>
            <p>{product.price}</p>
            <Link to={'/detail/'+product.id}>{product.name}</Link>
            </div>
        )}
    </div>
    )
}
const mapStateToProps = state => ({
    products: state.products.products
})
const mapDispatchToProps = dispatch => {
    return {
        getProductsDispatch() {
            dispatch(getProducts())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)
