import React from "react";
import Form from "./components/Form";

const API_URL = "https://api.github.com";
let searched = [];


export default function App() {
  const [data, setData] = React.useState([])
  async function fetchResults(query) {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const json = await response.json();
      searched = json.items
      setData(searched);
      return json.items || [];
    } catch (e) {
      throw new Error(e);
    }
  }

  const elements = data?.map(({node_id, login, url, avatar_url}) => {
    return (
      <div key={node_id} className="profile" >
        <img src={avatar_url} alt={login} className="image" />
        <a href={url}>{login}</a>
      </div>
    )
  })
  
  return(
    <div className="container">
      <h1>GitHub User Search</h1>
      <Form fetchResults={fetchResults} />
      <h3>Results</h3>
      <div className="results-container">
        {/* results of the search will appear here */}
        {elements}
      </div>
    </div>
  )
}