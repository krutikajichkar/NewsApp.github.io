import React  from 'react';

const NewsItem = (props) => {
  
        let {title,description,imageurl,newsurl,publishedAt,author} = props;
        return (
            <>
                <div >
                    <div className="card" >
                        <img src={!imageurl?"https://tass.com/img/blocks/common/tass_logo_share_ru.png":imageurl}  className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> {title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(publishedAt).toDateString()}</small></p>
                            <a href={newsurl} rel='noreferreryn' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        );
    
}

export default NewsItem;