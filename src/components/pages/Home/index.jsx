import styled from 'styled-components';

import Header from '../../Header';

export default function Home() {
  return (
    <HomePage>
      <Header />
      <form action="">
        <input type="text" placeholder="Links que cabem no bolso" />
        <button type="submit">Encurtar link</button>
      </form>
    </HomePage>
  );
}

const HomePage = styled.main`
  width: 80%;
  height: 100vh;
  margin: 0 auto;

  form {
    display: flex;
    justify-content: space-between;
    height: 60px;

    input {
      width: 75%;
      border-radius: 12px;
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border: 1px solid rgba(120, 177, 89, 0.25);
      color: #9c9c9c;
      padding-left: 15px;
    }

    button {
      width: 20%;
      background-color: #5d9040;
      color: #fff;
      border-radius: 12px;
      border: none;
      font-weight: 700;
    }
  }
`;
