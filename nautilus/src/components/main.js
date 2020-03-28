import React from 'react';

function Main() {
    return (
        <div className="main">
        <div className='leftbar'>
            <div className='bar'>
                <p className='bar-hover' style={{padding:'5px' , margin:'0px'}}>
                    <h3 style={{padding:'0px' , margin:'0px'}}>ISSUE <small >079</small></h3>
                    <h1 style={{padding:'0px' , margin:'0px'}}>CATALYST</h1>
                </p>
                 <p  className='bar-hover' style={{textAlign:"left"}}>What generates a new theory <br></br> in Science</p>
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
                 <div className='box1'>
                     <h5>ARTIFICIAL <br></br> INTELLIGENCE</h5>
                    <p>
                        Best Screenplay Goes <br/> to the Algorithms
                        <br/><br/><br/>
                    </p>
                    <p><i>By Arthur L. Miller</i></p>
                </div>
            </div>
            <div className='element2'>
                <div className='box'>
                <h5>MUSIC</h5>
                    <p>
                        How I Taught My Computer <br/> to Write its Own Music
                        <br/><br/><br/>
                    </p>
                    <p><i>By John Supko</i></p>
                </div>
            </div>
            <div className='element3'>
                <div className='box2'>
                <h5>ART</h5>
                    <p>
                        Picasso's Got Nothing <br/> On AI Artists
                        <br/><br/><br/>
                    </p>
                    <p><i>By Kevin Berger</i></p>
               </div>
            </div>
        </div>
    </div>
    );
};
    
export default Main;