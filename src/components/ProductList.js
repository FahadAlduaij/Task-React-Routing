import { useState } from "react";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

const ProductList = () => {
	const [query, setQuery] = useState("");
	const [cookie, setCookie] = useState(
		products.filter((x) => x.id === 1).map((x) => x.image)
	);

	const productList = products
		.filter((product) =>
			product.name.toLowerCase().includes(query.toLowerCase())
		)
		.map((product) => (
			<ProductItem key={product.id} product={product} setCookie={setCookie} />
		));

	return (
		<>
			<SearchBar setQuery={setQuery} />
			<div className="listWrapper">{productList}</div>
			<footer>
				<img className="footer" src={cookie} />
			</footer>
		</>
	);
};

export default ProductList;
