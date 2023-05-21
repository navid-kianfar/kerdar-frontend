import React, {Component, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useAppContext } from "./context/app-context";
import { socket } from "./services/socket.service";

import LoadingPage from "./pages/loading/loading.page";
import NotFoundPage from "./pages/error/not-found/not-found.page";
import OfflinePage from "./pages/error/offline/offline.page";
import FlowDesignerPage from "./pages/flow/designer/flow-designer.page";

class App extends Component {
    constructor(props) {
        super(props);

        socket.on("connect", this.onSocketConnect);
        socket.on("disconnect", this.onSocketDisconnect);
    }

    onSocketConnect(payload) {
        console.log("onConnect", payload);
    }
    onSocketDisconnect(payload) {
        console.log("onDisconnect", payload);
    }

    componentWillUnmount() {
        socket.off("connect", this.onSocketConnect);
        socket.off("disconnect", this.onSocketDisconnect);
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoadingPage />} />
                    <Route path="/flow/designer" element={<FlowDesignerPage />} />
                    <Route path="/offline" element={<OfflinePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
