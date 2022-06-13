import styled from "styled-components";

export default function RankItem({rankData, place}) {
    console.log(rankData);

    return (
        <Rank>
            {`${place}. ${rankData.name} - ${rankData.linksCount} links - ${rankData.visitCount} visualizacoes`}
        </Rank>
    )
}

const Rank = styled.li`
    width: 100%;
    font-size: 22px;
    font-weight: 500;
`
