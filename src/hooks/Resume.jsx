import React from 'react'
import styles from '../style'

const Resume = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }

  return (
    <div>


        <div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, ullam, debitis culpa 
                est blanditiis quaerat repellat saepe ratione incidunt accusantium dolore unde 
                recusandae labore tempore a dolorum, maxime eum sed?
            </p>
        </div>
        <>
    <center>
        <h1>Welcome to Geeks for Geeks</h1>
        <h3>Click on below button to download PDF file</h3>
        <button onClick={onButtonClick}>
            Download PDF
        </button>
    </center>

</>
    </div>
  )
}

export default Resume