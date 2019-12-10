import React, { useState } from 'react'

const App = props => {
  const [count, setCount] = useState(1)
  return (
    <div>
      <h1>
        hello {props.title} {count}
      </h1>
      <p>ioioi</p>
      <button onClick={() => setCount(count + 1)}>累加</button>
    </div>
  )
}

export default <App title="开课吧" />
