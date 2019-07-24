import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <div className="app">
        <section className="container">
          <header id="header">
            <div className="logo">Bape</div>
            <div className="menu">
              <nav>
                <a href="lookbook.html">Home </a>
                <a href="lookbook.html">Lookbook</a>
                <a href="lookbook.html">Menue</a>
                <a href="lookbook.html">Woman</a>
                <a href="lookbook.html">News</a>
              </nav>
            </div>
          </header>
        </section>
        <section id="content-area">
          <div className="col-md-6 model">
            <img src="/img/bape2.png" alt="" />
          </div>
          <div className="col-md-6 info">
            <div className="insider">
              <h5>Mens</h5>
              <h1>JAKET DRIPPING SOUSE</h1>
              <p>
                Mustache church-key man braid meh YOLO blue bottle pitchfork
                pabst normcore cred vice lumbersexual etsy fashion axe. Raclette
                intelligentsia microdosing, gochujang cred hot chicken flannel
                pabst. Austin air plant humblebrag retro kinfolk hammock. Tofu
                listicle copper mug, cronut kickstarter lomo poke drinking
                vinegar chillwave. Distillery cardigan lomo, la croix tote bag
                asymmetrical lo-fi tousled.
              </p>
              <div className="size">
                <div className="title">size</div>
                <ul className="sizes">
                  <li className="circle">S</li>
                  <li className="circle">M</li>
                  <li className="circle">L</li>
                  <li className="semi-circle">XL</li>
                  <li className="semi-circle">XXL</li>
                  <li className="semi-circle">CUSTOM</li>
                </ul>
              </div>
              <div className="action-btn">
                <a href="#" className="col-md-6 red-hollow-btn">
                  <span className=" price">$495</span>
                  add to cart
                </a>
                <a href="#" className=" col-md-6 lightgrey-btn">
                  find a store
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
