import React, { Component } from 'react'

const Underline = ({color}) => {
  return (
    <div className={`w-24 h-1 border-b-8 border-${color}`} style={{ marginLeft: '-15px', marginTop: '-11.25px' }} />
  )
}

export default Underline