import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .loading-inner {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100px;
      opacity: 0.8;
    }

    h4 {
      margin: 5px 0;
      font-size: 13px;
      font-weight: 500;
      font-family: sans-serif;
    }
  }
`;

export default LoadingWrapper;
