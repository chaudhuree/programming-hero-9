import React from "react";
import Slider from "../components/Slider";
import ProcedureToJoin from "../components/ProcedureToJoin";
import Statistics from "../components/Statistics";
import NewsLetter from "../components/NewsLetter";
import ShowData from "../components/ShowData";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <section className="container mx-auto my-8">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />
      <ProcedureToJoin />
      <ShowData />
      <Statistics />
      <NewsLetter />
      
    </section>
  );
}

export default Home;
