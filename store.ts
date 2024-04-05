import { configureStore, ThunkAction } from '@reduxjs/toolkit';

import BlogReducer from './src/api/blogAPI';

export const BLOG = 'BLOG'

interface BlogState {
    Blogs: Array<any>;
}

export interface BlogAction {
    type: typeof BLOG;
    payload: BlogState;
  }

export const store = configureStore({
  reducer: {
    blogs: BlogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, BlogAction>;