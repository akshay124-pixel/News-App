import React from "react";

const Newsitem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span
            class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
