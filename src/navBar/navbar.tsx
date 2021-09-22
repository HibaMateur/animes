import React from "react";

import { Menu } from "antd";
import { UnorderedListOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e: any) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="mail" icon={<PlusSquareOutlined />}>
          Add Anime
          <Link to="/animes.form.component" />
        </Menu.Item>

        <Menu.Item key="alipay" icon={<UnorderedListOutlined />}>
          List Animes <Link to="/animes.list.component" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
