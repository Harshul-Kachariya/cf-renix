import React from "react";
import { createRoot } from "react-dom/client";
import HelloWorld1 from "~/routes/hello1";
import HelloWorld2 from "~/routes/hello2";
import PdfViewer from "~/routes/pdfViewer";

const mountComponent = (
  Component: React.ComponentType,
  containerId: string
) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<Component />);
  }
};

mountComponent(HelloWorld1, "hello1");
mountComponent(HelloWorld2, "hello2");
mountComponent(PdfViewer, "pdf");
