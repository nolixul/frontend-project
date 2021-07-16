import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Expandable from './Expandable';
import useComments from '../hooks/useComments';
import UserContext from '../contexts/User';
import { postComment } from '../utils/api';

const PostComment = () => {
  const { review_id } = useParams();
  const value = useContext(UserContext);
  const { setComments } = useComments(review_id);
  const [newCommentBody, setNewCommentBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { username: value.username, body: newCommentBody };
    postComment(review_id, newComment).then((postedComment) => {
      setComments((currComments) => {
        const newComments = [postedComment, ...currComments];
        return newComments;
      });
    });
    setNewCommentBody('');
  };

  return (
    <div className='postComment'>
      <p>post comment here</p>
      <Expandable>
        <form onSubmit={handleSubmit}>
          <label htmlFor='body'>
            Comment
            <textarea
              value={newCommentBody}
              onChange={(event) => {
                setNewCommentBody(event.target.value);
              }}
            ></textarea>
          </label>
          <button type='submit' value='Submit'>
            submit
          </button>
        </form>
      </Expandable>
    </div>
  );
};

export default PostComment;
