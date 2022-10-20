import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spanner from "./Spanner";
import PropTypes from "prop-types";
import '../components/news.css'

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];

  constructor() {
    super();
    console.log("I am a Construtor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7131f988e8c340468beb9463726a0c95&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let paarsedData = await data.json();
    console.log(paarsedData);
    this.setState({
      articles: paarsedData.articles,
      totalResults: paarsedData.totalResults,
      loading: false,
    });
  }

  prevHandle = async () => {
    console.log("PRevios");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=7131f988e8c340468beb9463726a0c95&page=${this.state.page -
      1}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let paarsedData = await data.json();
    console.log(paarsedData);

    this.setState({
      page: this.state.page - 1,
      articles: paarsedData.articles,
      loading: false,
    });
  };
  nextHandle = async () => {
    console.log("next");

    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=7131f988e8c340468beb9463726a0c95&page=${this.state.page +
        1}&pagesize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let paarsedData = await data.json();
      console.log(paarsedData);

      this.setState({
        page: this.state.page + 1,
        articles: paarsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center  mb-3 tophead">Top Headlines</h1>
        {this.state.loading && <Spanner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    discription={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.prevHandle}
            >
              &larr;Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.nextHandle}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
