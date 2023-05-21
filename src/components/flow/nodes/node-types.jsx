import FlowStartNodeComponent from "./start-node/flow-start-node.component";
import FlowSendRequestNodeComponent from "./send-request/flow-send-request-node.component";

const nodeTypes = {
  start: FlowStartNodeComponent,
  "send-request": FlowSendRequestNodeComponent,
};

export { nodeTypes };
