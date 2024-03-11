"use client";

import resolveQueries from "@/Core/Validator";
import { useState } from "react";

export default function Home() {

    const [html, setHtml] = useState(``);
    const [queries, setQueries] = useState(['']);
    const [errors, setErrors] = useState([]);

    const validate = () => {
        // console.log(queries); 
        setErrors(resolveQueries(html, queries));
    }   

    const addNewQuery = () => {
        setQueries([...queries, '']); 
    }

    return (
        <div className="d-flex flex-column"> 
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid d-flex flex-row justify-content-between">
                    <a className="navbar-brand" href="#">Dom Validator</a>
                    <button className="btn btn-primary" onClick={validate} >Run Tests</button>
                    <p className="navbar-brand" href="#">info</p>
                </div>
            </nav>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <h3>Queries</h3>
                        
                        {/* Interface to add queries one by one and show a add button in bottom to add a textarea input*/}
                        {queries.map((query, index) => (
                            <div key={index} className="mb-2">
                                <textarea
                                    className="form-control"
                                    value={query}
                                    onChange={(e) => {
                                        const newQueries = [...queries];
                                        newQueries[index] = e.target.value;
                                        setQueries(newQueries);
                                    }}
                                    rows={4}
                                />
                            </div>
                        ))}

                        <button className="btn btn-primary" onClick={addNewQuery}>Add Query</button>
                        
                        
                    </div>
                    <div className="col-6">
                        <h3>HTML</h3>
                        <textarea
                            className="form-control"
                            value={html}
                            onChange={(e) => setHtml(e.target.value)}
                            rows={25}
                        />
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <h3>Errors</h3>
                <ul>
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
