import React from "react";
import styled from "styled-components";
import Section from "./Section";

const data = [
  {
    title: "Modal 3",
    description: "Order online for touchless delivery",
    backgroundImg: "model-3.jpg",
    rightBtnText: "Existing inventory",
    leftBtnText: "Custom order",
  },
  {
    title: "Modal Y",
    description: "Order online for touchless delivery",
    backgroundImg: "model-y.jpg",
    rightBtnText: "Existing inventory",
    leftBtnText: "Custom order",
  },
  {
    title: "Modal S",
    description: "Order online for touchless delivery",
    backgroundImg: "model-s.jpg",
    rightBtnText: "Existing inventory",
    leftBtnText: "Custom order",
  },
  {
    title: "Modal X",
    description: "Order online for touchless delivery",
    backgroundImg: "model-x.jpg",
    rightBtnText: "Existing inventory",
    leftBtnText: "Custom order",
  },
  {
    title: "Solar Panels",
    description: "Order online for touchless delivery",
    backgroundImg: "solar-panel.jpg",
    rightBtnText: "Existing inventory",
    leftBtnText: "Custom order",
  },
  {
    title: "Solar Roof",
    description: "Order online for touchless delivery",
    backgroundImg: "solar-roof.jpg",
    rightBtnText: "Order now",
    leftBtnText: "Learn more",
  },
  {
    title: "Accessories",
    backgroundImg: "accessories.jpg",
    leftBtnText: "Shop now",
  },
];

function Home() {
  return (
    <Container>
      {data.map((item) => {
        return <Section {...item} />
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
