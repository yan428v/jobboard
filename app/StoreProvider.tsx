'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/redux/store';
import { initializeCount } from '../lib/features/counter/counterSlice';

// Если вам необходимо инициализировать хранилище данными из родительского компонента,
// то определите эти данные как свойство в клиентском StoreProvider компоненте
// и используйте действие Redux в срезе, чтобы задать данные в хранилище
export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
        storeRef.current.dispatch(initializeCount(count));
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
