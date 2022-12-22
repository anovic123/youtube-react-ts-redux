import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from 'react-router-dom';
import { Navbar, Sidebar, Spinner } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { getSearchPageVideos } from '../../redux/slices/youtube/getSearchPageVideosAPI';
import { clearVideos } from '../../redux/slices/youtube/youtubeSlice';
import { HomePageVideos } from '../../types';


export const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const videos = useAppSelector((state) => state.youtube.videos)
  const searchTerm = useAppSelector((state) => state.youtube.searchTerm)

  React.useEffect(() => {
    dispatch(clearVideos())
    if (searchTerm === "") navigate("/")
    else {
      dispatch(getSearchPageVideos(false))
    }
  }, [dispatch, navigate, searchTerm])

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ? (
          <div className="py-8 pl-8 flex flex-col gap-5 w-full">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={'90vh'}
            >
              {videos.map((item: HomePageVideos) => {
                return (
                  <div className="my-5">
                    <div></div>
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};
