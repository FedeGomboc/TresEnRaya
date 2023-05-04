import React, { Component, Fragment }  from 'react'
import Square from './Componentes/Square'

export default function Board() {
  return (
  <Fragment>

  <div className='board-row'>
  <Square/>
  <Square/>
  <Square/>
  </div>

  <div className='board-row'>
  <Square/>
  <Square/>
  <Square/>
  </div>

  <div className='board-row'>
  <Square/>
  <Square/>
  <Square/>
  </div>

  </Fragment>
  )
}
