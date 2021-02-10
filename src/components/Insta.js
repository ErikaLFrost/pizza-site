import React from 'react';
import styled from 'styled-components';
import { useInstagramFeed } from 'use-instagram-feed';
import '../fonts/fonts';

const InstaWrapper = styled.div`
    grid-column: span 12;
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    div{
        grid-column: span 3;
        @media(max-width: 768px) {
            grid-column: span 6;
        }
    }
    a{
    }
    img{
        width: 100%;
        height: 100%
    }
`;

const FollowUs = styled.h1`
    font-family: 'PlatonickFont';
    grid-column: span 12;
    text-align: center;
`;


const Insta = () => {
    let photos = useInstagramFeed({
        userId: "10901300886",
        thumbnailWidth: 640,
        photoCount: 4,
    })

    console.log(photos)

    return (
        <InstaWrapper>
            <FollowUs>Följ oss på Instagram {" "}
                <a href="https://www.instagram.com/lapiccolanonnapizza" target="_blank">@piccolanonna</a>{"\n"}
            </FollowUs>
            {photos &&
                photos.map(({ id, caption, src, width, height, url }) => (
                    <div key={id}>
                        <a href={url}>
                            <img src={src} alt={caption} />
                        </a>
                    </div>
                ))}
        </InstaWrapper>)
}

export default Insta;