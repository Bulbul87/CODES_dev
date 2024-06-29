import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, removePost, setCurrentPage } from './features/posts/postsSlice';
import Loading from './components/Loading';
import PostCard from './components/PostCard';
import Pagination from './components/Pagination';

function App() {
  const dispatch = useDispatch();
  const { posts, status, currentPage, itemsPerPage } = useSelector((state) => state.posts);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPosts());
    }, 5000);
  }, [dispatch]);

  if (status === 'loading') {
    return <Loading />;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);

  const handleRemove = (id) => {
    dispatch(removePost(id));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} onRemove={handleRemove} />
        ))}
      </div>
      <Pagination
        totalItems={posts.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
