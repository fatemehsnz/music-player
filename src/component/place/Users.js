import React from 'react'
import UserItem from './UserItem'

const userList = [
    {
        id : "1",
        firstName : "fatemeh",
        lastName : "hasani",
        userName : "fati_hs",
        img : "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-2.jpg",
        places : 3
    },
    {
        id : "2",
        firstName : "ahmad",
        lastName : "hasani",
        userName : "ahmad_hs",
        img : "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
        places : 1
    },
    {
        id : "3",
        firstName : "eli",
        lastName : "hasani",
        userName : "eli_hs",
        img : "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?resize=1024,683",
        places : 2
    }
]
function Users() {
  return (
    <div>
      <ul>
        {userList.map(user =>(
            <div key={user.id}>
                <UserItem user={user}/>
            </div>
        ))}
      </ul>
    </div>
  )
}

export default Users

