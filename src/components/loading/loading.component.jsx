import LoadingStyle from "./loading.style";

const LoadingComponent = () => {
    return (
        <LoadingStyle className="loading-wrapper">
            <span className="loader"></span>
        </LoadingStyle>
    )
}

export default LoadingComponent;