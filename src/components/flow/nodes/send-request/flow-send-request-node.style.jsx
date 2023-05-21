import styled from "styled-components";

const Wrapper = styled.div`
  width: 250px;

  .header {
    padding: 4px 8px;
  }
  
  .content {
    background: #fff;
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
`;

export default Wrapper;
