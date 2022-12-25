import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Repeat from './assets/Repeat';
import Alert, { Props as AlertProps } from './components/Alert';
import Auth from './components/Auth';
import Footer from './components/Footer';
import Form from './components/Form';
import Post from './components/Post';
import Theme from './components/Theme';

export const UpdateContext = createContext<any>(null);

function App() {
  const [alert, setAlert] = useState<AlertProps | false>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [shouldUpdate, setUpdate] = useState(true);

  useEffect(() => {
    if (!shouldUpdate) return;

    axios
      .get('/.netlify/functions/get', {
        headers: {
          authorization: localStorage.getItem('himitsu_password')
        }
      })
      .then(({ data }) => setPosts(data))
      .catch(() => setAlert({
        text: 'Error getting messages, try again later :(',
        error: true
      }))
      .finally(() => setUpdate(false));
  }, [shouldUpdate]);

  return (
    <UpdateContext.Provider value={setUpdate}>
      <nav className="sm:mx-auto flex justify-between gap-4 sm:w-[32rem]">
        <Auth />
        <Theme />
      </nav>
      { localStorage.getItem('himitsu_password') ?
          <h1 className="text-center text-xl font-bold">Owner Mode</h1>
          :
          <Form />
      }
      { alert && <Alert className="mx-auto" {...alert} /> }
      { !shouldUpdate ?
        <main className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:max-w-4xl">
          { posts.map((post: Post) => <Post key={post._id} {...post} />) }
        </main>
        :
        <Repeat className="self-center dark:invert animate-spin" size={32} />
      }
      <Footer />
    </UpdateContext.Provider>
  );
}

export default App;
