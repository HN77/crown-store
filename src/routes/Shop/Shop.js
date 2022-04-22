import './shop.scss';
import { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductsContext } from '../../contexts/product.context';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="shop-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;
