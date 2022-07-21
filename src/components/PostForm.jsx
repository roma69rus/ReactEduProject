import React, { Component, useRef, useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});//Ниже реализиуем двухстороннее связывание с помощью onChange (первый инпут)
  // const textInputRef = useRef();         //неупавляемый компонент с помощью хука UseRef (второй инпут)
  const addNewPost= (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title, 
      body: post.body
    }

    create(newPost)

    // setPosts([...posts, newPost]);
    setPost({title: '', body: ''})
   
  }
  
  return ( 
    <form>
        <MyInput 
          value = {post.title}
          onChange = {e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder='Название поста'>
        </MyInput>

        <MyInput 
          value = {post.body}
          onChange = {e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder='Текст'>
        </MyInput>
  
        {/* <MyInput 
          ref = {textInputRef}
          type="text" 
          placeholder='Текст'
        /> */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
   );
}
 
export default PostForm;