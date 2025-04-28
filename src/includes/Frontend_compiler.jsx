import React, { useState, useEffect } from 'react';

function FrontendCompiler() {
    const [html, setHtml] = useState('<h2> Hello Codingwalla </h2>');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    useEffect(() => {
        const output = document.getElementById("codingwallacompileroutput");
        if (output) {
            const documentContent = `
                <html>
                <head><style>${css}</style></head>
                <body>${html}<script>${js}<\/script></body>
                </html>
            `;
            output.srcdoc = documentContent;
        }
    }, [html, css, js]);

    return (
        <>
        <div className="online-compiler">
        <h2> Code Editor </h2>
        <div className="codingwalla-compiler">
            <div className="compiler-left">
                <label> <i class="fa-brands fa-html5"></i> HTML</label>
                <textarea id="codingwallacompiler-html" value={html} onChange={(e) => setHtml(e.target.value)} />
                <label> <i class="fa-brands fa-css3-alt"></i> CSS</label>
                <textarea id="codingwallacompiler-css" value={css} onChange={(e) => setCss(e.target.value)} />
                <label> <i class="fa-brands fa-js"></i> JS</label>
                <textarea id="codingwallacompiler-js" value={js} onChange={(e) => setJs(e.target.value)} />
            </div>
            <div className="compiler-right">
                <label>Output</label>
                <iframe id="codingwallacompileroutput" title="output"></iframe>
            </div>
        </div>


        </div>
        
        </>
        
    );
}

export default FrontendCompiler;
