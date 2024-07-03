// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//
// interface DateFilterState {
//     currentDate: string;
// }
//
// const initialState: DateFilterState = {
//     currentDate: 'week',
// };
//
// const dateFilterSlice = createSlice({
//     name: 'dateFilter',
//     initialState,
//     reducers: {
//         setDateFilter(state, action: PayloadAction<string>) {
//             state.currentDate = action.payload;
//         },
//     },
// });
//
// export const { setDateFilter } = dateFilterSlice.actions;
// export default dateFilterSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DateFilterState {
    currentDate: string;
}

const initialState: DateFilterState = {
    currentDate: 'week', // Установка начального состояния
};

const dateFilterSlice = createSlice({
    name: 'dateFilter',
    initialState,
    reducers: {
        setDateFilter(state, action: PayloadAction<string>) {
            state.currentDate = action.payload; // Обновление состояния
        },
    },
});

export const { setDateFilter } = dateFilterSlice.actions;
export default dateFilterSlice.reducer;
