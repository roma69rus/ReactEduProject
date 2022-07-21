import React, { Component } from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, del}) => {
  return (
      <div>
        <h1 className='header'>{title}</h1>
        {posts.map((post, index) => 
          <PostItem del = {del} number = {index+1} post = {post} key={post.id}/>
        )}
      </div>
    );
}
 
export default PostList;