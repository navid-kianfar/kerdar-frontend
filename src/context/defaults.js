const initialState = {
    token: "",
    user: null,
    loading: true,
    culture: 'en-US'
};

const initialNodes = [
    {
        id: "1",
        type: "start",
        position: { x: 100, y: 100 },
        data: { label: "1" },
    },
    {
        id: "2",
        type: "send-request",
        position: { x: 300, y: 100 },
        data: { label: "2" },
    },
    {
        id: "3",
        type: "delay",
        position: { x: 700, y: 100 },
        data: { label: "3" },
    },
];
const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
];

export { initialState, initialNodes, initialEdges };