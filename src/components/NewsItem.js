import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsurl, author, date,source } = this.props;
    return (
      <div className="my-3">
        
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zindex:'1'}}>
                {source}
               
              </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
             
            </h5>
            <p className="card-text">{discription}... </p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
            <a href={newsurl} className="btn btn-sm btn-dark btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
