import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogState {
  data: Array<any>;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  data: [],
  loading: false,
  error: null
};

const BlogSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<any>) => {
        console.log(action.payload.data)
      state.data = action.payload.data.data;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
        state.error = action.payload;
    },
  },
});

export const { setBlogs, setLoading, setError } = BlogSlice.actions;
export default BlogSlice.reducer;
