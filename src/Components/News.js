import React ,{useEffect , useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
   let [article , setArticle] = useState([]);
   let [loading , setLoading] = useState(true);
   let [page , setPage] = useState(1);
   let [totalResults , setTotalResults] = useState(0);
   
     const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      useEffect( async () => {
        document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8aa84562f718437b9ee12c5acb5ba886&page=1&pageSize=${props.pageSize}`;
        setLoading({loading:true})
        let data = await fetch(url);
        props.setProgress(50);
        let parseData = await data.json();
        props.setProgress(80);
        setArticle(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false)   
         props.setProgress(100);
      }, []);
      
     
       const fetchMoreData = async() =>{
            
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8aa84562f718437b9ee12c5acb5ba886&page=${page+1}&pageSize=${props.pageSize}`;
            setPage(page + 1);
            let data = await fetch(url);
            let parseData = await data.json();
            setArticle(article.concat(parseData.articles));
            setTotalResults(parseData.totalResults);
            setLoading(false)  ;
            
        }

        
    
        return (
            <>
            
                <center><h2  style={{ margin:'35px 0px' , marginTop : '90px'}}>{capitalizeFirstLetter(props.category)}-Top Headlines</h2></center>
                {loading && <Spinner/>}

                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length !== totalResults}
                    loader={<Spinner/>}
                >

                <div className="container">
                    <div className='row'>
                  {article.map((element) => {
                      return <div className="col-md-4 my-3" key={element.url}>
                          <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage}
                            newsurl={element.url} author={element.author} publishedAt={element.publishedAt}/>
                        </div>
                  })}
                    </div>
                </div>

                </InfiniteScroll>
            </>
        );
    
}
News.defaultProps ={
    country : 'us',
    category :'general',
    pageSize : 8
}

News.propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number
}

export default News;