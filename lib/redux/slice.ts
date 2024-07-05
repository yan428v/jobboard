import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterButtonState } from '@/lib/types/types';

interface FiltersState {
    currentDate: string;
    currentCity: string;
    categories: string[];
    filterButtonState: FilterButtonState
}

const initialState: FiltersState = {
    currentDate: 'allTime',
    currentCity: 'allCountry',
    categories: ['Все категории'],
    filterButtonState: FilterButtonState.Hide,

};

const filtersSlice = createSlice({
    name: 'filtersSlice',
    initialState,
    reducers: {
        setDateFilter(state, action: PayloadAction<string>) {
            state.currentDate = action.payload;
            state.filterButtonState = FilterButtonState.Apply;
        },
        setCityFilter(state, action: PayloadAction<string>) {
            state.currentCity = action.payload;
            state.filterButtonState = FilterButtonState.Apply;
        },
        // Добавление категории в фильтр
        addCategoryFilter(state, action: PayloadAction<string>) {
            if (action.payload === 'Все категории') {
                state.categories = ['Все категории'];
            } else {
                state.categories = state.categories.filter((category) => category !== 'Все категории');
                if (!state.categories.includes(action.payload)) {
                    state.categories.push(action.payload);
                }
                state.filterButtonState = FilterButtonState.Apply;
            }
        },
        // Удаление категории из фильтра
        removeCategoryFilter(state, action: PayloadAction<string>) {
            state.categories = state.categories.filter((category) => category !== action.payload);
            if (state.categories.length === 0) {
                state.categories = ['Все категории'];
            }
            state.filterButtonState = FilterButtonState.Apply;
        },
        setFilterButtonState(state, action: PayloadAction<FilterButtonState>) {
            if (initialState.currentDate !== 'allTime'
        || initialState.currentCity !== 'allCountry'
        || initialState.categories[0] !== 'Все категории') {
                state.filterButtonState = FilterButtonState.Apply;
            }
            state.filterButtonState = action.payload;
        },
        resetFilters(state) {
            state.currentDate = 'allTime';
            state.currentCity = 'allCountry';
            state.categories = ['Все категории'];
            state.filterButtonState = FilterButtonState.Apply;
        },

    },
});

export const {
    setDateFilter,
    setCityFilter,
    addCategoryFilter,
    removeCategoryFilter,
    setFilterButtonState,
    resetFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
