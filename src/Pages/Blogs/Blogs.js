import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl font-semibold text-center text-indigo-600'>Blogs</h2>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className="shadow-xl p-5 rounded-xl my-5">
                    <h3 className='text-xl font-semibold text-indigo-600'>Difference between SQL and NoSQL</h3>
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases</p>
                </div>
                <div className="shadow-xl p-5 rounded-xl my-5">
                    <h3 className='text-xl font-semibold text-indigo-600'>What is JWT, and how does it work?</h3>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.</p>
                </div>
                <div className="shadow-xl p-5 rounded-xl my-5">
                    <h3 className='text-xl font-semibold text-indigo-600'>What is the difference between javascript and NodeJS?</h3>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. There is a significant difference between Node. JS and Javascript. JavaScript (abbreviated as JS) is a lightweight scripting language that is object-oriented. It is used for developing HTML pages that are dynamic and have various interactive effects on their web pages.</p>
                </div>
                <div className="shadow-xl p-5 rounded-xl my-5">
                    <h3 className='text-xl font-semibold text-indigo-600'>How does NodeJS handle multiple requests at the same time?</h3>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;