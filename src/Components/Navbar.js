"use client";
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import markdown from './info.md'

const Navbar = ({ validate }) => {

    const [show, setShow] = useState(false);
    const [marked, setmarked] = useState('')

    // handle modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // fetch markdown
    // const func = () => {
    //     fetch(markdown).then((response) => response.text()).then((text) => {
    //         setmarked(text)
    //     })
    // }
    // useEffect(() => {
    //     func()
    // }, [])


    return (
        <>
            <nav className="navbar mybg rounded-4 mt-3 w-50">
                <div className="container-fluid d-flex flex-row justify-content-between">
                    <a className="navbar-brand" href="#">Dom Validator</a>
                    <button className="btn btn-primary d-flex flex-row align-items-center" onClick={validate} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                            <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                        </svg>
                        Run Tests
                    </button>
                    <div className="d-flex flex-row">
                        <button className="btn btn-outline-secondary border-0 p-2 mx-1" onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                        </button>
                        <a className="btn btn-outline-secondary border-0 p-2 mx-1" href="https://github.com/MR-DHRUV/HTML-Dom-Validator" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
            <Modal show={show} onHide={handleClose} centered fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>Documentation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*eslint-disable-next-line react/no-children-prop */}
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} children={marked}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }} />
                </Modal.Body>
            </Modal>
        </>

    )
}

export default Navbar
