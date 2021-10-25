import styled from 'styled-components';

export const MessageListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-start;

  > img {
    height: 2.8rem;
    margin: 32px 0;
  }
`;

export const MessageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  flex: 1.5rem;
`;

export const Message = styled.li`
  max-width: 440px;

  &:nth-child(2) {
    margin-left: 8rem;
  }
`;

export const MessageContent = styled.p`
  font-size: 2rem;
  line-height: 2.8rem;
`;

export const MessageUser = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;

  span {
    font-size: 1.6rem;
    margin-left: 1.2rem;
  }
`;

export const UserImg = styled.div`
  padding: 2px;
  background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);
  border-radius: 50%;
  line-height: 0;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 4px solid #121214;
  }
`;
