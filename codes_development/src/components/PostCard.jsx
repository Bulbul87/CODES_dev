import React from 'react';

const PostCard = ({ post, onRemove }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <button
        onClick={() => onRemove(post.id)}
        className="text-red-500 font-bold float-right"
      >
        X
      </button>
      <h3 className="font-bold text-lg">{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
