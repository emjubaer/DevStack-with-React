import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import type TechnologyType from '../Types/TechnologyType';

interface YourStackProps {
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: React.Dispatch<React.SetStateAction<TechnologyType[]>>;
}

const YourStack = ({ selectedTechnologies, setSelectedTechnologies }: YourStackProps) => {
    const handleRemoveTechnology = (id: string) => {
        setSelectedTechnologies((prevTechnologies) =>
            prevTechnologies.filter((technology) => technology.id !== id)
        );
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
    };

    return (
        <div className="rounded-[24px] border border-[#e8edf3] bg-white p-6 shadow-md lg:sticky lg:top-6">
            <h2 className="mb-3 text-[20px] font-bold text-[#111827]">
                Your Stack
            </h2>

            <p className="mb-8 text-[16px] text-[#94a3b8]">
                {selectedTechnologies.length} Technology Selected
            </p>

            {selectedTechnologies.length === 0 ? (
                <div className="flex min-h-[150px] items-center justify-center rounded-2xl border-3 border-dotted border-[#cbd5e1] px-6 text-center">
                    <p className="text-lg font-semibold text-[#94a3b8]">
                        Your stack is empty
                    </p>
                </div>
            ) : (
                <>
                    <div className="space-y-3">
                        {selectedTechnologies.map((technology) => (
                            <div
                                key={technology.id}
                                className="flex min-h-[88px] items-center gap-4 rounded-2xl border border-[#dbe3ed] bg-white px-5 py-4"
                            >
                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-12 w-12 shrink-0 object-contain"
                                />

                                <div className="min-w-0 flex-1">
                                    <h3 className="truncate text-[16px] font-bold text-[#020617]">
                                        {technology.name}
                                    </h3>
                                    <p className="text-xs font-semibold text-[#94a3b8]">
                                        {technology.category}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleRemoveTechnology(technology.id)}
                                    aria-label={`Remove ${technology.name}`}
                                    className="btn btn-ghost btn-square min-h-10 h-10 w-10 shrink-0 rounded-full text-[#94a3b8] hover:bg-[#f1f5f9] hover:text-[#ef4444]"
                                >
                                    <RxCross2 className="text-2xl" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleRemoveAll}
                        className="btn mt-20 h-14 min-h-14 w-full rounded-xl border border-[#ff8a8a] bg-white text-[20px] font-bold text-[#ef2424] shadow-none hover:border-[#ef4444] hover:bg-[#fff5f5]"
                    >
                        Remove All
                    </button>
                </>
            )}
        </div>
    );
};

export default YourStack;
