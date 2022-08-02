import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
const WhatsappFloatingButton = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=9448276944'
      target='#'
      className='d-flex justify-content-center align-items-center shadow'
      style={{
        zIndex: '99',
        height: '65px',
        width: '65px',
        borderRadius: '50%',
        fontSize: '45px',
        backgroundColor: '#25d366',
        cursor: 'pointer',
        color: 'white',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        '&:hover': {
          backgroundColor: 'white',
          color: 'black',
        },
      }}
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsappFloatingButton
