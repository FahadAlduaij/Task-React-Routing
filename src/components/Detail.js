import React from "react";
import { Redirect, useParams } from "react-router-dom";
import products from "../products";




function Detail() {
	const slug = useParams().productSlug;
	const cookie = products.find((x) => x.slug === slug);
	if (!cookie) return <Redirect to="/" />;
	return (
		<div className="detail">
			<h5>{cookie.name}</h5>
			<img src={cookie.image} alt="cookie" />
			<p>{cookie.price} KD</p>
			<p>{cookie.description}</p>
		</div>
	);
}

export default Detail;
