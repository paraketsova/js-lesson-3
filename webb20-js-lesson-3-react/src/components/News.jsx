import React from 'react'
import Badge from './Badge'
import LinkButton from './LinkButton'

export default function News({news}) {
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
    </div>
      
  )
}

        
      
        {/* <div className=''>
            <div className=''>
              <UrlToImage urlToImage={urlToImage} />
            </div>
            <div className=''>
              <Title title={title} />
              <Description description={description} />
              <Content content={content} />
            </div>
            <div className=''>
              <PublishedAt publishedAt={publishedAt} />
              <Author author={author} />
            </div>
            <div className=''>
              <Url url={url} />
            </div>
            <div>
              <Source name={source.name} />
            </div>*/}
  
    