import React, { useState } from 'react';
import './style.css';

import Button from '../Button';

export default function Encapsuling() {
    const [hover, setHover] = useState(false);

    return (
        <div className="encapsuling">
            {/* Start MenuBar div */}
            <div
                onMouseEnter={() => { setHover(!hover) }}
                onMouseLeave={() => { setHover(!hover) }}
                className="menuBar-content"
            >
                <div className="logo-section"></div>
                <div className="action-section">
                    <Button class={(hover) ? "btn-home hoverEffect" : "btn-home"} text={(hover) ? "Home" : "H"} />
                    <Button class={(hover) ? "btn-none hoverEffect" : "btn-none"} text={(hover) ? "None" : "N"} />
                </div>
                <div className="social-section"></div>
            </div>
            {/* Start content div */}
            <div className="content-content">
                <h1>content's content</h1>
            </div>
        </div>
    );
}