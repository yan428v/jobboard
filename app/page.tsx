import { getAllPosts } from '@/lib/actionsJobPosts';
import Filter from '../components/features/FIlter/Filter';
import PostsList from '../components/widgets/PostsList/PostsList';
import './globals.scss';

export default async function Home() {
    const jobPosts = await getAllPosts();
    const tenPosts = jobPosts.slice(0, 10);
    console.log(tenPosts);

    return (
        <div className="wrapperStyles">
            <Filter />
            <div className="homeWrapper">
                <PostsList tenPosts={tenPosts} />
            </div>
        </div>
    );
}
