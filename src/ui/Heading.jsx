import styled, { css } from 'styled-components';

const test = css`
  text-align: center;
`;

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' && // this is props.as
    css`
      font-size: 3rem;
      font-weight: 600;
      background-color: yellow;
    `}
  ${(props) =>
    props.as === 'h2' && //< ---- This is props.type
    css`
      font-size: 2rem;
      font-weight: 600;
      background-color: yellow;
    `}
  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 200;
      background-color: yellow;
    `}
  ${test};
  line-height: 1.4;
`;

export default Heading;
