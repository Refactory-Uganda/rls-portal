import SinglePost from "./SinglePost";
import style from './Post.module.css'
function Post() {
  return (
    <div className={style.post}>
      <SinglePost />
    </div>
  );
}

export default Post;
