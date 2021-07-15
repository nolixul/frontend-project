import React, { useState, useContext } from 'react';
import Expandable from './Expandable';
import useComments from '../hooks/useComments';
import { UserContext } from '../contexts/User';
import { postComment } from '../utils/api';

const PostComment = (review_id) => {
  const value = useContext(UserContext);
  const { setComments } = useComments(review_id);
  const [newCommentBody, setNewCommentBody] = useState({});
  const newComment = { username: value.username, body: newCommentBody };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(review_id, newComment).then((postedComment) => {
      setComments((currComments) => {
        const newComments = [postedComment, ...currComments];
        return newComments;
      });
    });
  };

  return (
    <div className='postComment'>
      <p>post comment here</p>
      <Expandable>
        <form onSubmit={handleSubmit}>
          <label for='body'>Comment</label>
          <input id='body'></input>
        </form>
      </Expandable>
    </div>
  );
};

export default PostComment;
