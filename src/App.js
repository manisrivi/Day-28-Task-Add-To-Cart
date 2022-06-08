import { useState } from "react";
import "./App.css";
import data from "./data";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

export default function App() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [productlist, setProductlist] = useState(data);

  let addtocard = (element, id) => {
    let temp = productlist;
    temp[id].isDisabled = true;
    setCart([...cart, element]);
    setProductlist(temp);
  };
  const removefromCart = (element) => {
    setCart(cart.filter((e) => e !== element));
    console.log(cart);
    let index = element.id - 1;
    let temp = productlist;
    temp[index].isDisabled = false;
    setProductlist(temp);
  };

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand font-weight-bold">ShopCart</a>
        <h3 class="text-info">Welcome To ShopCart</h3>
        <div class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Products"
            aria-label="Search"
            onChange={(event) => setQuery(event.target.value)}
          />
          {/* cart start */}

          <button
            type="button"
            class="btn btn-outline-success"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart{" "}
            {cart.length}
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Cart Items
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  {/* Remove Item start*/}
                  <ul className="list-group">
                    {cart.map((element, index) => (
                      <li className="list-group-item " key={index}>
                        <span className="data">
                          Product Name:{" "}
                          <span class="text-success font-weight-bold">
                            {element.name}
                          </span>
                        </span>
                        ,{" "}
                        <span className="data">
                          Price:{" "}
                          <span class="text-success font-weight-bold">
                          ₹ {element.price}
                          </span>
                        </span>
                        <button
                          type="button"
                          className="close"
                          onClick={() => removefromCart(element)}
                        >
                          {" "}
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  {/* Remove Item End */}
                </div>
              </div>
            </div>
          </div>
          {/* cart End */}
        </div>
      </nav>
      {/* Carousel start*/}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
      {/* Carousel End */}
      <div className="container mt-5">
        <div className="row">
          {productlist
            .filter((g) => g.name.toLowerCase().includes(query))
            .map((element, index) => (
              <div className="col-lg-3 col-sm-6 mt-3 mb-3 text-center">
                {/* card start */}
                <div class="" style={{ width: "12rem" }}>
                  <img
                    src={element.img}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "200px", width: "100px" }}
                  />
                  <div class="card-body">
                    <h6 class="card-title">{element.name}</h6>
                    <p>{element.rating}</p>
                    <p class="card-text font-weight-bold">₹ {element.price}</p>
                    <button
                      disabled={element.isDisabled}
                      class="btn btn-warning card_Btn"
                      onClick={() => addtocard(element, index)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                {/* card End */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
