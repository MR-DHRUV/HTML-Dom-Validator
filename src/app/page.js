"use client";
import resolveQueries from "@/Core/Validator";
import CodeMirror from '@uiw/react-codemirror';
import { useState } from "react";
import { githubLight } from "@uiw/codemirror-theme-github";
import { html } from "@codemirror/lang-html";

export default function Home() {

    const [htmlData, setHtmlData] = useState(``);
    const [queries, setQueries] = useState(['']);
    const [errors, setErrors] = useState([]);

    const validate = () => {
        setErrors(resolveQueries(htmlData, queries));
    }

    const addNewQuery = () => {
        setQueries([...queries, '']);
    }

    return (
        <div className="d-flex flex-column text-bg-light align-items-center main">

            {/* Navbar */}
            <nav className="navbar mybg rounded-4 mt-3 w-50">
                <div className="container-fluid d-flex flex-row justify-content-between">
                    <a className="navbar-brand" href="#">Dom Validator</a>
                    <button className="btn btn-primary d-flex flex-row align-items-center" onClick={validate} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                            <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                        </svg>
                        Run Tests
                    </button>
                    <div className="d-flex flex-row">
                        <button className="btn btn-outline-secondary border-0 p-2 mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                        </button>
                        <a className="btn btn-outline-secondary border-0 p-2 mx-1" href="https://github.com/MR-DHRUV/HTML-Dom-Validator" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Editor */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <h3>Queries</h3>
                        <div className="querydiv border rounded p-2">
                            {queries.map((query, index) => (
                                <div key={index} className="mb-2 w-100">
                                    <textarea
                                        className="form-control mybg"
                                        value={query}
                                        onChange={(e) => {
                                            const newQueries = [...queries];
                                            newQueries[index] = e.target.value;
                                            setQueries(newQueries);
                                        }}
                                        onKeyDown={(event) => {
                                            // Check if the pressed key is Tab
                                            if (event.key === 'Tab') {
                                                // Prevent the default behavior (switching focus)
                                                event.preventDefault();
                                                const newQueries = [...queries];
                                                newQueries[index] = event.target.value+"    ";
                                                setQueries(newQueries);
                                            }
                                        }}
                                        rows={3}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="d-flex flex-column align-items-center w-100 mt-2">
                            <button className="btn btn-primary" onClick={addNewQuery}>Add Query</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <h3>HTML</h3>
                        <CodeMirror
                            value={htmlData}
                            height="550px"
                            className="form-control"
                            extensions={[html()]}
                            onChange={(e) => {setHtmlData(e)}}
                            theme={githubLight}
                        />
                    </div>
                </div>
            </div>
            
            {/* Errors */}
            <div className="mybg rounded-3 container mt-3 mx-5 p-3">
                <h3>Errors</h3>
                <ul className="errorContainer">
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}
