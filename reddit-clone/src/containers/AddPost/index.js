import React, { useState } from 'react';
import db from '../firebase-config';
import { Link } from 'react-router-dom';

const AddPost = ({ history }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const postRef = db.ref('posts');
    postRef.push({ title });
    setTitle('');
    history.push('/');
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Write the title of your post"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <button>
          <Link to='/'>Go Home</Link>
      </button>
    </div>
  );
};

export default AddPost;
