import PostItem from "./PostItem.js";
import posts from "./post.js";

const PostList = () => {
    return(`
        ${posts.map((post) => PostItem(post)).join('')}
    `);
}
export default PostList;