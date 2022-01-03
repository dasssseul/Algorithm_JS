// { 'classic' : { total : 1450, songs : [{ play : 800, index : 3 },{ play : 500, index : 0 }] } }

function solution(genres, plays) {
  const albumMap = new Map();
  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const currData = albumMap.get(genre) || { total: 0, songs: [] };
      albumMap.set(genre, {
        total: currData.total + play,
        songs: [...currData.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...albumMap]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}
