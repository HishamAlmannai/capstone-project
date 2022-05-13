 import GlobalStyle from "../styles/GlobalStyle";

export const decorators = [
	(Story) => (
		<>
			<GlobalStyle />
			<Story />
		</>
	),
];
