import Filter from '../components/features/FIlter/Filter';
import PostsList from '../components/widgets/PostsList/PostsList';
import './globals.scss';

export default function Home() {
    // header
    // фильтры
    // list
    // 3 виджета
    return (
        <div className="homeWrapper">
            <Filter />
            <PostsList />
        </div>
    );
}
