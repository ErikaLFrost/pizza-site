import styled from "styled-components";
import "../fonts/fonts";

const StickyMenu = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #f8e3e3;
  z-index: 9001;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  p {
    margin: 0;
    text-align: center;
    padding: 6px 0;
    font-size: 24px;
    &.first-type{
      margin-right: 5px;
    }
    
    a {
      color: black;
      text-decoration: none;
      transition: color ease-in-out 200ms;
    }
    @media (max-width: 411px ) {
      &.first-type{
        margin-right: 0;
        padding-bottom: 0;
      }
      &.last-type{
      padding-top: 0;
    }
    }
  }
`;

const Sticky = () => {
  return (
    <StickyMenu>
      <p className="first-type">
        Take Away - <a href="tel:+4673-234-74-55">073 234 74 55 </a> {' '}
      </p>
      <p className="last-type">(ej via sms)</p>
    </StickyMenu>
  );
};

export default Sticky;
