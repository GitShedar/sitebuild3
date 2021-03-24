import React from 'react';
import MenuComp from "./MenuComp";
import Box from '@material-ui/core/Box';
import "../style/style.css";
import PlayArrowComp from "./PlayArrowComp.jsx";
import ButtonComp from "./ButtonComp";


function Homepage() {
  return (
    <div style={{backgroundColor:"#22B573"}}>
     *<Box className="App-main-maintitle">
      <p>Media appearances</p></Box>
      <Box className="App-main">
        <Box className="App-main-menu"><MenuComp /></Box>
                {/* box 1 start */}      
          <Box className="App-main-box">
              <Box className="App-main-box-content">
                <Box className="App-main-box-content-title"><p>Science Magazine</p><p>11.12.2018</p></Box>
                <Box className="App-main-box-content-text"><p>Want to master your professional and social networks to maximize recognition? Want to learn how to build productive teams that create lasting impact? In this new book, The Formula: The uUniveresal Laws of Success, Albert-László Barabási translates almost a decade of scholarly reseírch on the science of suceess into a lively...</p></Box>
              </Box>
                <Box className="App-main-box-content-action">
                <ButtonComp />
                </Box>
        </Box>
                {/* box 1 end */}  
                {/* box 2 start */}      
          <Box className="App-main-box">
              <Box className="App-main-box-content" id="whitebg">
                <Box className="App-main-box-content-title"><p>Media appearances</p><p>27.11.2018</p></Box>
                <Box className="App-main-box-content-text"><p>Want to master your professional and social networks to maximize recognition? Want to learn how to build productive teams that create lasting impact? In this new book, The Formula: The uUniveresal Laws of Success, Albert-László Barabási translates almost a decade of scholarly reseírch on the science of suceess into a lively..</p></Box>
              </Box>
                <Box className="App-main-box-content-action"><h3>Read more</h3></Box>
        </Box>
                {/* box 2 end */}
                {/* box 3 start */} 
          <Box className="App-main-box">
              <Box className="App-main-box-content play-content">                
                <Box> <PlayArrowComp /></Box>
                <Box className="App-main-box-content-title title-lecture" ><p>Lecture at NYU</p></Box>
              </Box>
                
                
                
                
                <Box className="App-main-box-content-action"><h3>Watch</h3></Box>
          </Box>
                {/* box 3 end */}  
      </Box>
    </div>
  )
}

export default Homepage
