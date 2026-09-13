import React, { use } from 'react';
import type TechnologyType from '../Types/TechnologyType';
import TechnologyCard from './TechnologyCard';

interface TechnologyProps {
    technologyPromise: Promise<TechnologyType[]>;
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: React.Dispatch<React.SetStateAction<TechnologyType[]>>;
}

const Technologies = ({ technologyPromise, selectedTechnologies, setSelectedTechnologies }:TechnologyProps) => {
    const technologies = use(technologyPromise);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {technologies.map((tech,index) => (
                < TechnologyCard key={index} technology={tech} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
            ))}
        </div>
    );
};

export default Technologies;