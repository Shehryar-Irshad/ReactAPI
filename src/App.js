import {useState, useEffect} from "react";
import './App.css';

function App() {

  const [posts, setposts] = useState([]);

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setposts(data);
      })
      .catch((err)=>{
         console.log(err.message);
      });
 }, []);
  

  return (
    <div className="App">
       {posts.map((post) => {
          return(
            <div class="col s12 m7"> 
            <div className="card">
              <div className="post-card" key={post.id}>
                <h2 className="card-title">{post.name}</h2>
                <p className="post-body">{post.email}</p>
                <div className="button">
                   <div className="delete-btn">Delete</div>
                </div>

              </div>
            </div>
            </div>
          );
       })}     

    </div>  
  );
}

export default App;
