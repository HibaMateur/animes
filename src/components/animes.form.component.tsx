import { Button, Card, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./animes.form.style.css";

const AnimesForm = () => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 15 },
  };
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [mangaka, setMangaka] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [form] = Form.useForm();
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const mangakaChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMangaka(e.target.value);
  };
  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const descripChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const genreChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  };

  const addAnimeHandler = () => {
    dispatch({
      type: "ADD_ANIME",
      payload: {
        name: name,
        mangaka: mangaka,
        id: id,
        description: description,
        genre: genre,
      },
    });
  };

  return (
    <Card
      className="CardForm"
      title={<span style={{ color: "#8079e0" }}>Add Anime</span>}
      hoverable
      style={{ width: 800 }}
    >
      <Form {...layout} form={form} onFinish={addAnimeHandler}>
        <Form.Item
          name="id"
          rules={[{ required: true, message: "Please input your ID!" }]}
          label={<span style={{ color: "#8079e0" }}>ID</span>}
        >
          <Input
            type="number"
            className="inputForm"
            name="id"
            placeholder="Enter Anime id"
            onChange={idChangeHandler}
          ></Input>
        </Form.Item>
        <Form.Item
          label={<span style={{ color: "#8079e0" }}>Anime Name</span>}
          name="name"
          rules={[{ required: true, message: "Please input Anime Name!" }]}
        >
          <Input
            className="inputForm"
            name="name"
            placeholder="Enter Anime Name"
            onChange={nameChangeHandler}
          ></Input>
        </Form.Item>

        <Form.Item
          label={<span style={{ color: "#8079e0" }}>Mangaka</span>}
          name="mangaka"
          rules={[
            {
              required: true,
              message: "Please input the Name of the Mangaka!",
            },
          ]}
        >
          <Input
            className="inputForm"
            name="mangaka"
            placeholder="Enter Mangaka Name"
            onChange={mangakaChangeHandler}
          ></Input>
        </Form.Item>
        <Form.Item
          label={<span style={{ color: "#8079e0" }}>Description</span>}
          name="description"
          rules={[{ required: true, message: "Please input a description!" }]}
        >
          <Input
            className="inputForm"
            name="description"
            placeholder="Enter Description"
            onChange={descripChangeHandler}
          ></Input>
        </Form.Item>
        <Form.Item
          label={<span style={{ color: "#8079e0" }}>Genre</span>}
          name="genre"
          rules={[{ required: true, message: "Please input the genre!" }]}
        >
          <Input
            className="inputForm"
            name="genre"
            placeholder="Enter Genre"
            onChange={genreChangeHandler}
          ></Input>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 15 }}>
          <Button htmlType="submit" className="button">
            Add Anime
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default AnimesForm;
