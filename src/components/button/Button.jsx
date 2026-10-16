import React from 'react'

export default function Button({text, text1}) {
    if(text){
        return(
    <div>
      <button>{text}</button>
    </div>
        )
    }else{
        return (
          <div>
      <button>{text1}</button>
    </div>
        )

    }
}
