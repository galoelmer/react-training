import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import config from './firebase-config';
import 'firebase/database';

firebase.initializeApp(config);
const db = firebase.database();

const Posts = () => {
  const [posts, setPost] = useState([]);
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
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {posts.map((post) => {
            return <div key={post.title}>{post.title}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
