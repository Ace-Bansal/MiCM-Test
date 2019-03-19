import React from 'react';
import SingleUser from './singleUser'
import PopoverComponent from './popoverComponent'

const UserList = (props) => {
    return (
      <div className="scroll-container">
        {props.users.map(individualUser => {
          return (
            <div>
              <SingleUser user={individualUser} />
            </div>
          )
        })}
      </div>
    )
}

export default UserList;