import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/styles/globalStyle";
import themeSWeather from "@/styles/themeSWeather";
import Home from "@/pages/Home";

export default function App() {
	return (
		<ThemeProvider theme={themeSWeather}>
			<GlobalStyle />
			<Home />
		</ThemeProvider>
	);
}
