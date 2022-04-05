import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/detail";
import Create from "./components/create";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create" element={<Create />} />
      <Route path="/profile/:name" element={<Detail />} />
    </Routes>
  </BrowserRouter>,
);