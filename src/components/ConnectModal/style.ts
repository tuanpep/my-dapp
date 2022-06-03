import styled from 'styled-components';

export const ConnectModalStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
`;

export const WalletItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 200px;

  &:hover {
    background-color: rgba(242, 242, 242, 0.2);
    cursor: pointer;
    border-radius: 20px;
    transition: background-color 0.3s ease-in-out;
  }
`;
