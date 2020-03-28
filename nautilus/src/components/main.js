import React from 'react';
import ai from '../assets/ai.png';
import art from '../assets/art.png'
import music from '../assets/music.png'


function Main() {
    return (
        <div className="main">
        <div className='leftbar'>
            <div className='bar'>
                <h3>ISSUE <small >079</small></h3>
                <h1>CATALYST</h1>
                <p style={{textAlign:"left"}}>What generates a new theory <br></br> in Science</p>
            </div>  
            <div className='bar'>
                <p><b>CHAPTER ONE</b></p>
                <p style={{textAlign:"left"}}>Art</p>
            </div>  
            <div className='bar'>
                <p><b>CHAPTER TWO</b></p>
                <p style={{textAlign:"left"}}>Mind</p>
                <h4>Coming December 12</h4>

            </div>  
            <div className='bar'>
                <p><b>CHAPTER THREE</b></p>
                <p style={{textAlign:"left"}}>Energy</p>
                <h4>Coming December 19</h4>

            </div>  
            <div className='bar'>
                <p><b>CHAPTER FOUR</b></p>
                <p style={{textAlign:"left"}}>Stars</p>
                <h4>Coming December 26</h4>

            </div>  

         </div>
         <div className='card'>
             <div className='element1'>
                 <p>
                 HOW ARE you

                 </p>

                 </div>
                    <div className='element2'>
                    <p>
                    HOW ARE you

                    </p>
                    </div>
                     <div className='element3'>
                         <p>
                         HOW ARE you

                         </p>
                
                     </div>
                 </div>
            </div>
    );
};
    
export default Main;