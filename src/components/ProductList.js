import { useState } from "react";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

const ProductList = () => {
	const [query, setQuery] = useState("");

	const productList = products
		.filter((product) =>
			product.name.toLowerCase().includes(query.toLowerCase())
		)
		.map((product) => <ProductItem key={product.id} product={product} />);

	return (
		<>
			<SearchBar setQuery={setQuery} />
			<div className="listWrapper">{productList}</div>
		</>
	);
};

export default ProductList;
