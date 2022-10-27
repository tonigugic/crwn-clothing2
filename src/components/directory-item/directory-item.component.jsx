import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<DirectoryItemContainer to={`shop/${title}`}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
