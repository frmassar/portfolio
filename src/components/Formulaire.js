import React from 'react';
import '../css/App.css'
const Formulaire = (props) => {


  console.log(props.isHidden)

  const handleChangePage = () => {
    setTimeout(()=>{
      props.history.push('/');
    }, 3000)
  }

  return (
      <div className="background">
        <span className={props.isHidden?"bh":"bhHidden"}></span>
      <div className="container">
        <div className="screen">
          <div className="screen-header">
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT INFO : +32 476 75 89 04</div>
            </div>
            <div className="screen-body-item">
              <form className="app-form" onSubmit={(e)=>props.addForm(e)}>
                <div className="app-form-group">
                  <input className="app-form-control" name="name" placeholder="NAME" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" name="email" placeholder="EMAIL"/>
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" name="num" placeholder="CONTACT NO"/>
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" name="message" placeholder="MESSAGE"/>
                </div>
                <div className="app-form-group buttons">
                  <div className={props.isHidden?"paper":"paperHidden"}></div>
                    <button onClick={()=>handleChangePage()} type="submit" className={props.isHidden? "button":"app-form-button"}>
                      SEND
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formulaire;