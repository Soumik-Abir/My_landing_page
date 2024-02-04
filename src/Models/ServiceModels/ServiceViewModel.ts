// viewmodels/ServiceViewModel.tsx
import ServiceSectionModel from "./ServiceSectionModel";

class ServiceViewModel {
  private readonly sections: ServiceSectionModel[];

  constructor(data: ServiceSectionModel[]) {
    this.sections = data;
  }

  getSections(): ServiceSectionModel[] {
    return this.sections;
  }
}

export default ServiceViewModel;
