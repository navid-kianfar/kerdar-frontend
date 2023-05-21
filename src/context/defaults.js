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
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export { initialState, initialNodes, initialEdges };