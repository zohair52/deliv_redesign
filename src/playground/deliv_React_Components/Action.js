import React from 'react';

const Action = (props) => {

    return (
        <div>
        <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
        Add User
        </button>
        </div>
    );
};

export default Action;

