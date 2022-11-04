import React from "react";

export default function EpisodeBox({ episode, goToEpisode }) {
  const { title, air_date, episode_id, episode: episodeNumber } = episode;
  return (
    <div
      className="bg-amber-500 bg-opacity-20 rounded shadow-md shadow-amber-400 p-2 mr-4 mb-4 cursor-pointer"
      onClick={() => goToEpisode(episode_id)}
      data-testid={`episode-number-${episode_id}`}
    >
      <span>{`${episodeNumber} - ${title} - ${air_date}`}</span>
    </div>
  );
}
