import { useState, useCallback } from 'react';

import ReactFlow, {
  applyNodeChanges,
  applyEdgeChanges
} from 'react-flow-renderer';

const initialNodes = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 50, y: 0 } },
  { id: '2', data: { label: 'Group node 2' }, position: { x: 50, y: 100 }, style: { width: 400, height: 200 } },
  // this position is relative to the position of the parent node '2' 
  { id: '2a', data: { label: 'Child node 2a' }, position: { x: 0, y: 150 }, parentNode: '2' },
  { id: '3a', data: { label: 'Child node 3a' }, position: { x: 200, y: 150 }, parentNode: '2' }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' }
];


function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback((changes) => setNodes((ns) => applyNodeChanges(changes, ns)), []);
  const onEdgesChange = useCallback((changes) => setEdges((es) => applyEdgeChanges(changes, es)), []);

  return (
    <ReactFlow
      nodes={nodes} 
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
    />
  );
}

export default App;
