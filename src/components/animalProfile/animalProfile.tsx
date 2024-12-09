import { Animal } from '../data/data';
import './animalProfile.css';

interface IAnimal {
    animal: Animal
}

const AnimalProfile: React.FC<IAnimal> = (props) => {
    return (
        <article className="animal-profile">
            <div className="animal-data">
                <h2>{props.animal.emoji}</h2>
                <h3>{props.animal.name}</h3>
                <p>{props.animal.species}</p>
                <p>{props.animal.habitat}</p>
                <p>{props.animal.diet}</p>
                <p>{props.animal.lifespan} years</p>
                <ul>
                    {props.animal.funFacts.map((funFact, index) => (
                        <li key={index}>{funFact}</li>
                    ))}
                </ul>
            </div> 
        </article>
    );
}

export default AnimalProfile;