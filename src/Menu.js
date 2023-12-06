import React from 'react';
import { Link } from 'react-scroll';

export default function Menu(){
  const ul_style={
    width: "640",
    height:"100",
    "font-size":"22px",
    "text-align":"center"
  }
  return(
    <ul style={ul_style}>
      <li>
        <Link
          activeClass='active'
          to='Section01'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About Me
        </Link>
      </li>
      
       <li>
        <Link
          activeClass='active'
          to='Section02'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Skills
        </Link>
      </li>

       <li>
        <Link
          activeClass='active'
          to='Section03'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Project
        </Link>
      </li>

       <li>
        <Link
          activeClass='active'
          to='Section04'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}