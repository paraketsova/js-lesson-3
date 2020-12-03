import React from 'react'

export default function LinkButtom({text, url}) {
  return (
    <a className='btn btn-block btn-outlike-primary'
    href={url}>
      {text}
    </a>
  )
}