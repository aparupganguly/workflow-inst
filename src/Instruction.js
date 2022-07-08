import * as React from 'react';
import {useState} from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import CustomizedDialogs from "./Mu"
import './App.css'
import Img1 from './workflow/pic1.png'
import Img2 from './workflow/pic2.png'
import Img3 from './workflow/pic3.png'
import Img4 from './workflow/pic4.png'
import Img5 from './workflow/pic5.png'
import Img6 from './workflow/pic6.png'
const Instruction=()=>{
    let [count,setCount]=useState(0);
    function prevImage(){
        setCount(--count);
        // console.log(count);
    }
    function nextImage(){
        setCount(++count);
        // console.log(count);
    }
    return(
        <>
        <br></br>
        <CustomizedDialogs/>
            <div className='images-div'>
                {count==0?null:<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8AAABjY2NZWVleXl5sbGz8/PxRUVFWVlZpaWl0dHRvb29lZWVXV1d3d3dhYWFLS0tDQ0NOTk6ioqKampobGxt8fHyaFp1nAAACbklEQVR4nO3da1LjMBBFYYuEBIZXJgPsf6kzFDXFK/QflOryuedbgW6pW3YcW1oWSZIkSZIkSZIkSZIkSdI57J533UM4s8M4dA/hvH6PMfbgWdwdx4srbsT9eHXsHsi5HMZ/R+YsvgUcYwOMuNuP9zbd45nvY8B/K2r3gGY7jM9gF43PM/hiS4p4dSLgGHfdw5rn1AyievFrD8IuGqdL9NWf7sHNUAW87x7cDN+XKCTgd4sMJuBdEfC5e3Az2INrh5/BDT0gfhWtAv7qHtwM+BKtAiJmEF+i1Z0MIuCWHrDqwZvuwc1Q9SAiIL5Eq4CIGaxutg24Bvbg2uFLFH+hv6AHrHrwsntwM1Qlet09uBnwJVoFRMxgVaKIHsQvMrf0gNE9iAhYzSCiRKseRMxgtYriA952D24GfIleFwEvugc3w4MlunKX9ID4HqzuZBABqxlElGjVg4gZrFZRA65BWaKEt7argNvuwc1QlSgiYHWZeOge3Az4HnwsAj4RAi7LTVWkjIj4PgxYSwOuhwHraUSh4m+9A34fBvzGr5/TQK6L+GdtAc9L6xUV8VA/4H+LiF4MuGjg/wOO6EX8v4gB79MEvBMV8F5bwLuJAe+XBrwjHNGL+Hf1Iy4aActNQKHivz4M+P4wYhbx3wFHFGpARHuRAL+3ScBn6xGFit/pK2Cvr4hZrHoRsedeRKHidy8N2BwyYharfYTtxbXA7+cdsJtwwJ7eEb2IP98i4IySgHNmAs4KCjjv6VQv4k5BxJ+7FnB2Hv/8w+V9RNi5eW/w55AGnCXLPw94CTjTOeBcbkmSJEmSJEmSJEmSJEn6qb9lIBeEWzCReQAAAABJRU5ErkJggg=='
                    className='icon-image'
                    onClick={prevImage}
                />}
               
            </div>
        </>
    )
}
export default Instruction;