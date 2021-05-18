import React from "react"
import mermaid from "mermaid"

mermaid.initialize({
  startOnLoad: true,
});

export function Diagram({children}) {
  React.useEffect(() => {
    mermaid.contentLoaded()
  }, []);
  return (
    <div className="mermaid">
      {children}
    </div>
  );
}



