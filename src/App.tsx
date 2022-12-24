import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './components/Post';
import Theme from './components/Theme';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get('/api/get')
      .then(({ data }) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Theme />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        { posts.map((post: Post, i) => <Post key={i} {...post} />) }
      </div>
    </>
  );
}

export default App;
