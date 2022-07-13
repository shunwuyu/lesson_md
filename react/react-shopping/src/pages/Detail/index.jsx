import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router'
import { connect } from 'react-redux'
import { getProductDetail } from '../../store/actions'
import { Breadcrumb } from 'antd'

function Detail(props) {
  const { product } = props
  const { getProductDetailDispatch } = props
  const { id } = useParams();
  const navigate = useNavigate()
  if (!id) {
    navigate(-1)
    return
  }
  useEffect(() => {
    getProductDetailDispatch(id)
  }, [])
  console.log(product, '/////')
  return (
    <div className="detail fl">
      <div className="detail-header">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="detail-content clear">
        <div className="fl">
          {/* <img src={'../images/'+product.src} alt=""/> */}
        </div>
        <div className="fl content-right">
          <div className="name">
            {product.name}
          </div>
          <div className="mashu">
            码数:
            {product.mashu.map(num =>
              <span className="num" key={num+'1'}>{num}</span>
            )}
          </div>
          <div className="toggle">
            {/* {Addtoggle} */}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  product: state.products.curProduct
})

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetailDispatch(id) {
      dispatch(getProductDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)