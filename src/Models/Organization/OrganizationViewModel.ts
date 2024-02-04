// viewmodels/OrganizationViewModel.ts
import { useState, useEffect } from 'react';
import lg from "../../assets/logos_lg.svg";
import google from "../../assets/logos_google.svg";
import sony from "../../assets/logos_sony.svg";
import slack from "../../assets/logos_slack.svg";
import samsung from "../../assets/logos_samsung.svg";
import microsoft from "../../assets/logos_microsoft.svg";

import { OrganizationCardModel} from './OrganizationCardModel';


const useOrganizationViewModel = () => {
    const [organizations, setOrganizations] = useState<OrganizationCardModel[]>([]);
  
    useEffect(() => {
      const organizationsData: OrganizationCardModel[] = [
        {
          id: 1,
          logoSrc: lg,
          link: "https://www.lg.com/",
        },
        {
          id: 2,
          logoSrc: google,
          link: "https://www.google.com/",
        },
        {
          id: 3,
          logoSrc: sony,
          link: "https://www.sony.com/",
        },
        {
          id: 4,
          logoSrc: slack,
          link: "https://www.slack.com/",
        },
        {
          id: 5,
          logoSrc: samsung,
          link: "https://www.samsung.com/",
        },
        {
          id: 6,
          logoSrc: microsoft,
          link: "https://www.microsoft.com/",
        },
      ];
  
      setOrganizations(organizationsData);
    }, []);
  
    return {
      organizations,
    };
  };

export default useOrganizationViewModel;
