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
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newCommentBody.length > 2) {
      setHasError(false);
      const newComment = { username: value.username, body: newCommentBody };
      postComment(review_id, newComment)
        .then((postedComment) => {
          setComments((currComments) => {
            const newComments = [postedComment, ...currComments];
            return newComments;
          });
        })
        .catch((err) => {
          setHasError(true);
        });
    } else {
      setHasError(true);
    }
    setNewCommentBody('');
  };

  if (hasError) {
    return <p>You need to write a comment to be able to post it!</p>;
  }

  return (
    <div className='PostComment'>
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
