import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../App.css';

function BlogDetailsPage() {
    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {setBlog(data);
    window.scrollTo(0, 0);
    })
      .catch(err => console.log(err));
  }, [id]);

  function handleAddComment(e) {
    e.preventDefault();
    if (newComment.trim() === '') return;

    const commentData = {
      id: Date.now(),
      text: newComment,
    };

    setComments([...comments, commentData]);
    setNewComment('');
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

    return(
        <div className="blog-card" key={blog.id}>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>

      <h3>comments</h3>

      <form onSubmit={handleAddComment}>
        <input type="text" placeholder="Write a Comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} /> <br/> <br/>
        <button type="submit">Add Comment</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        {comments.length === 0 && <p>No comments yet.</p>}
        {comments.map((comment) => (
          <p key={comment.id}>{comment.text}</p>
        ))}
      </div>
    </div>
    
    );
}

export default BlogDetailsPage;