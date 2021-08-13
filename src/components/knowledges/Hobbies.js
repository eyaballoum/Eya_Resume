import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérets</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-swimmer"></i>
                    <span>nager</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Randonnées</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-suitcase-rolling"></i>
                    <span>Voyages</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-dice"></i>
                    <span>les jeux</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;