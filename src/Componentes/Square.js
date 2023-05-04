import React, { Component, Fragment }  from 'react'
import HacerClick from '../Funciones'
import { useState } from 'react'

export default function Square() {
    const [valor, setValor] = useState(null)

    return <button className="square" onClick={HacerClick}> </button>
}