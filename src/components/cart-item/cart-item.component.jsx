import { CartItemDetails, CartItemContainer } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={name} />

			<CartItemDetails>
				<span className="name">{name}</span>
				<span className="price">
					{quantity} * ${price}
				</span>
			</CartItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
