import { FaStar } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';
import type TechnologyType from '../Types/TechnologyType';

export interface TechnologyCardProps {
  technology: TechnologyType;
  selectedTechnologies: TechnologyType[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<TechnologyType[]>>;
}

const TechnologyCard = ({ technology, selectedTechnologies, setSelectedTechnologies }: TechnologyCardProps) => {
  const isSelected = selectedTechnologies.some(
    (selectedTechnology) => selectedTechnology.id === technology.id
  );

  const handleSelectTechnology = () => {
    if (isSelected) {
      return;
    }

    toast.success(`${technology.name} added to stack!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });

    // SelectedTechnologies Array Update 
    setSelectedTechnologies((prevTechnologies) => {
      const alreadySelected = prevTechnologies.some(
        (selectedTechnology) => selectedTechnology.id === technology.id
      );

      if (alreadySelected) {
        return prevTechnologies;
      }

      return [...prevTechnologies, technology];
    });
  };

  return (
    <div className="w-full rounded-[24px] border border-[#e8edf3] bg-white p-[28px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      {/* Icon + Badge */}
      <div className="mb-8 flex items-start justify-between">

        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        {technology.badge && (
          <span className="rounded-full border border-[#dbeafe] bg-[#eff6ff] px-4 py-1.5 text-sm font-medium text-[#0284c7]">
            {technology.badge}
          </span>
        )}

      </div>

      {/* Technology Name */}
      <h2 className="mb-3 text-[20px] font-bold text-[#111827]">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mb-6 text-[15px] leading-7 text-[#64748b]">
        {technology.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="mb-6 flex items-center justify-between border-y border-[#edf0f4] py-3">

        <span className="rounded-md bg-[#f1f5f9] px-2.5 py-1.5 text-sm font-medium text-[#475569]">
          {technology.category}
        </span>

        <span className="text-sm text-[#64748b]">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1">
          <FaStar className="text-sm text-[#fbbf24]" />
          <span className="text-sm font-semibold text-[#334155]">
            {technology.rating}
          </span>
        </div>

      </div>

      {/* Add to Stack Button */}
      <button
        onClick={handleSelectTechnology}
        disabled={isSelected}
        className="btn h-12 min-h-12 w-full rounded-xl border-0 bg-[#080d1d] text-base font-semibold text-white shadow-none transition-all duration-200 hover:bg-[#111827] hover:scale-[1.01] disabled:bg-[#a9a8a8] disabled:text-white"
      >
        {isSelected ? 'Selected' : 'Add to Stack'}
      </button>

    </div>
  );
};

export default TechnologyCard;