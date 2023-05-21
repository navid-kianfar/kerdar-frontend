import FlowStartNodeComponent from "./start-node/flow-start-node.component";
import FlowSendRequestNodeComponent from "./send-request/flow-send-request-node.component";
import FlowDelayNodeComponent from "./delay/flow-delay-node.component";

const nodeTypes = {
  start: FlowStartNodeComponent,
  delay: FlowDelayNodeComponent,
  "send-request": FlowSendRequestNodeComponent,
};

export { nodeTypes };
