import styled from 'styled-components';

export const SendMessageFormWrapper = styled.div`
  background: #1b1b1f;
  padding: 24px;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;
`;

export const SignOutButton = styled.button`
  background: transparent;
  border: 0;
  color: #c4c4cc;

  position: absolute;
  left: 24px;
  top: 24px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const UserInformation = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImage = styled.div`
  padding: 3px;
  background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);
  border-radius: 50%;
  line-height: 0;

  img {
    width: 9.4rem;
    height: 9.4rem;
    border-radius: 50%;
    border: 6px solid #121214;
  }
`;

export const UserName = styled.strong`
  font-size: 2.4rem;
  line-height: 3rem;
  margin-top: 16px;
`;

export const UserGithub = styled.strong`
  display: flex;
  align-items: center;

  margin-top: 8px;
  color: #c4c4cc;

  svg {
    margin-right: 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;

  background: #202024;

  label {
    padding: 18px 24px;
    font-size: 2rem;
    background: #29292e;
    font-weight: bold;
    text-align: left;
  }

  textarea {
    background: transparent;
    border: 0;
    padding: 24px;
    resize: none;
    height: 160px;
    color: #e1e1e6;
    font-size: 1.6rem;
    line-height: 2.4rem;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #8d8d99;
    }
  }

  button {
    align-self: flex-end;
    background: #ff008e;
    margin: 24px;
    border: 0;
    padding: 0 32px;
    cursor: pointer;
    height: 40px;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
