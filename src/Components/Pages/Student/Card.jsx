import React from "react";
import Card2 from "react-bootstrap/Card";
import "./Card.css"

function Card({ item }) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
       
          <div className="col">
          {item.map((val) => (
            <div  key={val.id} className="course" >
              <h5> <strong>{val.course_name}</strong></h5>
              <p>{val.course_description.substring(-1, 50) + "........"}</p>
              {/* <Card2 id="card2">
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
              </Card2>  */}
              
            </div>
             ))}
          </div>
       
      </div>
    </div>
  );
}

export default Card;
