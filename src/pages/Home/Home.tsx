import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Navbar, Sidebar, Card, Spinner } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { getHomePageVideos } from '../../redux/slices/youtube/getHomePageVideosAPI';
import { clearVideos } from '../../redux/slices/youtube/youtubeSlice';
import { HomePageVideos } from '../../types';
// import { v4 } from 'uuid';

export const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtube.videos);

  React.useEffect(() => {
    return () => {
      dispatch(clearVideos())
    };
  }, [dispatch])

  React.useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: '7.5vh' }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: '92.5vh' }}>
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={'90vh'}
          >
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-20 p-8">
              {videos.map((item: HomePageVideos, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};
