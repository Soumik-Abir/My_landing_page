// Card.tsx

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card = ({ imageSrc, title, description }: CardProps) => (
  <div className="p-8 flex flex-col h-full">
    <div className="flex flex-col justify-between h-full px-6 py-4 bg-white drop-shadow-md rounded-[34px]">
      <img
        loading="lazy"
        src={imageSrc}
        className="aspect-square w-[46px] mb-4 mt-2"
        alt="Card Image"
      />
      <div className="flex flex-col text-2xl font-medium text-neutral-700 h-full">
        <div className="mb-2 mt-4 h-[60px] overflow-hidden flex items-end">{title}</div>
        <div className="mt-4 mb-4 text-sm text-neutral-600 font-normal">{description}</div>
      </div>
    </div>
  </div>
);

export default Card;

