import React from 'react'

function List(props) {
    const { repos } = props;
    if (!repos || repos.length===0) return <div><p>no repo</p></div>
  return (
    <div>
      <ul>
        <p>avaliable public repos</p>
        {repos.map((repo)=>
        {
            return(
            <li key={repo.id}>
                <span>{repo.name}</span>
                <span>{repo.description}</span>
             
            </li>)
        })}
      </ul>


    </div>
  )
}

export default List