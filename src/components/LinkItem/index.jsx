import styled from 'styled-components';

import deleteIcon from '../../assets/images/delete.svg';

export default function LinkItem({ shortenedUrl }) {
    const { shortUrl, url, visitCount } = shortenedUrl;
    return (
    <Link>
        <Data>
            <Url>
                {url}
            </Url>
            <ShortUrl>
                {shortUrl}
            </ShortUrl>
            <Visits>
                {`Quantidade de visitas: ${visitCount}`}
            </Visits>
        </Data> 
        <DeleteBtn>
            <img src={deleteIcon} alt="" />
        </DeleteBtn>
    </Link>
    )
}

const Link = styled.li`
    width: 100%;
    height: 60px;

    display: flex;
    row-gap: 15px;

    color: #fff;
`

const Data = styled.div`
    width: 85%;
    padding: 0 20px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    background-color: #80CC74;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DeleteBtn = styled.button`
    width: 15%;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    background-color: #fff;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        color: #EA4F4F;
        width: 22px;
    }
`

const Url = styled.div`
    width: 50%;
`

const ShortUrl = styled.div`
    width: 20%;
`

const Visits = styled.div`
    width: 30%;
    text-align: right;
`