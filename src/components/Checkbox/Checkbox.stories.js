import {
	CheckboxContainer,
	HiddenCheckbox,
	Icon,
	StyledCheckbox,
} from '../../../styles/Checkbox.styled';
import { useState } from 'react';

export default {
	title: 'components/checkbox',
};

export function Default() {
	const [stateValue, setStateValue] = useState(true);

	return (
		<CheckboxContainer>
			<HiddenCheckbox
				checked={stateValue}
				onChange={() => {
					setStateValue(!stateValue);
				}}
			/>
			<StyledCheckbox checked={stateValue}>
				<Icon viewBox="0 0 24 24" checked={stateValue}>
					<polyline points="20 6 9 17 4 12" />
				</Icon>
			</StyledCheckbox>
		</CheckboxContainer>
	);
}
