import { format } from 'date-fns';
import React, { useState } from 'react';
import { StyledCard } from '../../../styles/Card.styled';
import Checkbox from '../Checkbox/Checkbox';
import StyledListItem from '../../../styles/ListItem.styled';
import useStore from '../../services/useStore';
import Button from '../Button/Button';
import Form from '../Form/Form';
import { StyledDiv } from '../../../styles/Div.styled';
import { StyledSpan } from '../../../styles/Span.styled';

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

	const formatDueDate = format(new Date(dueDate), 'dd/MM/yyyy');

	return (
		<StyledListItem role="listitem">
			<StyledCard className={expandedMode && 'accordion'}>
				{editMode ? (
					<>
						<StyledDiv editMode className="task">
							<Checkbox state={done} id={id} />
							<Form
								editMode
								handleSubmit={hasSubmit}
								id={id}
								exitEditMode={exitEditMode}
							/>
						</StyledDiv>
						<StyledDiv className="edit">
							<Button
								type="submit"
								name="save"
								class="edit"
								form={id}
								onClick={() => setHasSubmit(true)}
							>
								Save
							</Button>
							<Button
								name="delete"
								class="edit"
								onClick={() => {
									deleteTask(id);
								}}
							>
								Delete
							</Button>
						</StyledDiv>
					</>
				) : (
					<>
						<StyledDiv className="task">
							<Checkbox state={done} id={id} />
							<StyledSpan
								className={expandedMode ? 'accordion' : 'task'}
								onClick={() => {
									setExpandedMode(!expandedMode);
								}}
							>
								{name}
							</StyledSpan>

							<StyledSpan className="dueDate">{formatDueDate}</StyledSpan>
						</StyledDiv>
						{!expandedMode && (
							<StyledDiv className="edit">
								<Button
									name="edit"
									class="edit"
									onClick={() => {
										setEditMode(true);
									}}
								>
									Edit
								</Button>
								<Button
									name="delete"
									class="edit"
									onClick={() => {
										deleteTask(id);
									}}
								>
									Delete
								</Button>
							</StyledDiv>
						)}
					</>
				)}
			</StyledCard>
		</StyledListItem>
	);
}
