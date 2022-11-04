import React, { useEffect, useState } from "react";
import { getCharacter } from "../../api/breakingBadService";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";

export default function CharacterPage() {
  const [characterData, setCharacterData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { characterName } = useParams();

  useEffect(() => {
    const getEpisode = async () => {
      setLoading(true);
      getCharacter(characterName)
        .then((character) => setCharacterData(character))
        .catch((e) => setError(true))
        .finally(() => setLoading(false));
    };
    getEpisode();
  }, []);

  const renderContent = () => {
    const { name, birthday, occupation, img, status, nickname } = characterData;
    return (
      <>
        <div className="text-lg">{name}</div>
        <div className="sm:flex justify-center m-5 py-5 rounded">
          <img
            className="w-60 h-80 rounded mb-5 sm:mr-5"
            src={img}
            alt="no img"
          ></img>
          <div className="text-start">
            <div>{`Called as ${nickname}`}</div>
            <div>{`Born in ${birthday}`}</div>
            <div>{status}</div>
            <div>Occupation:</div>
            <ul className="list-disc">
              {occupation &&
                occupation.map((singleOccupation) => {
                  return (
                    <li key={singleOccupation} className="ml-8">
                      {singleOccupation}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </>
    );
  };
  return (
    <div id="character_page">
      {error ? (
        <span>didnt find character</span>
      ) : (
        !loading && !error && renderContent()
      )}
      <Loader visible={loading} />
    </div>
  );
}
