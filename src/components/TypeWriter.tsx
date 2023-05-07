import React from "react";

type textType = {
  text : string
}

export default function TypeWriter(props : textType) {

const [index , setIndex] = React.useState<0 | number>(1)
const [texter,setTexter] = React.useState<string>(props.text)


React.useEffect(()=>{
  

  if(index > texter.length) {

    setTimeout(() => {
      setIndex(1)
    }, 20000);
    
    return;
  }

else  {
  setTimeout(() => {

    setIndex(prevIndex => prevIndex + 1)
    
  }, 200);
}
},[index , texter.length])


  return<>{texter.slice(0,index)}
 {index <= texter.length && <span className="writer">|</span>}
  </> ;
}
