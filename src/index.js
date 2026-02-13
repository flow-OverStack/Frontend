import { createRoot } from "react-dom/client";
import Main from "./components/main";

const root = createRoot(document.getElementById("root"));
root.render(<Main />);
const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}