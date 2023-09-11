import React from 'react'
import react, { useEffect, useState } from 'react'

const Progression = (props) => {
    const { bgcolor, progress, completed } = props;
  
    const containerStyles = {
      height: 5,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 5,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      transition: 'width 1s ease-in-out',
      borderRadius: 'inherit',
      textAlign: 'right',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold',
    }
  return (
    <div style={containerStyles}>
    <div style={fillerStyles}>
      <span style={labelStyles}>{`${completed}%`}</span>
    </div>
  </div>
  )
}

export default Progression