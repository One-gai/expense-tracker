import React, {useState} from "react"
function SearchBar ({searchTerm,  setSearchTerm}){
    return(
        <input
        type = "text"
        placeholder='Search expenses...'
        value = {searchTerm}
        onChange={(event)=>setSearchTerm(event.target.value)}
      />
    )
}

export default SearchBar