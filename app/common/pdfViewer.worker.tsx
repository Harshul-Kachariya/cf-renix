import * as Comlink from "comlink";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { renderToString } from "react-dom/server";
import { createRoot } from "react-dom/client";

import PdfViewer from "~/routes/pdfViewer";

const renderComponent = () => {
  const html = renderToString(<PdfViewer />);
  return html;
};

const hydrateComponent = (rootId: string) => {
  const root = document.getElementById(rootId);
  if (root) {
    const reactRoot = createRoot(root);
    reactRoot.render(<PdfViewer />);
  }
};

Comlink.expose({ renderComponent, hydrateComponent });
