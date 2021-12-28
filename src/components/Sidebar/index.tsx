import React from "react";
import { PopularList, RecentList } from "./../";
import "./style.scss";

interface Props {
  resource: {
    nowPlaying: {
      read: Function,
    },
    upcoming: {
      read: Function,
    },
  };
}

const Sidebar: React.FC<Props> = ({ resource }) => {
  const nowPlaying = resource.nowPlaying.read();
  const upcoming = resource.upcoming.read();
  return (
    <div className="product__sidebar">
      <RecentList title="Now playing" movies={nowPlaying.data.results} />
      <PopularList title="Upcoming" movies={upcoming.data.results} />
    </div>
  );
};

export default Sidebar;