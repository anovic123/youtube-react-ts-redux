import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../../../types';
import { RootState } from '../../store';
import { getHomePageVideos } from './getHomePageVideosAPI';

const initialState:InitialState = {
  videos: [],
  currentPlaying:null,
  searchTerm: "",
  searchResults:[],
  nextPageToken:null,
  recommendedVideos:[],
}

const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers:(builder => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    })
  })
})

export default youtubeSlice.reducer;