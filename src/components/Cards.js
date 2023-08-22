import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSterlingSign, faTags, faThumbsUp, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '..//componentStyles/Cards.css'; // Import your CSS file for styling

function Card() {
    return (
        <div className="card-container">
            <div className="card colour1">
                <p>Total Revenues</p>
                <p>$326,569,308</p>
                <FontAwesomeIcon icon={faSterlingSign} />
            </div>
            <div className="card  colour2">
                <p>Total Transactions</p>
                <p>1,520</p>
                <FontAwesomeIcon icon={faTags} />
            </div>
            <div className="card colour3">
                <p>Total Revenues</p>
                <p>9,721</p>
                <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <div className="card colour4">
                <p>Total Users</p>
                <p>892</p>
                <FontAwesomeIcon icon={faUserFriends} />
            </div>
        </div>
    );
}

export default Card;
