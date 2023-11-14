import React from "react";
import Card2 from "react-bootstrap/Card";
import "./Card.css"

function Card({ item }) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {item.map((val) => (
          <div key={val.id} className="col-md-4 col-sm-4">
            <div className="card-img-top ">
              <Card2 id="card2">
                <Card2.Img src="../images/JavaScript---Thumbnail-1200-x-630.jpg" />
                <Card2.Body>
                  <Card2.Title>
                    {" "}
                    <strong>
                      {" "}
                      {val.course_name}
                   
                    </strong>
                  </Card2.Title>
                  <Card2.Text>
                    {val.course_description.substring(-1, 50) + "........"}
                  </Card2.Text>
                </Card2.Body>
              </Card2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
