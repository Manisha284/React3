import React from 'react'
import './stylesheet.css';

function Collection() {
    const heading='Dhumaley Manisha Netflix Pick'
    const para='List of 5 Best Series'
    return (
        <div className="Mani">
          <stylesheet />
          <h1>{heading}</h1> 
          <p>{para}</p> 
          <ol>
              <li>Dark</li>
              <li>Extra curricular</li>
              <li>My Holo Love</li>
              <li>My First 2 Love</li>
              <li>Mr Robot</li>
          </ol>
        </div>
    )
}
export default Collection