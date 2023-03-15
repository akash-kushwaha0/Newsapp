import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("Hello I am Constructor from News Component")
        this.state = {
            articles: [],
            loading: true

        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dcc8c278ea5f4e38b6e2970430fbae25"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }

    render() {
        return (
            <div className="container my-3">
                <h1>NewsWalla - Top Headlines</h1>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""}
                                description={element.description ? element.description : ""} imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News