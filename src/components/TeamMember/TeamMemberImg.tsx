import React from "react";

interface TeamMemberImgProps {
  imgSrc: string;
  text: string;
  role: string;
  zIndex?: number;
}

const TeamMemberImg: React.FC<TeamMemberImgProps> = ({
  imgSrc,
  text,
  role,
  zIndex,
}: TeamMemberImgProps) => {
  const style: React.CSSProperties = {
    zIndex: zIndex || 1,
    marginLeft: zIndex ? `-${zIndex * 10}px` : "0",
  };

  // Splitting the role text into two lines
  const [firstLineRole, secondLineRole] = role.split(" ");

  return (
    <div className="w-[150px] relative" style={style}>
      <img src={imgSrc} alt={text} />
      <p className="text-center text-sm font-medium text-neutral-700 absolute bottom-[-5px] left-0 right-0">
        <span>{firstLineRole}</span><br />{secondLineRole}
      </p>
    </div>
  );
};

export default TeamMemberImg;
