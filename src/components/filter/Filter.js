import { useContext, useEffect } from "react";

import { FilterContext } from "../../context/FilterContext";

import { Container, Text, ButtonsContainer, Label } from './filterStyle';

const Filter = () =>
{
	const [filter, setFilter] = useContext(FilterContext);

	const handleFilters = event =>
	{

		let { name, value } = event.target;
		const newData = { ...filter, [name]: value };
		const oldActiveFilterButton = document.querySelector('.active');

		oldActiveFilterButton.classList.remove('active');

		event.target.parentNode.classList.add("active");

		setFilter(newData);
	}

	useEffect(() =>
	{
		const oldActiveFilterButton = document.querySelector(`#${filter.price}`);

		oldActiveFilterButton.parentNode.classList.add('active');
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container>
			<Text>Sort by:</Text>
			<ButtonsContainer>
				<Label>
					<input
						className="for-check"
						type="radio"
						name="price"
						id="all"
						value="all"
						onChange={handleFilters}
					/>
					Most recent
				</Label>

				<Label>
					<input
						className="for-check"
						type="radio"
						name="price"
						id="low"
						value="low"
						onChange={handleFilters}
					/>
					Lowest price
				</Label>

				<Label>
					<input
						className="for-check"
						type="radio"
						name="price"
						id="high"
						value="high"
						onChange={handleFilters}
					/>
					Highest Price
				</Label>
			</ButtonsContainer>
		</Container>
	);
};

export default Filter;
