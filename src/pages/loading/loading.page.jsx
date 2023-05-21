import LoadingWrapper from "./loading.style";
import logo from "../../assets/logo/kerdar.jpg";
import LoadingComponent from "../../components/loading/loading.component";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/flow/designer");
  }, []);

  return (
    <LoadingWrapper className="loading-page-wrapper full-viewport">
      <div className="loading-inner">
        <img src={logo} alt="logo" />
        <LoadingComponent />
        <h4>Kerdar Workflow Engine</h4>
      </div>
    </LoadingWrapper>
  );
};

export default LoadingPage;
