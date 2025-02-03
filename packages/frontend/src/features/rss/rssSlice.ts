import { createSlice } from '@reduxjs/toolkit';
import { rssData } from './rssThunk';

interface RssData {
  name: string | null;
  url: string | null;
  isLoading: boolean;
}

const initialState: RssData = {
  name: null,
  url: null,
  isLoading: false,
};

export const rssSlice = createSlice({
  name: 'Rss',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(rssData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(rssData.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(rssData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions: rssActions } = rssSlice;
export const { reducer: rssReducer } = rssSlice;
