const handleStyles = {
    width: 4,
    height: 15,
    background: '#888',
    border: '1px solid #777'
};
const rightHandleStyles = {
    ...handleStyles,
    borderRadius: '0 8px 8px 0',
    right: -6,
    borderLeft: 0
};
const leftHandleStyles = {
    ...handleStyles,
    borderRadius: '8px 0 0 8px',
    left: -6,
    borderRight: 0
};

export { handleStyles, rightHandleStyles, leftHandleStyles }