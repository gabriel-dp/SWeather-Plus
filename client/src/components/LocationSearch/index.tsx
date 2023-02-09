import { useState } from "react";

import { SearchContainer, InputContainer, SearchInput } from "./styles";

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
	}

	return (
		<SearchContainer>
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
