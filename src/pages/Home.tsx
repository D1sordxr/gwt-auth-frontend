import React from 'react';

const Home = (props: {name:string, setName: (name: string) => void}) => {

    return (
        <div>
            <h1 className="status mb-3 fw-normal">
                {props.name ? "Hi, " + props.name : "You are not authenticated"}
            </h1>
        </div>
    );
};

export default Home;