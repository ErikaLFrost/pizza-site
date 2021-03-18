import { useState, useEffect } from 'react';

const useInstaAPI = (apiToken) => {

    const [instaFeed, setInstaFeed] = useState();

    useEffect(() => {
        let url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,thumbnail_url&&access_token=${apiToken}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                if (data.hasOwnProperty('error')) {
                    console.log('error');

                } else {
                    setInstaFeed(data.data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [apiToken]);
    return instaFeed
}

export default useInstaAPI;