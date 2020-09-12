import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <>
        <div class="about">
          <div class="top">
            <h2>Data Peserta Sanbercode Bootcamp ReactJs</h2>
            <div class="foto"> </div>
          </div>
          <ol>
            <li>Nama: Umar Abdul Jabar</li>
            <li>Email: umarjuabbar@gmail.com</li>
            <li>Sistem Operasi yang digunakan: Windows 7</li>
            <li>Akun Gitlab: umarjabbar</li>
            <li>Akun Telegram: Umar J</li>
          </ol>
        </div>
        <Link to="/home" className="btn-home">back to home</Link>
      </>
    )
  }
}

export default About