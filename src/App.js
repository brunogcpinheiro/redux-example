import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { increment, decrement, incrementAsync } from './store/counter';
import { getPosts } from './store/posts'
import { Loader } from './components/shared/Loader'

const App = () => {
  const [amount, setAmount] = useState(1)
  const loading = useSelector((state) => state.counter.loading)
  const count = useSelector((state) => state.counter.counter)
  const posts = useSelector((state) => state.posts.list)
  const status = useSelector((state) => state.posts.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="App">
      <h1>Counter: {loading ? <span>Carregando...</span> : <span>{count}</span>}</h1>
      
      <button onClick={() => dispatch(increment(amount))}>Increment</button>  
      <button onClick={() => dispatch(decrement(amount))}>Decrement</button>  
      <button onClick={() => dispatch(incrementAsync(amount))}>Increment Async</button>

      <input type="number" max="10" min="1" placeholder="Amount" defaultValue={amount} onChange={(e) => setAmount(e.target.value)} />
      
      <h1>POSTS: </h1>
      
      {status === 'pending' ? <Loader /> : posts && posts.map(post => (
        <ul key={post.id}>
          <li>{post.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
