// import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Rout from "./components/RouteParams/Rout";
// import Posts from "./components/Posts";
// import Pagination from "./components/Pagination";
// import DataFetch from "./components/DataFetch";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    const fecthPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fecthPosts();
  }, []);

  //get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(posts);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <h1 className="text-primary mb-3">Test</h1>
      {/* pagination start */}
      {/* <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
      {/* pagination end */}
      <Rout />
    </div>
  );
}

export default App;
