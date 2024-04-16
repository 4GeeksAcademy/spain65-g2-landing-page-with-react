import React from "react";

export const Footer = () => {
    return (
        <div className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <div className='p-1 mt-5'></div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright :
        <a style={{textDecoration: 'none'}}className='text-white' href='www.hamburguesasroberto.com'>
        &nbsp; Roberto Burguers
        </a>
      </div>
    </div>
    )
}