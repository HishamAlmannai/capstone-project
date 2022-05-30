import { format } from 'date-fns';
import React, { useState } from 'react';
import { StyledCheckbox } from '../../../styles/Input.styled';
import StyledListItem from '../../../styles/ListItem.styled';
import useStore from '../../services/useStore';
import Button from '../Button/Button';
import Form from '../Form/Form';

export default function Task(props) {
	const {
		task: { id, name, done, dueDate },
	} = props;

	const deleteTask = useStore(state => state.deleteTask);
	const [editMode, setEditMode] = useState('');
	const [expandedMode, setExpandedMode] = useState(true);
	const [hasSubmit, setHasSubmit] = useState(false);
	const exitEditMode = () => {
		setEditMode(false);
		setHasSubmit(false);
	};
	const checkTask = useStore(state => state.checkTask);

	const formatDueDate = format(new Date(dueDate), 'dd/MM/yyyy');

	return (
		<StyledListItem role="listitem">
			<article className={expandedMode && 'accordion'}>
				{editMode ? (
					<>
						<div className="task">
							<StyledCheckbox
								type="checkbox"
								name="checkbox"
								checked={done}
								onChange={() => {
									checkTask(id);
								}}
							/>
							<Form
								editMode
								handleSubmit={hasSubmit}
								id={id}
								exitEditMode={exitEditMode}
							/>
						</div>
						<div className="edit">
							<Button
								type="submit"
								name="save"
								form={id}
								onClick={() => setHasSubmit(true)}
							>
								Save
							</Button>
							<Button
								name="delete"
								onClick={() => {
									deleteTask(id);
								}}
							>
								Delete
							</Button>
						</div>
					</>
				) : (
					<>
						<div className="task">
							<StyledCheckbox
								type="checkbox"
								name="checkbox"
								checked={done}
								onChange={() => {
									checkTask(id);
								}}
							/>
							<span
								className={expandedMode ? 'accordion' : 'task'}
								onClick={() => {
									setExpandedMode(!expandedMode);
								}}
							>
								{name}
							</span>

							<span className="dueDate">{formatDueDate}</span>
						</div>
						{!expandedMode && (
							<div className="edit">
								<Button
									name="edit"
									onClick={() => {
										setEditMode(true);
									}}
								>
									Edit
								</Button>
								<Button
									name="delete"
									onClick={() => {
										deleteTask(id);
									}}
								>
									Delete
								</Button>
							</div>
						)}
					</>
				)}
			</article>
		</StyledListItem>
	);
}
