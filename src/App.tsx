import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import Form from './components/Form';
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
      <nav className="mb-8 flex justify-between sm:justify-evenly gap-4">
        <h1 className="my-auto text-xl font-bold">himitsu | ヒミツ</h1>
        <Theme />
      </nav>
      <Form className="mb-4" />
      <main className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        { posts.map((post: Post, i) => <Post key={i} {...post} />) }
      </main>
      <Footer />
    </>
  );
}

export default App;
