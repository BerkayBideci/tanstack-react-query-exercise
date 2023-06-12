import { usePost } from "./services/api";

const Post = ({ postId, setPostId }) => {
    const { status, data, error, isFetching } = usePost(postId);

    return (
        <div>
            {!postId || status === "loading" ? (
                "Loading..."
            ) : status === "error" ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    <h1>{data.title}</h1>
                    <div>
                        <p>{data.body}</p>
                    </div>
                    <div>
                        <p>Post ID: {data.id}</p>
                    </div>
                    <div>{isFetching ? "Background Updating..." : " "}</div>
                </>
            )}
            <div>
                <button
                    onClick={() => setPostId(-1)}
                    href="#"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default Post;
