import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "../../Header";
import RankItem from "../../RankItem";

import UserContext from "../../../contexts/userContext";

import trophyIcon from "../../../assets/images/trophy.svg";

export default function Ranking() {
    const { user } = useContext(UserContext);
    const [ rankList, setRankList ] = useState(null); 

    useEffect(() => {
        const URL = `http://localhost:4000/ranking`
        axios.get(URL).then(response => {
            const { data } = response;
            setRankList(data);
        })
    }, []);

    const rankListContent = rankList?.map((rank, index) => <RankItem rankData={rank} place={index + 1}></RankItem>)
    const footerContent = !user ? <Link to='/signup'>Crie sua conta para usar nosso servico !</Link> : undefined;

    return (
        <RankingPage>
            <Header active="signin"/>
            <Title>
                <img src={trophyIcon} alt="Trofeu" />
                <h1>Ranking</h1>
            </Title>
            <RankingList>
                {rankListContent}
            </RankingList>
            <Footer>
                <Link to={'/signup'}>{footerContent}</Link>
            </Footer>
        </RankingPage>
    )
}

const RankingPage = styled.main`
    width: 80%;
    min-height: 100vh;
    margin: 0 auto;
`

const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    margin-bottom: 20px;

    img {
        width: 56px;
    }

    h1 {
        font-size: 36px;
        font-weight: 700;
    }
`
const RankingList = styled.ul`
    width: 100%;
    min-height: 300px;
    padding: 15px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    row-gap: 20px;

    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
`

const Footer = styled.footer`
    margin-bottom: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
    font-weight: 700;

    a {
        text-decoration: none;
        color: #000;
    }

    a:hover {
        color: #3b3b3b;
        transition: all .25s ease-in;
    }
`