import './ProductCard.css'
import plusIcon from '../assets/icons/plus.svg'

export default function ProductCard(props) {
  const product = props.product
  const imagePath = `/images/products/${product.image}`
  
  return (
    <div className="product-card">
      <img className="product-card__image" src={imagePath} />
      <hr className="product-card__divider" />
      <div className="product-card__top-row">
        <a className="product-card__name">{product.name}</a>
        <button className="product-card__button">
          <img src={plusIcon} className="product-card__plus"/>
        </button>
      </div>
      <div className="product-card__bottom-row">
        <p className="product-card__volume">{product.volume} мл</p>
        <p className="product-card__price">{product.price} р</p>
      </div>
      <hr className="product-card__divider" />
    </div>
  )
}