import { useContext } from "react";

import { DataContext } from "@/utils/dataTypes";
import CloudSvg from "@/assets/cloud.svg";

import { CloudContainer } from "./styles";

export default function Cloud() {
	const data = useContext(DataContext).intervalData;

	let size = 0;
	if (!data.status) size = 100;
	else {
		const { cloudCover } = data.interval.values;
		if (cloudCover > 80) {
			size = 100;
		} else if (cloudCover > 10) {
			size = 50 + 0.375 * cloudCover;
		}
	}

	return (
		<CloudContainer size={size}>
			<CloudSvg />
		</CloudContainer>
	);
}
