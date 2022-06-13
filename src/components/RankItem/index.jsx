import styled from "styled-components";

export default function RankItem({rankData, place}) {
    let css;
    if (place === 1) css = 'first';
    else if (place === 2) css = 'second';
    else if (place === 3) css = 'third';

    return (
        <Rank className={css}>
            {`${place}. ${rankData.name} - ${rankData.linksCount} links - ${rankData.visitCount} visualizacoes`}
        </Rank>
    )
}

const Rank = styled.li`
    width: 100%;
    font-size: 22px;
    font-weight: 500;

    &.first {
        color: #daa520;
    }

    &.second {
        color: #c0c0c0;
    }

    &.third {
        color:#cd7f32;
    }
`
