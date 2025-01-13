import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = "var-test";

createRoot(document.getElementById("root")!).render(<StrictMode></StrictMode>);
