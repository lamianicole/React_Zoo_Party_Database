import animals from "../data/data";
import AnimalProfile from "../animalProfile/animalProfile";
import './AnimalsSection.css';

const AnimalsSection = () => {
    return (
        <section className="animals-section">
            {animals.map((animal, index) => (
                <AnimalProfile key={index} animal={animal}/>
            ))}
        </section>
    );
}

export default AnimalsSection;