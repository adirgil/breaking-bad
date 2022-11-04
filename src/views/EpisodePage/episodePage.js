import React, { useEffect, useState } from "react";
import { getSingleEpisode } from "../../api/breakingBadService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

export default function EpisodePage() {
  const [episodeData, setEpisodeData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const getEpisode = async () => {
      setLoading(true);
      const episodeData = await getSingleEpisode(id);
      setEpisodeData(episodeData);
      setLoading(false);
    };
    getEpisode();
  }, []);

  const goToCharacterPage = (characterName) => {
    navigate(`/character/${characterName}`);
  };

  const backToHome = () => {
    navigate("/");
  };

  const renderContent = () => {
    const { title, air_date, characters } = episodeData;
    return (
      <div className="bg-slate-400 bg-opacity-20 m-5 py-5 rounded">
        <div>{`Title: ${title}`}</div>
        <div>{`Air Date: ${air_date}`}</div>
        <div>Characters:</div>
        {characters &&
          characters.map((character, index) => {
            return (
              <div
                className="no-underline hover:underline text-blue-600/50 cursor-pointer"
                key={character}
                onClick={() => goToCharacterPage(character)}
                data-testid={`character-${index}`}
              >
                {character}
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div id="episode_page">
      {!loading && (
        <>
          <div>
            {episodeData.season &&
              episodeData.episode &&
              `Season - ${episodeData.season} Episode - ${episodeData.episode}`}
          </div>
          {renderContent()}
          <div
            className="flex justify-center no-underline hover:underline
           text-blue-600/50 cursor-pointer bg-slate-400 
           bg-opacity-20 m-5 py-5 rounded"
            onClick={backToHome}
          >
            back to episodes list
          </div>
        </>
      )}
      <Loader visible={loading} />
    </div>
  );
}
