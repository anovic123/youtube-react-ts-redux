import React from 'react';
import { Navbar, Sidebar } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { getHomePageVideos } from '../../redux/slices/youtube/getHomePageVideosAPI';

export const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtube.videos)

  React.useEffect(() => {
    dispatch(getHomePageVideos(false))
  }, [dispatch])

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{height: "7.5vh"}}>
        <Navbar />
      </div>
      <div className="flex" style={{height: "92.5vh"}}>
        <Sidebar />
      </div>
    </div>
  )
}