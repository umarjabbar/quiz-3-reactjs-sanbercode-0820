import React from 'react';

const Logout = () => {
  localStorage.setItem("login", "false")
  window.location.href = '/login'
  return(
    <>
    </>
  )
}

export default Logout