import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import TokenContext from '../../contexts/tokenContext';
import UserContext from '../../contexts/userContext';

import logo from '../../assets/images/Logo.svg';

export default function Header({active}) {
  const { token, setToken } = useContext(TokenContext);
  const { user, setUser } = useContext(UserContext);

  function Logout() {
    setToken(null);
    setUser(null);
  }

  const message = user?.name ? `Seja bem vindo ${user.name} !` : '';
  const options = user?.name ? (
    <Options>
      <button type="button"><Link to="/home">Home</Link></button>
      <button type="button"><Link to="/">Ranking</Link></button>
      <button type="button" onClick={Logout} className='logout'><Link to="/">Sair</Link></button>
    </Options>) : (
    <Options>
      <button type="button"><Link to="/signin" className={active === 'signin' ? 'active' : undefined}>Entrar</Link></button>
      <button type="button"><Link to="/signup" className={active === 'signup' ? 'active' : undefined}>Cadastre-se</Link></button>
    </Options>
  )

  return (
    <HeaderContainer>
      <Navbar>
        <Welcome>
          {message}
        </Welcome>

        <Options>
          {options}
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

  a {
    text-decoration: none;
    color: #9c9c9c;
  }

  .active {
    color: #5D9040;
  }

  .logtout {
    text-decoration: underline;
  }
`;
