import styled from '@emotion/styled';

export const Button = styled.button`
  border-radius: 10%;

  &:hover {
    color: red;
    border-color: red;
    background-color: black;
  }
  &:focus {
    color: red;
    border-color: red;
    background-color: black;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
