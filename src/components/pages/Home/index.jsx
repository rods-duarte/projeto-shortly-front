import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import styled from "styled-components";
import jwt_decode from "jwt-decode";

import Header from "../../Header";
import LinkItem from "../../LinkItem";

import TokenContext from "../../../contexts/tokenContext";

export default function Home() {
  const { token } = useContext(TokenContext);
  const [ url, setUrl ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ userData, setUserData ] = useState(null);

  useEffect(() => {
    const { userId } = jwt_decode(token);
    const URL = `http://localhost:4000/users/${userId}`;

    axios.get(URL, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      const user = response.data;
      setUserData(user);
      setUserName(user.name);
    }).catch(err => {
      confirmAlert({
        message: 'Sua sessao foi encerrada, faca login pra continuar',
        buttons: [
          {
            label: 'Ok',
            onClick: () => null
          }
        ]
      })
    })
  }, []);

  function createShortUrl() {
    const URL = `http://localhost:4000/urls/shorten`;

    if(!token) {
      confirmAlert({
        message: 'Faca login pra continuar',
        buttons: [
          {
            label: 'Ok',
            onClick: () => null
          }
        ]
      })
    }

    axios.post(URL,{ url }, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      setUrl('');
    }).catch(err => {
      alert('Link invalido');
    })
  }


  return (
    <HomePage>
      <Header name={userName}/>
      <form onSubmit={createShortUrl}>
        <input 
        type="text" 
        placeholder="Links que cabem no bolso" 
        value={url}
        onChange={e => {
          setUrl(e.target.value);
        }}
        />
        <button type="submit">Encurtar link</button>
      </form>
      <LinksList>
        {userData.shortenedUrls.map(urlObj => <LinkItem shortenedUrl={urlObj}></LinkItem>)}
      </LinksList>
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

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`
