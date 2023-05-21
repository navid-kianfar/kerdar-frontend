import axios from "axios";
import {OperationResultStatus} from "../lib/enums/operation-result-status";

const apiPrefix = "http://localhost:5000/api/v1/kerdar";

const handleCatch = (err) => {
    return Promise.resolve({
        // response object
        data: {
            // operation result object
            data: null,
            status: OperationResultStatus.Failed,
            message: err.message
        }
    });
}



export {  };