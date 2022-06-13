import styled from 'styled-components';

import deleteIcon from '../../assets/images/delete.svg';

export default function LinkItem({ shortenedUrl }) {

    function addToClipboard(shortUrl) {
        const URL = `http://localhost:4000/urls/open/${shortUrl}`
        navigator.clipboard.writeText(URL);
    }

    const { shortUrl, url, visitCount } = shortenedUrl;
    return (
    <Link>
        <Data title='Copy link' onClick={() => addToClipboard(shortenedUrl.shortUrl)}>
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
            <img src={deleteIcon} alt="Delete" />
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

    :hover {
        background-color: #63ad58;
        transition: all .25s ease-in;
    }
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
        color: black;
        width: 22px;
    }
    
    :hover {
        background-color: #f3f3f3;
        transition: all .25s ease-in;
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