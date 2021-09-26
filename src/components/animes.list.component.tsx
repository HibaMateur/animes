import { Button, Modal } from "antd";
import "./animes.list.styles.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { animes } from "../types/animes.types";

import { useState } from "react";

import { Link } from "react-router-dom";

const AnimeList = () => {
  const animes = useSelector<RootStateOrAny, any>((state) => state.animes);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  /*const Column = [
    {
      title: "Anime_Name",
      dataIndex: "Anime_Name",
      key: "Anime_Name",
    },
    {
      title: "Mangaka",
      dataIndex: "Mangaka",
      key: "Mangaka",
    },
    {
      title: "Genre",
      dataIndex: "Genre",
      key: "Genre",
    },
    {
      title: "Actions",
      dataIndex: "Actions",
      key: "Actions",
    },
  ];
  const datasource = [
    animes.map((anime: animes, i: number) => {
      return [
        {
          key: <span>{animes.id}</span>,
          Actions: <span>{animes.id}</span>,
          Genre: <span>{animes.genre}</span>,
          Mangaka: <span>{animes.mangaka}</span>,
          Anime_Name: <span>{animes.name}</span>,
        },
      ];
    }),
  ];*/
  const deleteAnimeHandler = (id: number) => {
    dispatch({
      type: "DELETE_ANIME",
      payload: {
        id,
      },
    });
  };

  const findAnimeHandler = (anime: any) => {
    dispatch({
      type: "FIND_ANIME",
      payload: {
        animes,
      },
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ height: "50px" }}>Anime Name</th>
          <th style={{ height: "50px" }}>Genre</th>
          <th style={{ height: "50px" }}>Mangaka</th>
        </tr>
      </thead>
      <tbody>
        {animes.map((anime: animes) => {
          return (
            <tr>
              <td style={{ backgroundColor: "white" }}>{anime.name}</td>
              <td style={{ backgroundColor: "white" }}>{anime.genre}</td>
              <td style={{ backgroundColor: "white" }}>{anime.mangaka}</td>
              <td>
                <Link to={`/anime/edit/${anime.id}`}>
                  <Button>Edit</Button>
                  <Button onClick={() => deleteAnimeHandler(anime.id)}>
                    Delete
                  </Button>
                </Link>
                <Link to={`/anime/details/${anime.id}`}>
                  <Button onClick={() => findAnimeHandler(anime)}>
                    Details
                  </Button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  //<Table columns={Column} dataSource={datasource}></Table>;
};
export default AnimeList;
/*
    <Card
      className="CardList"
      hoverable
      title={<span style={{ color: "#8079e0" }}>List Anime</span>}
      style={{ width: 800 }}
    >
      <ul className="listFont">
        {animes.map((anime: animes) => {
          return (
            <li>
              {anime.name} {anime.mangaka}
            </li>
          );
        })}
      </ul>
    </Card>*/
/*   <>
                  <Modal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleOk}
                  >
                    <ul>
                      <li key={anime.id}>{anime.description} </li>
                    </ul>
                  </Modal>
                </>*/
