import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  from  { opacity: 0; }
  0%    { opacity: 1; }
  3%    { opacity: 0.4; }
  6%    { opacity: 1; }
  7%    { opacity: 0.4; }
  8%    { opacity: 1; }
  9%    { opacity: 0.4; }
  10%   { opacity: 1; }
  89%   { opacity: 1; }
  90%   { opacity: 0.4; }
  100%  { opacity: 0.4; }
  to    { opacity: 1; }
`;

const Bolt = styled.div`
    position: absolute;
    width: 100px;
    height: auto;
    bottom: -25vh;
    left: ${props => props.left ? props.left : ''};
    right: ${props => props.right ? props.right : ''};

    svg {
      transform: ${props => props.scale ? props.scale : 'scale(0,0)'};
      animation: ${flicker} ${props => props.seconds ? props.seconds : '4s'} linear infinite;
      filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.76));

      g {
          fill: white;
      }
    }
`;

const BoltImg = ({ left, right , scale, seconds }) => {
    return (
        <Bolt left={left} right={right} scale={scale} seconds={seconds}>
            <svg viewBox="0 0 512 512">
                <g>
                    <g>
                        <path d="M430.225,231.603L366.215,29.265C361.055,12.972,343.687,0,326.666,0H203.858c-9.439,0-17.684,4.141-22.626,10.99
                            c-4.953,6.881-6.083,16.099-3.085,25.115c0,0,0.011,0.053,0.011,0.058l30.392,91.197c0.706,2.123,0.706,3.779,0.011,4.751
                            c-0.706,0.977-2.466,1.363-4.692,1.363H103.828c-10.308,0-18.238,4.358-21.746,11.593c-3.508,7.229-1.879,16.11,4.486,24.186
                            L348.26,501.443c2.27,2.889,8.288,10.557,15.956,10.557c1.825,0,3.748-0.422,5.724-1.454c10.33-5.398,6.267-18.714,4.942-23.092
                            L310.036,274.37c-0.684-2.216-0.598-4.341,0.228-5.454c0.836-1.119,2.639-1.967,4.964-1.967h88.787
                            c9.461,0,17.771-3.723,22.8-10.583C431.833,249.517,433.082,240.624,430.225,231.603z M408.87,243.217
                            c-0.793,1.075-2.563,1.485-4.855,1.485h-88.787c-9.439,0-17.771,4.13-22.832,10.974c-5.073,6.838-6.398,16.045-3.65,25.071
                            l54.137,177.728L104.469,155.72h99.4c9.505,0,17.792-3.728,22.735-10.588c4.942-6.859,6.05-15.863,3.041-24.889L199.263,29.13
                            c-0.706-2.118-0.706-4.159,0.011-5.153c0.706-0.967,2.411-1.731,4.584-1.731h122.807c7.354,0,16.098,6.656,18.346,13.733
                            l64.011,202.123C409.707,240.279,409.653,242.147,408.87,243.217z"/>
                    </g>
                </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>
        </Bolt>
    )
}

export default BoltImg;