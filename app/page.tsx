import Header from '../components/widgets/Header/Header';
import Filter from '../components/widgets/FIlter/Filter.module';

export default function Home() {
    // header
    // фильтры
    // list
    // 3 виджета
    return (
        <div>
            <Header />
            <Filter />
            <h1>Главная страница</h1>
            {/* <Loader /> */}
        </div>
    );
}
