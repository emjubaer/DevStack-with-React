import React, { use } from 'react';
import type TechnologyType from '../Types/TechnologyType';
import TechnologyCard from './TechnologyCard';

const Technologies = ({ technologyPromise }: { technologyPromise: Promise<TechnologyType[]> }) => {
    const technologies = use(technologyPromise);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {technologies.map((tech,index) => (
                < TechnologyCard key={index} technology={tech} />
            ))}
        </div>
    );
};

export default Technologies;