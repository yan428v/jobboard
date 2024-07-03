// 'use client';
//
// import React, { useRef } from 'react';
// import { Provider } from 'react-redux';
// import { makeStore, AppStore } from '../lib/redux/store';
// // import { initializeCount } from '../lib/features/counter/counterSlice';
//
// // Если вам необходимо инициализировать хранилище данными из родительского компонента,
// // то определите эти данные как свойство в клиентском StoreProvider компоненте
// // и используйте действие Redux в срезе, чтобы задать данные в хранилище
//
// export default function StoreProvider({
//     children,
// }: {
//     children: React.ReactNode
// }) {
//     const storeRef = useRef<AppStore>();
//     if (!storeRef.current) {
//         // Create the store instance the first time this renders
//         storeRef.current = makeStore();
//         // storeRef.current.dispatch(initializeCount(count));
//     }
//
//     return <Provider store={storeRef.current}>{children}</Provider>;
// }

'use client';

import React, { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from '../lib/redux/store';

interface StoreProviderProps {
    children: React.ReactNode; // Явное указание типа для children
}

export default function StoreProvider({ children }: StoreProviderProps) {
    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        // Создаем стор при первой загрузке компонента
        storeRef.current = makeStore();
    }

    // При использовании SSR (Server-Side Rendering), этот код поможет обеспечить правильную инициализацию стора на клиенте
    useEffect(() => {
        if (!storeRef.current) {
            storeRef.current = makeStore();
        }
    }, []);

    return <Provider store={storeRef.current}>{children}</Provider>;
}
