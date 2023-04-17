import React from 'react'
import PlaceItem from './PlaceItem'
import { useParams } from 'react-router'

const placeList = [
    {
        id : "1",
        creatorId : "1",
        title : "Torghabe",
        description : "this place is so incredible",
        img : "https://tr2p.com/upload/blog/17fed42e-86ef-4057-b901-1726255ed795--main.jpg",
        address : "Mashad - Torghabe",
        location : ""
    },
    {
        id : "2",
        creatorId : "1",
        title : "Torghabe",
        description : "this place is so incredible",
        img : "https://tr2p.com/upload/blog/17fed42e-86ef-4057-b901-1726255ed795--main.jpg",
        address : "Mashad - Torghabe",
        location : ""
    },
    {
        id : "3",
        creatorId : "2",
        title : "Torghabe",
        description : "this place is so incredible",
        img : "https://tr2p.com/upload/blog/17fed42e-86ef-4057-b901-1726255ed795--main.jpg",
        address : "Mashad - Torghabe",
        location : ""
    }
]
let updateList = []
function Places() {
  const userId = useParams().userId
  if (userId) {
    updateList = placeList.filter(place => place.creatorId === userId)
  }
  updateList= userId ? updateList : placeList
  return (
    <div>
      <ul>
        {updateList.map(place =>(
            <div key={place.id}>
                <PlaceItem place={place}/>
            </div>
        ))}
      </ul>
    </div>
  )
}

export default Places
