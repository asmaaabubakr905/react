import React from 'react'
import { useState } from 'react';
import headsimg from '../assets/heads.png';
import tailsimg from '../assets/tails.png';

function Coins() {
    let [heads, setHeads] = useState(0);
    let [tails, setTails] = useState(0);
    let [flips, setFlips] = useState(0);
    let [img, setImg] = useState(null);

    let flipCoin = () => {
        let result = Math.random() < 0.5 ? 'heads' : 'tails';
        setFlips(flips + 1);

        if (result == 'heads') {
            setHeads(heads + 1);
            setImg(headsimg);
        } else {
            setTails(tails + 1);
            setImg(tailsimg);
        }
    };
    let image = null;
    if (img) {
        image = <img src={img} />;
    }
    return (
        <div>
            <h1>Flip Coin</h1>
            {image}
            <button onClick={flipCoin}>Flip meee</button>
            <p>
                Out of {flips} flips, there have been {heads} heads and {tails} tails.
            </p>
        </div>
    )
}

export default Coins
