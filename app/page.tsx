import { getAllPosts } from '@/lib/actionsJobPosts';
import Filter from '../components/features/FIlter/Filter';
import PostsList from '../components/widgets/PostsList/PostsList';
import './globals.scss';
import 'animate.css/animate.css';

export default async function Home() {
    const jobPosts = await getAllPosts();
    const reversPosts = jobPosts.reverse();

    return (
        <div className="wrapperStyles">
            <Filter />
            <div className="homeWrapper">
                <PostsList tenPosts={reversPosts} />
            </div>
        </div>
    );
}
