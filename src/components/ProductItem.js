const ProductItem = ({ product, setCookie }) => {
	return (
		<div className="productWrapper" onClick={() => setCookie(product.image)}>
			<img alt={product.name} src={product.image} />
			<p>{product.name}</p>
			<p className="product-price">{product.price} KD</p>
		</div>
	);
};

export default ProductItem;
