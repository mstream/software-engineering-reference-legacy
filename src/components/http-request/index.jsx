import React from "react";

import CodeBlock from '@theme/CodeBlock'

function headersToString(headers) {
    return Object.entries(headers)
        .map(([name, value]) => `${name}: ${value}`)
        .join("\n")
}

export function HttpRequest({headers,host,method,path}) { 
    const headersString = headersToString({'Host': host, ...headers});
    return (
        <CodeBlock 
            className="html"
            title="HTTP Request"
        >
            {`${method} ${path} HTTP/1.1\n${headersString}`}
        </CodeBlock>
    ) 
}
