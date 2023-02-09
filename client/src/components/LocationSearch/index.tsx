import { useState, useContext } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

import { DataContext, searchType } from "../../utils/dataTypes";
import getGeolocationCoords from "../../utils/getGeolocationCoords";
import CountryFlag from "../CountryFlag";

import {
	SearchContainer,
	LocalInfoContainer,
	InputContainer,
	SearchIconContainer,
	SearchInput,
	LocationButton,
} from "./styles";

interface SearchProps {
	setSearch: React.Dispatch<React.SetStateAction<searchType>>;
}

export default function LocationSearch(props: SearchProps) {
	const [input, setInput] = useState("");

	function handleInputChange(input: string) {
		setInput(input);
	}

	function handleSubmitInput(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		props.setSearch(input);
		setInput("");
	}

	async function handleGetLocation() {
		const coords = await getGeolocationCoords();
		if (coords.length === 2) props.setSearch(coords);
		else console.error("GEOLOCATION UNAVALIABLE");
	}

	const { localData } = useContext(DataContext);

	return (
		<SearchContainer>
			<LocalInfoContainer hidden={localData.status} size={4}>
				<p>{localData.name}</p>
				<CountryFlag country={localData.country} size={2} />
			</LocalInfoContainer>
			<InputContainer>
				<SearchIconContainer>
					<FaSearch />
				</SearchIconContainer>
				<form onSubmit={(event) => handleSubmitInput(event)}>
					<SearchInput
						placeholder="Search a city"
						maxLength={60}
						value={input}
						onChange={(event) => handleInputChange(event.target.value)}
					/>
				</form>
				<LocationButton onClick={() => handleGetLocation()}>
					<FaMapMarkerAlt />
				</LocationButton>
			</InputContainer>
		</SearchContainer>
	);
}
