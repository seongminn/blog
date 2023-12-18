import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  45% {
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 20;
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.1s ease-out forwards;
  padding: 0 16px;
`;

export const ModalInner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 4px;

  max-width: 600px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  z-index: 30;

  animation: ${fadeIn} 0.2s ease-out forwards;
`;
