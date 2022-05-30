import StyledCheckbox from '../../../styles/Checkbox.styled';

export default {
	title: 'components/checkbox',
};

export function Default() {
	return <StyledCheckbox task={{ done: true }} />;
}
export function checked() {
	return <StyledCheckbox task={{ done: false }} />;
}
