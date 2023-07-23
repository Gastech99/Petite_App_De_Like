import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';

function App() {
  const [posts, setPosts] = useState([
    {
      id:1,
      titre: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      liker: false,
    },
    {
      id:2,
      titre: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      liker: false,
    },
    {
      id:3,
      titre: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      liker: false,
    },
    {
      id:4,
      titre: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      liker: false,
    },
    {
      id:5,
      titre: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      liker: false,
    },
    {
      id:6,
      titre: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      liker: false,
    },
  ])

  const liker = (data) => {
      const dataCopy = [...posts]
      const index = posts.indexOf(data)
      dataCopy[index] = {...posts[index],
      liker: !posts[index].liker}
      setPosts(dataCopy)
  }

  const effacerPost = (id) => {
    const newData = posts.filter(p => p.id != id)
    setPosts(newData)
  }

  const nombreDeLike = posts.filter(p => p.liker)

  return (
    <div className="App">
      <Navbar nombredelike={nombreDeLike.length} />
      {
        posts.map(p => <Posts data={p} key={p.id} liker={liker} effacer={effacerPost} />)
      }
    </div>
  );
}

export default App;
