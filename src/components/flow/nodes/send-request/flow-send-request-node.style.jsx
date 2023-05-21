import styled from "styled-components";

const Wrapper = styled.div`
  width: 250px;

  .header {
    padding: 4px 8px;
    border-radius: 8px 8px 0 0;
  }
  
  .content {
    background: #fff;
    min-height: 200px;
  }
  
  .destination {
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    
    .method {
      text-transform: uppercase;
      margin-inline-end: 10px;
      font-weight: 600;
      font-size: 10px;
      color: green;
    }
    
    .name {
      font-size: 10px;
    }
    
    .gap {
      display: flex;
      flex-grow: 1;
    }
  }
  
  .data-flow {
    display: flex;
    flex-direction: column;
    .items {
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        .input {
          display: flex;
          align-items: center;
          i {
            font-size: 15px;
            margin-inline-end: 5px;
          }
          span {
            font-size: 11px;
          }
        }
        .output {
          display: flex;
          align-items: center;
          span {
            font-size: 11px;
          }
        }
      }
    }
  }
`;

export default Wrapper;
