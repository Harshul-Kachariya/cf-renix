import * as Comlink from "comlink";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { renderToString } from "react-dom/server";
import { createRoot } from "react-dom/client";
import HelloWorld2 from "../routes/hello2";

const renderComponent = () => {
  const html = renderToString(<HelloWorld2 />);
  return html;
};

const hydrateComponent = (rootId: string) => {
  const root = document.getElementById(rootId);
  if (root) {
    const reactRoot = createRoot(root);
    reactRoot.render(<HelloWorld2 />);
  }
};

Comlink.expose({ renderComponent, hydrateComponent });
