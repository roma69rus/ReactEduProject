import './styles/App.css'
import React, {useRef, useState} from 'react'
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: "TEXT"},
    {id: 2, title: 'TS', body: "TEXT"},
    {id: 3, title: 'CS', body: "TEXT"},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create = {createPost}/>

      {posts.length !==0
        ?<PostList del = {deletePost} posts = {posts} title = {"Список постов"}/>
        :<h1>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
