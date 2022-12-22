import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../../../types';
import { RootState } from '../../store';
import { getHomePageVideos } from './getHomePageVideosAPI';
import { getSearchPageVideos } from './getSearchPageVideosAPI';
import { getRecommendedVideos } from './getRecommendedVideos';

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
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    }
  },
  extraReducers:(builder => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    })
    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    })
    builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
      state.recommendedVideos = action.payload.parsedData;
    });
  })
})

export const { clearVideos, changeSearchTerm, clearSearchTerm } = youtubeSlice.actions

export default youtubeSlice.reducer;