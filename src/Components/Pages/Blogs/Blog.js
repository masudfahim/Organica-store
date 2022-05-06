import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div>
                <h2>1. Difference between javascript and nodejs.</h2>
                <h5 className=''>JavaScript</h5>
                <p>	JavaScript is a programming language. It is running in any web browser with
                    a proper browser engine.	Mainly using for any client-side activity for
                    a web application, like possible attribute validation or refreshing the page in a
                    specific interval or provide some dynamic changes in web pages without refreshing the page.
                    JavaScript running any engine like Spider monkey (FireFox),
                    JavaScript Core (Safari), V8 (Google Chrome).</p>
                <h5>Node JS</h5>
                <p>It is an interpreter and environment for JavaScript with some specific
                    useful libraries which JavaScript programming can use separately.It mainly used for accessing or
                    performing any non-blocking operation of any operating system, like creating or executing a shell
                    script or accessing any hardware-specific information or running any backend job.Node JS only run in
                    a V8 engine which mainly used by google chrome. And javascript program which will be written
                    under this Node JS will be always run in V8 Engine.</p>
            </div>
            <div className='mt-5'>
                <h2>2. Differences between sql and nosql databases.</h2>
                <p>SQL databases are relational, NoSQL databases are non-relational.</p>
                <p>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                <p>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>



            </div>
            <div className='mt-5'>
                <h2>3. What is the purpose of jwt and how does it work?</h2>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>

            </div>

        </div>
    );
};

export default Blog;