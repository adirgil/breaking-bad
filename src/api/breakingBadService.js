const host = "https://www.breakingbadapi.com/api/";

const getEpisodesList = async () => {
  const url = `${host}episodes?series=Breaking+Bad`;

  try {
    const response = await fetch(url);
    const episodes = await response.json();
    return episodes;
  } catch (error) {
    console.error(`cannot get episodes. error: ${error}`);
  }
};

const getSingleEpisode = async (id) => {
  const url = `${host}episodes/${id}`;

  try {
    const response = await fetch(url);
    const episode = await response.json();
    return episode[0];
  } catch (error) {
    console.error(`cannot get episode. error: ${error}`);
  }
};

const getCharacter = async (name) => {
  const url = `${host}characters?name=${name.trim()}`;
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const character = await response.json();
      console.log(character);
      if (character[0]) return character[0];
      else throw new Error("failed to fetch");
    } else {
      throw new Error("failed to fetch");
    }
  } catch (error) {
    throw new Error(`cannot get character. error: ${error}`);
  }
};

export { getEpisodesList, getSingleEpisode, getCharacter };
