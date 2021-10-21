import imageNotFound from "../404_amarillo.jpg"

export function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : imageNotFound;
}