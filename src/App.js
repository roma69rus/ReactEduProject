import './styles/App.css'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePost';
import PostService from './API/PostService';
import MyLoader from './components/UI/loader/MyLoader';
import { useFetching } from './hooks/useFetching';

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, error] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts()
  }, [])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>POSTS</MyButton>
      <MyButton onClick={() => setModal(true)} style={{ marginTop: '30px' }}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }}></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      
      {error &&
        <h1>ERROR: ${error}</h1>
      }

      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <MyLoader />
        </div>
        : <PostList del={deletePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
      }


    </div>
  );
}

export default App;
