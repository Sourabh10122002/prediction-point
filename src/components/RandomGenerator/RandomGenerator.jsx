import './RandomGenerator.css';
// import { useState } from 'react';

const RandomGenerator = ({ num, handleGenerateRandom }) => {
    return (
        <div className='generator'>
            <div className="circle">
                <h1>{num}</h1>
            </div>
            <button onClick={handleGenerateRandom} className='generate-random'>Play</button>
        </div>
    )
}

export default RandomGenerator