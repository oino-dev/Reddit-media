import React from 'react'
import Card from './Card/Card'


let raw = JSON.parse(localStorage.getItem('posts'))
console.log(raw);
const FavItem = ({ files }) => {

    return (
        <div>
            {files.map((files) => {
                if (localStorage.getItem('posts')) {
                    return (
                        <Card key={files.data.id} src={files.data.url} />
                    )
                }
            }
            )}
        </div>
    )
}

export default FavItem
