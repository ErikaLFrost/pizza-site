import React from 'react';
import styled from 'styled-components';
import { useInstagramFeed } from 'use-instagram-feed';

const InstaWrapper = styled.div`
    grid-column: span 12;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    img{
        width: 24vw;
    }
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
                {photos &&
                    photos.map(({ id, caption, src, width, height, url }) => (
                        <a key={id} href={url}>
                            <img src={src} alt={caption} />
                        </a>
                    ))}
        </InstaWrapper>)
}

export default Insta;