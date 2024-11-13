import PostCard from "./PostCard/PostCard";
import posts from "../db/db.js";

export default function AppMain() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {posts.map(post => post.published && <PostCard key={post.id} data={post} />)}
                </div>
            </div>
        </main>
    );
};