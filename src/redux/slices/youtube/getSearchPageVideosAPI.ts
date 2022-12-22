import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { YOUTUBE_DATA_API_KEY, YOUTUBE_DATA_API_URL } from "../../../utils/contstants"
import { parseData } from "../../../utils/parseData";
import { HomePageVideos } from "../../../types";

export const getSearchPageVideos = createAsyncThunk(
  "youtube/serachPageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtube: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_DATA_API_URL}/search?q=${searchTerm}&key=${YOUTUBE_DATA_API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );
    const parsedData: HomePageVideos[] = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
)