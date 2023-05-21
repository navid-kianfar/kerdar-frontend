import { useCallback, useMemo } from "react";
import FlowDesignerWrapper from "./flow-designer.style";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { nodeTypes } from "../../../components/flow/nodes/node-types";
import {initialEdges, initialNodes} from "../../../context/defaults";

const FlowDesignerPage = () => {
  const registeredNodeTypes = useMemo(() => nodeTypes, []);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <FlowDesignerWrapper className="flow-designer-page-wrapper full-viewport">
      <ReactFlow
        nodeTypes={registeredNodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </FlowDesignerWrapper>
  );
};

export default FlowDesignerPage;
