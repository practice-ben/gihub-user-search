import React from "react";
import Form from "./components/Form";


export default function App() {
  return(
    <div className="container">
      <h1>GitHub User Search</h1>
      <Form />
      <h3>Results</h3>
      <div className="results-container">
        {/* results of the search will appear here */}
      </div>
    </div>
  )
}