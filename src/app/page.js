"use client";
import resolveQueries from "@/Core/Validator";
import CodeMirror from '@uiw/react-codemirror';
import { useState } from "react";
import { githubLight } from "@uiw/codemirror-theme-github";
import { html } from "@codemirror/lang-html";
import Navbar from "@/Components/Navbar";

export default function Home() {

    const [htmlData, setHtmlData] = useState(``);
    const [queries, setQueries] = useState(['']);
    const [errors, setErrors] = useState([]);

    // function to validate the queries
    const validate = () => {
        setErrors(["Running Tests..."]);
        setTimeout(() => {
            setErrors(resolveQueries(htmlData, queries));
        }, 1000);
    }

    const addNewQuery = () => {
        setQueries([...queries, '']);
    }

    return (
        <div className="d-flex flex-column text-bg-light align-items-center main">

            {/* Navbar */}
            <Navbar validate={validate} />

            {/* Editor */}
            <div className="mt-4 d-flex flex-row w-100 px-5">
                <div className="d-flex flex-column w-100 p-2 px-3">
                    <h4>Rules</h4>
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
                                            // Prevent the default behavior (switching focus) and add indentation
                                            event.preventDefault();
                                            const newQueries = [...queries];
                                            newQueries[index] = event.target.value + "    ";
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
                <div className="d-flex flex-column w-100 p-2 px-3">
                    <h4>HTML Editor</h4>
                    <CodeMirror
                        value={htmlData}
                        height="550px"
                        className="form-control"
                        extensions={[html()]}
                        onChange={(e) => { setHtmlData(e) }}
                        theme={githubLight}
                    />
                </div>
            </div>
            
            <div className="bg-white w-100 spx"></div>

            {/* Console */}
            <div className="rounded-3 w-100 p-3">
                <h4>Console</h4>
                <ul className="errorContainer mybg">
                    {errors.map((error, index) => (
                        <li className="ms-1 mt-1 pt-1" key={index}>{error}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
