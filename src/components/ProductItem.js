import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
	return (
		<div className="productWrapper">
			<Link to={`/ProductList/${product.slug}`}>
				<img alt={product.name} src={product.image} />
				<p>{product.name}</p>
				<p className="product-price">{product.price} KD</p>
			</Link>
		</div>
	);
};

export default ProductItem;
