import Filter from '../components/features/FIlter/Filter';
import PostsList from '../components/widgets/PostsList/PostsList';
import './globals.scss';

export default function Home() {
    return (
        <div className="homeWrapper">
            <Filter />
            <PostsList />
        </div>
    );
}
