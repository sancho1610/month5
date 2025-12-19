import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Assuming we add some CSS

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [filter, setFilter] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/posts');
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.body.trim()) {
      alert('Please fill in both title and body.');
      return;
    }
    setSubmitting(true);
    try {
      const response = await axios.post('https://dummyjson.com/posts/add', newPost);
      setSuccessMessage('Post added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      setNewPost({ title: '', body: '' });
      // Optionally, add to local list
      setPosts([response.data, ...posts]);
    } catch (error) {
      console.error('Error adding post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="app">
      <h1>Posts App</h1>
      
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by title"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          required
        />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Add Post'}
        </button>
      </form>

      <div className="posts">
        {filteredPosts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
