import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "./services/api";

const Posts = ({ setPostId }) => {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {status === "loading" ? (
                    "Loading..."
                ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                ) : (
                    <>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            {data.map((post) => (
                                <div
                                    key={post.id}
                                    style={{
                                        borderStyle: "dashed",
                                        borderColor: "#f9f9f9",
                                        marginTop: "1em",
                                        marginBottom: "1em",
                                        paddingTop: "1em",
                                        paddingBottom: "2em",
                                    }}
                                >
                                    <p>
                                        <a
                                            onClick={() => setPostId(post.id)}
                                            href="#"
                                            style={
                                                queryClient.getQueryData([
                                                    "post",
                                                    post.id,
                                                ])
                                                    ? {
                                                          fontWeight: "bold",
                                                          color: "green",
                                                      }
                                                    : {}
                                            }
                                        >
                                            {post.title}
                                        </a>
                                    </p>
                                    <span>Post ID: {post.id}</span>
                                </div>
                            ))}
                        </div>
                        <div>{isFetching ? "Background Updating..." : " "}</div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Posts;
