import ProductCard from "../product-card/product-card.component";

import {
	CategoryPreviewList,
	CategoryTitle,
	CategoryPreviewContainer,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
			</h2>
			<CategoryPreviewList>
				{products
					.filter((_, idx) => {
						return idx < 4;
					})
					.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})}
			</CategoryPreviewList>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
