import React from "react";
import "./App.css";

export default function App() {
  const blogs = [
    { heading: "hello", info: "helookjfljsadlkjfl" },
    { heading: "hello", info: "helookjfljsadlkjfl" },
  ];
  return (
    <div className="card__wrapper">
      <Card
        heading="Lorem, ipsum dolor"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      <Card
        heading="Lorem, ipsum dolor"
        info="exercitationem facilis modi omnis at odit harum, animi ab iste sunt."
      />
      {blogs.map(({ heading, info }) => {
        return (
          <a href="#" className="card">
            <div className="card__heading">{heading}</div>
            <div className="card__info">{info}</div>
          </a>
        );
      })}
      <Navbar />
    </div>
  );
}

function Card({ heading, info }) {
  return (
    <a href="#" className="card">
      <div className="card__heading">{heading}</div>
      <div className="card__info">{info}</div>
    </a>
  );
}

function Navbar() {
  return <div>sldkfja;lsdkjflk;dsaj;flkjsal;dkjfklsadjflkjsadf;klj</div>;
}
