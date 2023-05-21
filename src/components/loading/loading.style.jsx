import styled from "styled-components";

const LoadingStyle = styled.div`
  width: 100%;
  .loader {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: rgb(235, 235, 235);
    overflow: hidden;
  }
  .loader::after {
    content: '';
    width: 192px;
    height: 4.8px;
    background: #232323;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: animloader 2s linear infinite;
  }

  @keyframes animloader {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }

`

export default LoadingStyle;