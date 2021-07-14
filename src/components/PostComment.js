import React from 'react';
import Expandable from './Expandable';

const PostComment = () => {
  return (
    <form className='postComment'>
      <p>post comment here</p>
      <Expandable>
        <form>
          <label for='body'>Comment</label>
          <input id='body'></input>
        </form>
      </Expandable>
    </form>
  );
};

export default PostComment;
