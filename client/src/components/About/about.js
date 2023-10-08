import React from "react";
import Menu from "../menu";

export function About() {
  return (
    <>
      <Menu />
      <section id="aboutPage">
        <div className="container-fluid about-page">
          

            <div className="card border-0 d-flex">
            <div className="row">
                <div className="col-lg-8">
              <div className="card-body">
                <h1 className="card-title">
                  Welcome to Our Farm Fresh Country Chicken Eggs Page!
                </h1>
                <p>
                  At KR Farm, we take immense pride in delivering the finest
                  quality country chicken eggs straight from our idyllic farm to
                  your table. Our commitment to sustainable farming
                  <br />
                  practices, ethical animal care, and wholesome egg production
                  ensures that you're not just getting eggs; you're getting an
                  experience that connects you with nature and supports local agriculture.
                  <br />
                  
                </p>
              </div>
              <div className="card-body">
                <h1>Why Choose Our Country Chicken Eggs?</h1>
                <p>
                  <span className="bg-secondary text-white">
                    Pasture-Raised Bliss:
                  </span>{" "}
                  Our chickens roam freely on lush pastures, enjoying the fresh
                  air and sunlight. This results in eggs that have rich, golden
                  yolks and unbeatable taste.
                </p>
                <p>
                  <span className="bg-secondary text-white">
                    Ethical Farming:
                  </span>{" "}
                  We prioritize the well-being of our chickens. They're raised
                  in spacious environments that mimic their natural habitats,
                  providing them with ample room to move, socialize, and exhibit
                  natural behaviors.
                </p>
                <p>
                  <span className="bg-secondary text-white">
                    Nutrient-Rich Delights:
                  </span>{" "}
                  Studies have shown that eggs from pasture-raised chickens
                  contain higher levels of essential nutrients, such as Omega-3
                  fatty acids, vitamins (like A, E, and D), and antioxidants,
                  contributing to a healthier diet for you and your family.
                </p>
                <p>
                  <span className="bg-secondary text-white">
                    Local Sustainability:
                  </span>{" "}
                  By supporting us, you're investing in your local community.
                  Our eggs travel minimal distances, reducing carbon footprint,
                  and promoting sustainable food systems.
                </p>
                <p>
                  <span className="bg-secondary text-white">
                    Farm-to-Table Transparency:
                  </span>{" "}
                  Curious about our practices? We invite you to tour our farm
                  virtually or in person to witness firsthand how we raise our
                  chickens and produce these exquisite eggs.
                </p>
              </div>
              </div>
              <div className="col-lg-4">
                <img src="https://cdn4.sharechat.com/img_441565_1eaeb327_1681606439406_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=406_sc.jpg" className="container-fluid rooster"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
