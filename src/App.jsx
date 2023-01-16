import React from "react";
import Form from "./components/Form";

const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}

function filterResults(name) {
  const results = fetchResults(name);
  console.log(results)
}

export default function App() {
  return(
    <div className="container">
      <h1>GitHub User Search</h1>
      <Form filterResults={filterResults} />
      <h3>Results</h3>
      <div className="results-container">
        {/* results of the search will appear here */}
      </div>
    </div>
  )
}