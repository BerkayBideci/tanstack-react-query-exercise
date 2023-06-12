import { useState } from "react";
import Posts from "./Posts";
import Post from "./Post";
import "./App.css";

function App() {
    const [postId, setPostId] = useState(-1);

    return (
        <div>
            {postId > -1 ? (
                <Post
                    postId={postId}
                    setPostId={setPostId}
                />
            ) : (
                <Posts setPostId={setPostId} />
            )}
        </div>
    );
}

export default App;
