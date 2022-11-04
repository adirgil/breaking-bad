const orderEpisodesBySeason = (episodes) => {
  const seasons = {};
  episodes.forEach((episode) => {
    const { season } = episode;
    const fixedSeasonKey = season.replace(/\s/g, "");
    if (seasons.hasOwnProperty(fixedSeasonKey)) {
      seasons[fixedSeasonKey].push(episode);
    } else {
      seasons[fixedSeasonKey] = [];
      seasons[fixedSeasonKey].push(episode);
    }
  });

  return seasons;
};

export { orderEpisodesBySeason };
