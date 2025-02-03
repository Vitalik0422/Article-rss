import { createAsyncThunk } from '@reduxjs/toolkit';
import { rssApi } from '../../api/rssApi';

export const rssData = createAsyncThunk('rss', async () => {
  try {
    const response = await rssApi.rssData();
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (err) {
    return err;
  }
});
