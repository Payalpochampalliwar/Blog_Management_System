import { useState, useEffect } from 'react';
import '../App.css';

function DashboardPage() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');

  // Load existing blogs (you can later replace with your own API)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  async function handleCreateOrUpdateBlog(e) {
    e.preventDefault();

    if (title.trim() === '' || body.trim() === '') {
      alert('Please fill all fields');
      return;
    }

    const blogData = {
      title,
      body,
      userId: 1,
    };

    try {
      if (editingId) {
        // Update (Edit) existing blog
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(blogData),
        });

        if (response.ok) {
          const updatedBlog = await response.json();
          setBlogs(
            blogs.map((blog) => (blog.id === editingId ? { ...blog, ...updatedBlog } : blog))
          );
          setMessage('Blog updated successfully!');
          setEditingId(null);
          setTitle('');
          setBody('');
        } else {
          console.error('Failed to update blog');
        }
      } else {
        // Create new blog
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(blogData),
        });

        if (response.ok) {
          const newBlog = await response.json();
          setBlogs([...blogs, newBlog]);
          setMessage('Blog created successfully!');
          setTitle('');
          setBody('');
        } else {
          console.error('Failed to create blog');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function handleEdit(blog) {
    setEditingId(blog.id);
    setTitle(blog.title);
    setBody(blog.body);
    window.scrollTo(0, 0);
  }

  function handleDelete(id) {
    const filtered = blogs.filter((blog) => blog.id !== id);
    setBlogs(filtered);
    setMessage('Blog deleted successfully!');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard (Create / Edit Blog)</h1>

      <form onSubmit={handleCreateOrUpdateBlog}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br/><br/>
        <textarea
          placeholder="Blog Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        /><br/><br/>
        <button type="submit">{editingId ? 'Update Blog' : 'Create Blog'}</button>
      </form>

      {message && <p style={{ color: 'green' }}>{message}</p>}

      <hr />

      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid gray', borderRadius: '5px' }}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <button onClick={() => handleEdit(blog)}>Edit</button>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default DashboardPage;
