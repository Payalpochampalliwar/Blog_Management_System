import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import '../App.css';

function Homepage(){
    const [blogs, SetBlogs] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10') //Dummy blog
        .then(res => res.json())
        .then(data => SetBlogs(data))
        .catch(err => console.log(err));
    }, []);

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );
    

    return (
        <div style={{padding:'20px'}}>
            <h1>All Blogs</h1>
            <input
        type="text"
        placeholder="Search blog..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /><br/><br/>

      {filteredBlogs.map((blog) => (
        <div className='hover-test' key={blog.id} style={{ marginBottom: '10px' }}>
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
        </div>
    );
}

export default Homepage;