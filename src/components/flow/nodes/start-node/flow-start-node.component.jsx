import { Handle, Position } from "reactflow";
import Wrapper from "./flow-start-node.style";
const FlowStartNodeComponent = () => {
  return (
    <Wrapper className="flow-start-node flow-designer-node">
      <Handle type="source" position={Position.Right} />
      <div className="header">
        <div className="label">Start</div>
        <div className="actions">
          <button>
            <i className="ti ti-settings" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default FlowStartNodeComponent;
