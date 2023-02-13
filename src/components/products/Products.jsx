import React from "react";
import Popup from "reactjs-popup";
import "./products.css";
import data from "./Data";

function Products() {
  const preTextForMessage = "Notify me when ";
  const appendTextForMessage = " becomes available to buy.";

  const handleClick = (title) => {
    window.location.href = "#contact";
    document.getElementById("message").value =
      preTextForMessage + title + appendTextForMessage;
    document.getElementById("contact-submit").click();
  };

  return (
    <section id="products">
      <div className="container product_container">
        {data.map(({ id, image, title, description, content }) => {
          return (
            <article key={id} className="product_item">
              <div className="product_description">
                <h3 key={title}>{title}</h3>
                <p key={description}>{description}</p>
              </div>
              <div className="product_button">
                <Popup
                  trigger={
                    <button className="btn btn_primary">Learn more</button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal">
                      <div className="modal_title">
                        <div>
                          <h3>{title}</h3>
                        </div>
                      </div>

                      <div className="modal_content">
                        <div className="modal_image">
                          <img src={image} alt={title} />
                        </div>
                        <div className="content">
                          {content}
                          <div className="content_buy_button">
                            <button
                              onClick={() => {
                                close();
                                handleClick(title);
                              }}
                              className="btn btn_primary"
                            >
                              Notify Me
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
              <div className="product_item_image">
                <img key={image} src={image} alt={title} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
