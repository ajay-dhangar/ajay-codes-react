import React, { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const AnimalDropdown = () => {
    const [animal, setAnimal] = useState("");
    return (
        <div className="animal-dropdown">
            <label htmlFor="animal">
                Animal

            </label>
            <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} onBlur={(e) => setAnimal(e.target.value)}>
                <option>All</option>
                {ANIMALS.map((animal) => (
                    <option key={animal} value={animal}>{animal}</option>
                ))}
            </select>
        </div>
    );
};

export default AnimalDropdown;