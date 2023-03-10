import React from 'react';
import { HomePageVideos } from '../../types';
import { Link } from 'react-router-dom';

interface CardProps {
  data: HomePageVideos;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="w-64 h-60 gap-x-5 flex gap-3 flex-col">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img src={data.videoThumbnail} className="h-44 w-72" alt="thumbnail" />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img src={data.channelInfo.image} alt="channel" className="h-9 w-9 rounded-full" />
          </a>
        </div>
        <div>
          <h3>
            <Link to={`/watch/${data.videoId}`} className="line-clamp-2">
              {data.videoTitle}
            </Link>
          </h3>
          <div className="text-sm text-gray-400">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">{data.videoViews} views</span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
