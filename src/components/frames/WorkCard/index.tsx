export interface WorkCardProps {
  imageUrl: string;
  role: string;
  company: string;
  companyUrl?: string;
  initialDate?: string;
  finalDate?: string;
}

export function WorkCard({
  imageUrl,
  role,
  company,
  companyUrl,
  initialDate,
  finalDate,
}: WorkCardProps) {
  return (
    <div className="mt-4 flex items-center gap-3">
      <img
        src={`/${imageUrl}`}
        alt={company}
        className="w-12 h-12 object-contain rounded-full"
      />
      
      <div className="flex flex-col">
        <p>{role}</p>
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A09A] hover:text-gray-400 transition-colors duration-300 no-underline cursor-grabbing"
          >
            {company}
          </a>
        ) : (
          <p className="text-[#A1A09A]">{company}</p>
        )}
      </div>

      {(initialDate || finalDate) && (
        <p className="text-sm ml-auto text-[#A1A09A]">
          {initialDate} {finalDate ? `— ${finalDate}` : ""}
        </p>
      )}
    </div>
  );
}
