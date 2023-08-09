
// TODO:the functions //

export const fixedElement =(top,bottom,left,right) =>{
    return{
        position:'fixed',
        top:top,
        bottom:bottom,
        left:left,
        right:right,
    }
}

// TODO: the objects //

export const centerAAbsolute = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform:'translate(-50%,-50%)',
    width:'100%',
    maxWidth:'600px'
}


export const flexBetweenFull = {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
}

export const flexItems = {
    display:'flex',
    alignItems:'center',
    width:'100%'
}

export const transition = {
    transition: 'all .3s ease-out'
}


export const absoluteCenter1 ={
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
   
  }











  /** Flexbox styles */

export const FlexItems ={
    display:'flex',
    alignItems: 'center',
}


export const FlexBetweenItems = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  
  export const flexBetweenCenter = {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'space-between' },
    alignItems: 'center',
    width:'100%'
  };
  
  export const footerLayout = {
    display: 'flex',
    flexDirection: { sx: 'column' },
    justifyContent: { xs: 'center', md: 'space-between' },
    alignItems: 'center',
  };
  
  export const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  export const fullWidthFlex = {
    display: 'flex',
    width: '100%',
  };
  
  export const justifyCenter = { display: 'flex', justifyContent: 'center' };
  
  export const dFlex = {
    display: 'flex',
    flexDirection: 'row',
  };
  
  export const fixedBottom = {
    position: 'absolute',
    bottom: 100,
    width: '100%',
  };

  export const transitionEffect = {
    transition:'all .3s ease'
  }
  
  export const AbsoluteBottom ={
    position:'absolute',
    bottom:'20px',
    left:0,
    right:0
  }
  export const displayOnDesktop = { display: { xs: 'none', md: 'block' } };
  
  /** Custom carousel styles */
  
  

  export const carouselDot = {
    color: '#fff',
    backgroundColor: '#000',
    opacity: 0.5,
    borderRadius: 10,
    p: 1,
    minWidth: 'auto',
  };
  
  export const fixedIcon = {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 10,
  };
  
  export const carouselImage = {
    height: 275,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 3,
  };

 
  export const absoluteCenterTop ={
    position:'absolute',
    top:'0',
    left:'50%',
    transform:'translate(-50%,-50%)',
    border:'2px solid #fff'
   
  }
  export const absoluteCenter ={
    position:'absolute',
    top:'-10%',
    left:{xs:'0',md:'-45%'},
  }