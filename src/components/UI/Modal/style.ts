import styled from 'styled-components';

type ModalContentProps = {
  width?: string;
};

export const ModalStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentStyle = styled.div<ModalContentProps>`
  width: ${props => props.width || 'fit-content'};
  min-height: 300px;
  min-width: 375px;
  background-color: ${p => p.theme.colors.general.grey};
  border-radius: 32px;
  padding: 20px;
  position: relative;

  .title {
    border-bottom: 1px solid ${p => p.theme.colors.general.grey};
    text-align: center;
    margin-bottom: 30px;
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
  }
`;
