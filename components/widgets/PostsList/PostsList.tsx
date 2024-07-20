import { JobPostData } from '@/lib/types/types';
import Post from '../Post/Post';
import styles from './PostsList.module.scss';

const PostsList = ({ tenPosts } :{tenPosts:JobPostData[]}) => {
    return (
        <div className={styles.postsList}>
            <div>test</div>
            {tenPosts.map((post: JobPostData) => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default PostsList;
