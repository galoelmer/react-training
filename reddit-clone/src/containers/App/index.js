import React, { useState, useEffect } from 'react';
import db from '../firebase-config';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let postRef = db.ref('posts');
    postRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      setPost(snapshot.val());
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {posts &&
              Object.keys(posts).map((key) => {
                return <div key={key}>{posts[key].title}</div>;
              })}
          </div>
        )}
      </div>
      <button>
        <Link to="/add-post">Add Post</Link>
      </button>
    </>
  );
};

export default Posts;
