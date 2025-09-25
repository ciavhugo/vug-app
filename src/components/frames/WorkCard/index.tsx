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
        className="w-[42px] h-[42px] object-contain rounded-full max-[650px]:w-[32px] max-[650px]:h-[32px]"
      />

      <div className="flex flex-col">
        <p>{role}</p>
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A09A] hover:text-gray-400 transition-colors duration-300 no-underline cursor-pointer"
          >
            {company}
          </a>
        ) : (
          <p className="text-[#A1A09A]">{company}</p>
        )}
      </div>

      {(initialDate || finalDate) && (
        <div className="ml-auto text-sm text-[#A1A09A] max-[550px]:text-[12px] max-[550px]:flex max-[550px]:flex-col max-[550px]:items-end">
          <span>{initialDate}</span>
          {finalDate && <span className="mx-1">—</span>}
          {finalDate && <span>{finalDate}</span>}
        </div>
      )}
    </div>
  );
}
