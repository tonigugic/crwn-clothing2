import "./directory.styles.scss";

import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
	return categories.map((category) => {
		return <CategoryItem category={category} key={category.id} />;
	});
};

export default Directory;
