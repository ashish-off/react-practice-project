import React from 'react'
import {accordionData} from './content'
import Accordion from './Accordion'

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({title, content})=> (
          <Accordion title={title} content={content}/>
        ))}
      </div>
    </div>
  )
}

export default App