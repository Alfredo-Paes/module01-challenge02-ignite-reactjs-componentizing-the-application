import { IGenreResponseProps } from "../../../@types/IGenreResponseProps";
import { IMovieProps } from "../../../@types/IMoviesProps";

export interface IContentProps {
    selectedGenre: IGenreResponseProps;
    movies: IMovieProps[];
}