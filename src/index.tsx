import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "antd/dist/antd.css";
import "./styles.css";

const container: any = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
