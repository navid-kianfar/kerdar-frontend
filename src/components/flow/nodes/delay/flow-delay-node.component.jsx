import { Handle, Position } from "reactflow";
import Wrapper from "./flow-delay-node.style";
import {rightHandleStyles, leftHandleStyles} from "../node.styles";
const FlowDelayNodeComponent = (props) => {
  return (
    <Wrapper className="flow-send-request-node flow-designer-node">
      <Handle type="target" position={Position.Left} style={{ ...leftHandleStyles, top: 48 }} />
      <Handle type="source" position={Position.Right} id="success" style={{ ...rightHandleStyles, top: 48 }} />
      <div className="header">
        <div className="label">Delay</div>
      </div>
        <div className="content">
            <div className="data-flow">
                <div className="items">
                    <div className="item">
                        <div className="input">
                            <span>?</span>
                            <span>Data</span>
                        </div>
                        <div className="output">
                            <span>Data</span>
                            <span>?</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-input">
                <div className="item">
                    <div className="label">Delay (in ms)</div>
                    <div className="input">
                        <input type="number" min="0"/>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  );
};
export default FlowDelayNodeComponent;
