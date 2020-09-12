import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Contact extends Component {
  render() {
    return (
      <>
        <div class="contact">
          <div class="atas">
            <div class="data">
              <h2>Hubungi kami</h2>
              <p><b>Kantor : </b>di jalan belum jadi</p>
              <p><b>Nomor Telepon : </b>08XX-XXXX-XXXX</p>
              <p><b>Email : </b>email.contoh.com</p>
            </div>
            <div class="avatar"></div>
          </div>
          
          <div class="formulir">
            <h2>Kirimkan pesan</h2>
            <form action="#">
              <div class="isian">
                <label for="nama">Name</label><br/>
                <input type="text" id="nama" name="nama"/><br/>
              </div>
              <div class="isian">
                <label for="email">Email</label><br/>
                <input type="email" id="email" name="email"/><br/>
              </div>
              <div class="isian">
                <label>Sex </label><br/>
                <input type="radio" id="cewe" value="cewe" name="gender"/>
                <label for="cewe">Women </label>
                <input type="radio" id="cowo" value="cowo" name="gender"/>
                <label for="cowo">Man</label>
              </div>
              <div class="isian">
                <label for="isi">Message :</label><br/>
                <textarea name="isi" id="isi" cols="30" rows="10"></textarea><br/>
              </div>
              
              <button type="submit" name="submit" class="btn-kirim">Submit</button>
            </form>
          </div>
          <Link to="/home" className="btn-home">Back to home</Link>
        </div>
      </>
    )
  }
}

export default Contact;