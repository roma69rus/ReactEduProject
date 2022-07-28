import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, del }) => {

  if (!posts.length) {
    return (
      <h1>Посты не найдены</h1>
    )
  }

  return (
    <div>
      <TransitionGroup>
        <h1 className='header'>{title}</h1>
        {posts.map((post, index) =>
          <CSSTransition key={post.id} timeout={500} classNames="post"> 
            <PostItem del={del} number={index + 1} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default PostList;