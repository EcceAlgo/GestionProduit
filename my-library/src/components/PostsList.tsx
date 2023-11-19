import { PostData } from "../interfaces";
import {  } from "../index.css";
import { useNavigate } from "react-router-dom";

interface PostsListProps {
    allPosts: PostData[] | null;
}
const PostsList: React.FC<PostsListProps> = ({ allPosts }) => {
    const navigate = useNavigate()
    return (
        <ol className="posts">
            {allPosts?.map( post => (
                <li key={post.id} onClick={() => navigate(`/${post.id}`)}>
                   <h2>{post.title}</h2>
                   <p>Lire l'article</p>
                </li>
            ))}
        </ol>
    );
};
export default PostsList;