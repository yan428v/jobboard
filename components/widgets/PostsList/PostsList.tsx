import { prisma } from '@/prisma/prisma';
import { JobPostData } from '@/lib/types/types';
import Post from '../Post/Post';
import styles from './PostsList.module.scss';

const PostsList = async () => {
    const jobPosts = await prisma.job_post.findMany();
    // console.log(jobPosts);
    const tenPosts = jobPosts.slice(0, 10);
    console.log(tenPosts);
    return (
        <div className={styles.postsList}>
            {tenPosts.map((post: JobPostData) => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default PostsList;
