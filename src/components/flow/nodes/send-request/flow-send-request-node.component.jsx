import { Handle, Position } from "reactflow";
import Wrapper from "./flow-send-request-node.style";
import {rightHandleStyles, leftHandleStyles} from "../node.styles";
const FlowSendRequestNodeComponent = (props) => {
  return (
    <Wrapper className="flow-send-request-node flow-designer-node active">
      <Handle type="target" position={Position.Left} style={{ ...leftHandleStyles, top: 80 }} />
      <Handle type="source" position={Position.Right} id="success" style={{ ...rightHandleStyles, top: 80 }} />
      <Handle type="source" position={Position.Right} id="failed" style={{ ...rightHandleStyles, top: 105 }} />
      <div className="header">
        <div className="label">Send Request</div>
      </div>
        <div className="content">
            <div className="destination">
                <div className="method">POST</div>
                <div className="name">Refresh Access Token</div>
                <div className="gap"></div>
                <div className="expand">
                    <i className="ti ti-arrow-up-right"></i>
                </div>
            </div>
            <div className="data-flow">
                <div className="items">
                    <div className="item">
                        <div className="input">
                            <i className="ti ti-planet"></i>
                            <span>Send</span>
                        </div>
                        <div className="output">
                            <span>Success</span>
                            <span>( )</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="input">
                            <i className="ti ti-alert-circle"></i>
                            <span>Environment not found</span>
                        </div>
                        <div className="output">
                            <span>Failed</span>
                            <span>( )</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  );
};
export default FlowSendRequestNodeComponent;
