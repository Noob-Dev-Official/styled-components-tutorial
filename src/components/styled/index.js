import Styled, { keyframes } from 'styled-components';

export const Wrapper = Styled.div`
	margin: 20px 120px;
`;

export const fadeIn = keyframes`
   0% {
      opacity: 0;
   }

   100% {
      opacity: 1;
   }
`;
