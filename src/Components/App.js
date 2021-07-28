import React from "react";
import TopBanner from "./TopBanner";
import PictureCards from "./PictureCards";

const App = () => {
  return (
      <>
      <TopBanner>
            <h1 style={{lineHeight: "50px"}}>Commission a painting</h1>
        </TopBanner>
      <PictureCards />
      </>
  )
};

export default App;