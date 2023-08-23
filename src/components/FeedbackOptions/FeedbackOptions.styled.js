import styled from 'styled-components';

export const Button = styled.button`
  margin: 5px;
  width: calc((100% - 30px) / 3);
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  color: #fce803;
  font-weight: 500;
  font-size: 18px;
  background: #d93bd6;

  &:hover {
    background-color: initial;
    color: #4e0963;
  }
`;
