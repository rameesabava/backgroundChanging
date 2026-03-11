import React, { useState } from 'react'
import { Button } from '@mui/material'


function Home() {
    const [backgroundColor, setBackgroundColor] = useState("")

    const showRandomColor = () => {
        const colors = ["red", "blue", "green", "yellow", "orange", "violet", "black"]
        const randomIndex = Math.floor(Math.random() * colors.length)
        setBackgroundColor(colors[randomIndex])
    }
    return (
        <div style={{backgroundColor: backgroundColor, height:'100vh' }} className='text-center d-flex justify-content-center align-items-center'>
           <div style={{borderRadius:'10px'}} className='bg-light p-3 text-center'>
                <h2>Click the button to show your favourite color!!!!</h2>
                <div className='d-flex flex-wrap justify-content-evenly align-items-center m-5 w-60'>
                    <Button onClick={() => setBackgroundColor("red")} variant="contained" style={{backgroundColor:'red'}}>RED</Button>
                    <Button onClick={() => setBackgroundColor("blue")} variant="contained">BLUE</Button>
                    <Button onClick={() => setBackgroundColor("green")} variant="contained" style={{backgroundColor:'green'}}>GREEN</Button>
                    <Button onClick={() => setBackgroundColor("yellow")} variant="contained" className='bg-warning'>YELLOW</Button>
                    <Button onClick={showRandomColor} variant="contained" style={{ background: 'linear-gradient(to right, red, blue, green, yellow)' }}>RANDOM COLOUR</Button>
    
                </div> 
           </div>  
            </div>
    )
}

export default Home