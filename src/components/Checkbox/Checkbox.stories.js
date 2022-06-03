import { StyledCheckbox } from '../../../styles/Input.styled';

export default {
	title: 'components/checkbox',
};

export function Default() {
	return <StyledCheckbox task={{ done: true }} />;
}
export function checked() {
	return <StyledCheckbox task={{ done: false }} />;
}
export function old() {
	return <checkbox checked />;
}
