import { Handle, Position } from "reactflow";
import Wrapper from "./flow-send-request-node.style";
const FlowSendRequestNodeComponent = (props) => {
  return (
    <Wrapper className="flow-send-request-node flow-designer-node active">
      <Handle type="target" position={Position.Left} />
      <div className="header">
        <div className="label">Send Request</div>
      </div>
    </Wrapper>
  );
};
export default FlowSendRequestNodeComponent;
