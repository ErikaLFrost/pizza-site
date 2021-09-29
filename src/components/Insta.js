import styled from "styled-components";
import "../fonts/fonts";
import useInstaAPI from "../utils/useInstaAPI";

const InstaWrapper = styled.div`
  grid-column: span 12;
  align-items: center;
  justify-content: center;
  background-color: #f9e3e4;
  padding-bottom: 32px;
  margin: 0 auto;

  a {
    color: black;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const FollowUs = styled.h3`
  display: table;
  margin: 0 auto;
  font-family: "Raleway";
  grid-column: span 12;
  text-align: center;
  font-size: 32px;
  padding: 20px;

  a {
    transition: color ease-in-out 200ms;
    color: black;
  }

  :hover {
    a {
      filter: drop-shadow(0px 0px 1px white);
      color: #f29699;
    }
  }
`;

const InstaGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  div {
    grid-column: span 2;
    position: relative;
    ::before {
      content: "";
      padding-bottom: 100%;
      display: block;
    }
    :hover {
      opacity: 0.5;
    }
    @media (max-width: 1000px) {
      grid-column: span 4;
    }
    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Insta = () => {
  const instaFeed = useInstaAPI(process.env.REACT_APP_API_TOKEN);
  return (
    <InstaWrapper>
      <FollowUs>
        <a
          href="https://www.instagram.com/lapiccolanonnapizza"
          target="_blank"
          rel="noreferrer"
          title="Link to Instagram"
        >
          @lapiccolanonnapizza
        </a>
        {"\n"}
      </FollowUs>
      <InstaGridWrapper>
        {instaFeed &&
          instaFeed.slice(0, 6).map((instaObject, i) => (
            <div key={i}>
              <a href={instaObject.permalink} target="_blank" rel="noreferrer">
                <img
                  src={
                    instaObject.media_type === "VIDEO"
                      ? instaObject.thumbnail_url
                      : instaObject.media_url
                  }
                  alt=""
                />
              </a>
            </div>
          ))}
      </InstaGridWrapper>
      {/* <StyledInstaFeed token={process.env.REACT_APP_API_TOKEN} counter="6" /> */}
    </InstaWrapper>
  );
};

export default Insta;
