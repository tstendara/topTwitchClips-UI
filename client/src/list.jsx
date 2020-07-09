import React from 'react'

const list = ({allGames}) => {
        
    let dropdown = allGames.map((game, ind) => {
        return(
            <option key={ind}>{game}</option>
        )
    })
        
    return (
        <>
            {dropdown}
        </>
    )
}

export default list;