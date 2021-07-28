import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { fadeIn } from './components/styled';

const StyledButton = styled.button`
	padding: 1rem;
	font-size: 1.4rem;
	animation: 2s ${fadeIn} ease-in;

	/* nested interpolation/params (custom params) */
	${({ primary }) =>
		primary &&
		css`
			color: red;
		`}
`;

/* styled components can be extended  */
const SuperButton = styled(StyledButton)`
	margin-top: 10px;
`;

export const Buttons = (props) => {
	const { children, primary } = props;

	return (
		<>
			<StyledButton primary={primary}>{children}</StyledButton>
			<SuperButton>{children}</SuperButton>
		</>
	);
};
