import { createStore } from "redux";

const animeInitState = {
  animes: [],
};

const animesReducer = (state = animeInitState, action: any) => {
  if (action.type === "ADD_ANIME") {
    return {
      animes: [
        ...state.animes,
        {
          id: action.payload.id,
          name: action.payload.name,
          mangaka: action.payload.mangaka,
          description: action.payload.description,
          genre: action.payload.genre,
        },
      ],
    };
  }
  if (action.type === "DELETE_ANIME") {
    return {
      animes: [
        ...state.animes.filter((anime: any) => anime.id !== action.payload.id),
      ],
    };
  }
  if (action.type === "FIND_ANIME") {
    return {
      animes: [
        ...state.animes,
        {
          id: state.animes.findIndex(
            (anime: any) => anime.id !== action.payload.id
          ),
          name: action.payload.name,
          mangaka: action.payload.mangaka,
          description: action.payload.description,
          genre: action.payload.genre,
        },
      ],
    };
  }
  if (action.type === "EDIT_ANIME") {
    return {
      animes: [
        {
          id: state.animes.findIndex(
            (anime: any) => anime.id !== action.payload.id
          ),
          name: action.payload.name,
          mangaka: action.payload.mangaka,
          description: action.payload.description,
          genre: action.payload.genre,
        },
        ...state.animes,
      ],
    };
  }
  return state;
};

const store = createStore(animesReducer as any);
export default store;
