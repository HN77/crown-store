import Button from '../Button/Button';
import './productCard.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">$ {price}</span>
            </div>
            <Button buttonType="inverted">Add To Card</Button>
        </div>
    );
};

export default ProductCard;
