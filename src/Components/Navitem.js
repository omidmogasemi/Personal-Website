import React from 'react';
import "./css/Navbar.css"

const Navitem = ({ name, section_id }) => {

    function OnClickBehavior(section_id) {
        // scrollTo(`#${section_id}`)
    }

    let button_text = name;

    return (
        <div className="navitem" data-id={section_id}>
            <button className="navbutton" onClick={() => OnClickBehavior(section_id)}>
                {button_text}
            </button>
            <div className="underline"></div>
        </div >
    );
}

export default Navitem