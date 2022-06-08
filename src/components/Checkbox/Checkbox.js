import React from 'react';
import {
	StyledCheckbox,
	CheckboxContainer,
	HiddenCheckbox,
	Icon,
} from '../../../styles/Checkbox.styled';
import useStore from '../../services/useStore';

export default function Checkbox({ state, id }) {
	const checkTask = useStore(state => state.checkTask);

	return (
		<CheckboxContainer>
			<HiddenCheckbox
				checked={state}
				onChange={() => {
					checkTask(id);
					console.log('next');
				}}
			/>
			<StyledCheckbox checked={state}>
				<Icon viewBox="0 0 24 24" checked={state}>
					<polyline points="20 6 9 17 4 12" />
				</Icon>
			</StyledCheckbox>
		</CheckboxContainer>
	);
}
