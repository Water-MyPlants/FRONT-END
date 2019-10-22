import React, { Component } from 'react'
import axios from 'axios'

export default class UploadForm extends Component {

    state = {
        selectedImg: null
      }
      
      imgSelectedHandler = e => {
        console.log(e.target)
        this.setState({
          selectedImg: e.target.files[0]
        })
      }
    
    imgUploadHandler = () => {
        const formData = new FormData();
        formData.append('image', this.state.selectedImg, this.state.selectedImg.name);
        axios.post('https://build-week-4.herokuapp.com/api/plants', formData).then(res => {
          console.log(res)
        })
      }

    render() {
        return (
            <div className='upload-contaniner'>
          <input 
          style={{display: 'none'}}
          type='file' 
          onChange={this.imgSelectedHandler} 
          ref={imgInput => this.imgInput = imgInput}
          />
          <button onClick={() => this.imgInput.click()}>Select an Image</button>
          <button onClick={this.imgUploadHandler}>Upload</button>
        </div>
        )
    }
}
