import React, { Component } from 'react'
import dataGlasses from "../Data/dataGlasses.json";

export default class ChooseGlass extends Component {

  state = {
    glassesCurrent: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
    
  }

  renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return  <img onClick={() => {
        this.changeGlasses(glassesItem)
      }} 
      style={{
        width:'100px',
        padding: '6px',
        margin: '6px',
        cursor: "pointer",
        border: '1px solid #ddd',
        borderRadius:'10px'
      }} key={index} src={glassesItem.url} alt="glasses" />
  })
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      //Đưa newGlasses mới vào glassesCurrent
      glassesCurrent: newGlasses
    })
  }

  render() {

    const keyFrame =` @keyframes animChangeGlasses${Date.now()} {
      from {
        width: 0;
      }
      to{
        width: 150px;
      }
    }`;
    const styleGlasses = {
      width: '150px',
      top: '58px',
      right: '150px',
      opacity: '.9',
      animation: `animChangeGlasses${Date.now()} 1s`
    }

    const styleInfo ={
      width: '56%',
      backgroundColor: 'rgba(0,0,0,0.7)',
      bottom: '91px',
      right: '-100px',
      fontSize: '14px',
      fontWeight: '700',
      height: '25%',
      textAlign: 'left',
      paddingLeft: '10px',
    }

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          minHeight: "1000px",
          backgroundSize: '1300px'
        }}
      >
      <style>
      {keyFrame}
      </style>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            minHeight: "1000px",
          }}
          className="">
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              minHeight: "100px",
            }} >
            <h3 className="text-light text-center pt-4">TRY GLASS ONLINE</h3>
          </div>
          <div className="container">
            <div className="row text-center mt-4">
              <div className="col-6  ">
                <div className="position-relative">
                <img style={{width:'250px', height: '250px'}} src='./glassesImage/model.jpg' alt="model" />
                  <img className="position-absolute" style={styleGlasses} src={this.state.glassesCurrent.url}  alt="v1" />
                </div>
                <div style={styleInfo} className="position-relative text-light">
                  <h4 >{this.state.glassesCurrent.name}</h4>
                <p>{this.state.glassesCurrent.desc.length > 70 ? <p>{this.state.glassesCurrent.desc.substr(0,70)}...</p> : <p>{this.state.glassesCurrent.desc}</p>}</p>
                </div>
              </div>
              <div className="col-6">
                <img style={{width:'250px', height: '250px'}} src='./glassesImage/model.jpg' alt="model" />
              </div>
            </div>
            <div className="bg-light container text-center d-flex justify-content-center  ">
            {this.renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
