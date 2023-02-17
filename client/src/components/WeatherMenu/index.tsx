import { useState, useContext, useRef } from "react";
import { FaSearch, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

import { DataContext, searchType, unitsSystemType } from "@/utils/dataTypes";
import getGeolocationCoords from "@/utils/getGeolocationCoords";
import CountryFlag from "@/components/CountryFlag";

import {
	SearchContainer,
	LocalInfoContainer,
	InputContainer,
	SearchIconContainer,
	SearchInput,
	LocationButton,
	OptionsContainer,
} from "./styles";

interface SearchProps {
	setSearch: React.Dispatch<React.SetStateAction<searchType>>;
	unitsSystem: unitsSystemType;
	setUnitSystem: React.Dispatch<React.SetStateAction<unitsSystemType>>;
}

export default function WeatherMenu(props: SearchProps) {
	const [input, setInput] = useState("");
	const [selectedUnitsSystem, setSelectedUnitsSystem] = useState<unitsSystemType>("metric");
	const inputRef = useRef<HTMLInputElement>(null);

	function handleChangeUnitsSystem(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.value as unitsSystemType;
		setSelectedUnitsSystem(value);
	}

	function handleInputChange(input: string) {
		setInput(input);
	}

	async function handleButtonClick() {
		props.setUnitSystem(selectedUnitsSystem);
		if (input === "") {
			const coords = await getGeolocationCoords();
			if (coords.length === 2) {
				props.setSearch(coords);
			} else {
				console.error("GEOLOCATION UNAVALIABLE");
				return;
			}
		} else {
			props.setSearch(input);
			setInput("");
		}
	}

	function handleSubmitInput(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		props.setUnitSystem(selectedUnitsSystem);
		props.setSearch(input);
		setInput("");
		inputRef.current?.blur(); // Hides keyboard after submit
	}

	const { localData } = useContext(DataContext);

	return (
		<SearchContainer>
			<LocalInfoContainer hidden={!localData.status} size={4}>
				<div className="city">
					<p>{localData.name}</p>
				</div>
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
						ref={inputRef}
					/>
				</form>
				<LocationButton onClick={() => handleButtonClick()}>
					{input === "" ? <FaMapMarkerAlt /> : <FaChevronRight />}
				</LocationButton>
			</InputContainer>
			<OptionsContainer hidden={props.unitsSystem !== null} size={1.5}>
				<div className="units">
					<div>
						<input
							type="radio"
							id="metric"
							name="unit"
							checked={selectedUnitsSystem === "metric"}
							value="metric"
							onChange={(e) => handleChangeUnitsSystem(e)}
						></input>
						<label htmlFor="metric">(ºC | m/s)</label>
					</div>
					<div>
						<input
							type="radio"
							id="imperial"
							name="unit"
							checked={selectedUnitsSystem === "imperial"}
							value="imperial"
							onChange={(e) => handleChangeUnitsSystem(e)}
						></input>
						<label htmlFor="imperial">(ºF | mph)</label>
					</div>
				</div>
			</OptionsContainer>
		</SearchContainer>
	);
}
