import { BadgeContainer } from "./styles";

export default function AuthorBadge() {
	const link = "https://gabriel-dp.github.io/";

	return (
		<BadgeContainer>
			<a href={link} target="_blank" rel="noreferrer">
				<span>Made by</span>&nbsp;<span className="author">gabriel-dp</span>
			</a>
		</BadgeContainer>
	);
}
