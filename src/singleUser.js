import React from 'react';

const SingleUser = (props) => {
  return (
    <div>
      <a className="user-name">
        <div className="individualUser">
          {props.user.name}
          <div className="user-details">
            <p><strong>Street</strong> - {props.user.address.street} </p>
            <p><strong>Suite</strong> - {props.user.address.suite}</p>
            <p><strong>City</strong> - {props.user.address.city} </p>
            <p><strong>Zip</strong> - {props.user.address.zipcode} </p>
          </div>
          <span style={{float: 'right', color: 'grey'}}>{props.user.username}</span>
        </div>
      </a>
    </div >
  )
}

export default SingleUser;