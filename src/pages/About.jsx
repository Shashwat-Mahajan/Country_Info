import React from "react";
import countryFacts from "../api/CountryData.json";

const About = () => {
  return (
    <section>
      <h2 className="container-title">
        Here are the interesting facts about the world
        <br />
        We'er excited to share with you!
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((fact, index) => (
          <div className="card">
            <div className="container-card bg-blue-box">
              <p className="card-title">{fact.country}</p>


              <p>
                <span className="card-description">Capital:{fact.capital}</span>

              </p>
              <p>
                <span className="card-description">Population:{fact.population}</span>
              </p>
              <p>
                <span className="card-description">Interesting-fact:{fact.interesting_fact}</span>
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
