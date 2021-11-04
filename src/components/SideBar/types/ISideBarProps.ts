import { IGenreResponseProps } from "../../../@types/IGenreResponseProps";

export interface ISideBarProps {
    genres: IGenreResponseProps[];
    selectedGenreId: number;
    handleClickButton: (genreId: number) => void;
}