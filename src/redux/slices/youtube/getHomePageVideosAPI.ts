import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { HomePageVideos } from "../../../types";
import { YOUTUBE_DATA_API_KEY, YOUTUBE_DATA_API_URL } from "../../../utils/contstants"
import { parseData } from "../../../utils/parseData";
import { RootState } from "../../store"

export const getHomePageVideos = createAsyncThunk("youtube/homePageVideos", async(isNext: boolean, { getState }) => {
  const {
    youtube: { nextPageToken: nextPageTokenFromState, videos },
  } = getState() as RootState;
  const {data: {items, nextPageToken}} = await axios.get(`${YOUTUBE_DATA_API_URL}/search?maxResults=20&q="reactjs prjects"&key=${YOUTUBE_DATA_API_KEY}&part=snippet&type=video`)
  
  const parsedData:HomePageVideos[] = await parseData(items);
  return {parsedData: [...videos, ...parsedData], nextPageToken}
})