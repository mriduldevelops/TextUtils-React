import React from 'react'

function PracticeSet() {
    const currentTime = new Date();
    const currentHours  = currentTime.getHours(2023, 6, 15, 20);

    const customStyle = {
        color : ""
    }
    let greetings;

    if (currentHours <12){
        greetings = "Good Morning";
        customStyle.color = "red"
    }else if(currentHours< 18){
        greetings = "Good Afternoon";
        customStyle.color = "green"
    }else{
        greetings = "Good Night";
        customStyle.color = "blue"
    }


  return (
    <>
      <h1 style={customStyle}>{greetings}</h1>
    </>
  )
};

export default PracticeSet;
