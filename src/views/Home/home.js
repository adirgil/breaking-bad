import React, { useEffect, useState } from "react";
import { getEpisodesList } from "../../api/breakingBadService";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import EpisodeBox from "./components/episodeBox";
import { orderEpisodesBySeason } from "./helpers/helper";

export default function Home() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getEpisodes = async () => {
      setLoading(true);
      const episodes = await getEpisodesList();
      setEpisodes(episodes);
      setLoading(false);
    };
    getEpisodes();
  }, []);

  const renderEpisodesList = () => {
    if (episodes && episodes.length > 0) {
      const episodesBySeasons = orderEpisodesBySeason(episodes);

      return Object.keys(episodesBySeasons).map((seasonKey, index) => {
        const episodes = episodesBySeasons[seasonKey];
        return (
          <div
            key={seasonKey}
            className="px-3"
            data-testid={`season-${index + 1}`}
          >
            <div className="text-lg bg-lime-700 bg-opacity-30 w-40 rounded shadow-lg my-3">
              {`Season ${seasonKey}`}
            </div>
            <div className="flex flex-wrap">
              {episodes.map((episode) => (
                <EpisodeBox
                  key={episode.episode_id}
                  episode={episode}
                  goToEpisode={goToEpisode}
                />
              ))}
            </div>
          </div>
        );
      });
    }
  };

  const goToEpisode = (id) => {
    navigate(`/episode/${id}`);
  };

  return (
    <div id="home">
      {!loading && <div>{renderEpisodesList()}</div>}
      <Loader visible={loading} />
    </div>
  );
}
