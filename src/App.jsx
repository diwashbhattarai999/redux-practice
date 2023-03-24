import AddPostForm from "./posts/AddPostForm";
import PostList from "./posts/PostList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePostPage from "./posts/SinglePostPage";
import Navbar from "./components/Navbar";
import EditPostForm from "./posts/EditPostForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PostList />
                <AddPostForm />
              </>
            }
          />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
