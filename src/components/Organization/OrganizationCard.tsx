// components/OrganizationCard.tsx
import { OrganizationCardModel } from '../../Models/Organization/OrganizationCardModel';

interface OrganizationCardProps {
  organization: OrganizationCardModel;
}

const OrganizationCard = ({ organization }:OrganizationCardProps) => {
  const handleImageClick = () => {
    window.open(organization.link, '_blank');
  };

  return (
    <div className="organization-card h-[70px] w-[120px]" onClick={handleImageClick} >
      <img
        src={organization.logoSrc}
        alt="Organization Logo"
        style={{ cursor: 'pointer', width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  );
};

export default OrganizationCard;
