import styled from 'styled-components';

import logo from '../../assets/images/Logo.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <Welcome>Seja Bem Vindo Pessoa !</Welcome>

        <Options>
          <button type="button">Home</button>
          <button type="button">Ranking</button>
          <button type="button">Sair</button>
        </Options>
      </Navbar>
      <LogoContainer>
        <img src={logo} alt="" />
      </LogoContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  margin-top: 30px;
  margin-bottom: 100px;
  position: sticky;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = styled.nav`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Welcome = styled.div`
  color: #5d9040;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Options = styled.div`
  display: flex;

  button {
    border: none;
    background-color: #0000;
    color: #9c9c9c;
  }
`;
