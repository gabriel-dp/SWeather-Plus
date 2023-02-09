import { useState, useContext } from "react";

import { DataContext } from "../../utils/dataTypes";

import { SearchContainer, LocalInfoContainer, InputContainer, SearchInput } from "./styles";

interface SearchProps {
	setCitySearch: React.Dispatch<React.SetStateAction<string | [number, number]>>;
}

export default function LocationSearch(props: SearchProps) {
	const [input, setInput] = useState("");

	function handleInputChange(input: string) {
		setInput(input);
	}

	function handleSubmitInput(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		props.setCitySearch(input);
		setInput("");
	}

	const { localData } = useContext(DataContext);

	return (
		<SearchContainer>
			<LocalInfoContainer>
				<p>{localData.name}</p>
				<span>{localData.country}</span>
			</LocalInfoContainer>
			<InputContainer>
				<form onSubmit={(event) => handleSubmitInput(event)}>
					<SearchInput
						placeholder="Search a city by name"
						maxLength={60}
						value={input}
						onChange={(event) => handleInputChange(event.target.value)}
					/>
				</form>
			</InputContainer>
		</SearchContainer>
	);
}
