import { createStore } from "redux";

const animeInitState = {
  animes: [],
  anime: {},
};

const animesReducer = (state = animeInitState, action: any) => {
  if (action.type === "ADD_ANIME") {
    return {
      animes: [
        ...state.animes,
        {
          state,
          id: action.payload.anime.id,
          name: action.payload.anime.name,
          mangaka: action.payload.anime.mangaka,
          description: action.payload.anime.description,
          genre: action.payload.anime.genre,
        },
      ],
    };
  }
  if (action.type === "DELETE_ANIME") {
    return {
      animes: [
        ...state.animes.filter((anime: any) => anime.id !== action.payload.id),
      ],
      state,
    };
  }
  if (action.type === "FIND_ANIME") {
    return {
      animes: [
        state,
        state.animes.findIndex((anime: any) => anime.id === action.payload.id),
      ],
      ...state.animes,
    };
  }
  if (action.type === "EDIT_ANIME") {
    /* const idx = state.animes.findIndex(
      (anime: any) => anime.id === action.payload.id
    );*/

    return {
      ...state,
      animes: state.animes.map((anime: any) =>
        anime.id === action.payload.anime.id
          ? {
              ...anime,
              name: action.payload.anime.name,
              genre: action.payload.anime.genre,
              mangaka: action.payload.anime.mangaka,
              description: action.payload.anime.description,
            }
          : anime
      ),

      /*   animes: [
        {
          id: state.animes.findIndex(
            (anime: any) => anime.id === action.payload.id
          ),
          name: action.payload.name,
          mangaka: action.payload.mangaka,
          description: action.payload.description,
          genre: action.payload.genre,
        },
        ...state.animes,
      ],*/
    };
  }
  return state;
};

const store = createStore(animesReducer as any);
export default store;
