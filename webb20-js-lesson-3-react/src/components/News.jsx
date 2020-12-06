import React, {useState} from 'react'
import Badge from './Badge'
import LinkButton from './LinkButton'
import Comments from './Comments';


export default function News({news}) {

  const [likes, setLikes] = useState(news.likes)
  
  function handleOnClick() {
    setLikes(likes + 1)
  }

  return (
    <div className="col-md-6 col-xl-4">
      <div className="col-md-12">
        <img className="img-fluid" src={news.urlToImage} />
        <h2>{news.title}</h2>
        <strong>{news.description}</strong>
        <p>{news.content}</p>
      </div>


      <div className="row">
        <div className="col-xs-6 col-md-6 col-xl-6">
          <p><small>{news.publishedAt}</small></p>
        </div>
        <div className="col-xs-6 col-md-6 col-xl-6 text-right">
          <Badge text={news.author} />
        </div>
      </div>
      <div className="col-md-12">
        <LinkButton text="Gå till nyheten" url={news.url} />
        <p className="text-center">{news.source.name}</p>
      </div>
      <Comments />
    </div>
      
  )
}

    