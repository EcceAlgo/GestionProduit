import { PostData } from "../interfaces";
import {} from '../index.css';
import { Link } from "react-router-dom";

interface PostDetailProps {
    onePost: PostData | null;
}
const PostDetail: React.FC<PostDetailProps> = ({ onePost }) => {
    return (
        <div className="post">
            <h1>Publication n° {onePost?.id}</h1>
            <h2>Titre: {onePost?.title}</h2>
            <p>{onePost?.body}</p>
            <Link to="/">Retour</Link>
        </div>
    );
};

export default PostDetail;