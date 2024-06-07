import React from 'react';

function Person({ firstName, lastName, email, phNumber, isGreen }) {
    if (!firstName || !lastName || !email) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
           
            <ul className={`profile-details ${isGreen ? 'profile-details-changed' : ''}`}>
                <li>
                    <span className="detail-label">First Name:</span> {firstName}
                </li>
                <li>
                    <span className="detail-label">Last Name:</span> {lastName}
                </li>
                <li>
                    <span className="detail-label">Email:</span> {email}
                </li>
                <li>
                    <span className="detail-label">Phone Number:</span> {phNumber}
                </li>
            </ul>
        </div>
    );
}

export default Person;