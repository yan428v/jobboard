'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from '@/lib/redux/store';

interface StoreProviderProps {
    children: React.ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
    const storeRef = useRef<AppStore | null>(null);

    // При использовании SSR (Server-Side Rendering),
    // useEffect поможет обеспечить правильную инициализацию стора на клиенте

    // useEffect(() => {
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    // }, []);

    return <Provider store={storeRef.current}>{children}</Provider>;
}
