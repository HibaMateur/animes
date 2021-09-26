import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import { Card } from "antd";

const AnimesDetails = () => {
  const anime = useSelector<RootStateOrAny, any>((state) => state.animes);

  return (
    <div>
      <Card hoverable title={"Users :"}>
        <ul>
          <li key={anime.id}>
            {anime.name} {anime.description}
          </li>
        </ul>
      </Card>
    </div>
  );
};
export default AnimesDetails;
