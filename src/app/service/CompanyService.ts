import { inject, injectable } from 'tsyringe';

import Company from '../database/entities/Company';

import { CompanyInterface, CompanyUpdateInterface } from '../interface/Company';

import ICompanyRepository from '../interface/repositories/ICompanyRepository';

@injectable()
class CompanyService {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository
  ) {}

  public async create(companyData: CompanyInterface): Promise<Company> {
    return this.companyRepository.create(companyData);
  }

  public async getAll(): Promise<Company[]> {
    return this.companyRepository.getAll();
  }

  public async getById(id: string): Promise<Company> {
    const company = await this.companyRepository.getById(id);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return company!;
  }

  public async deleteById(id: string): Promise<void> {
    const company = await this.companyRepository.getById(id);

    if (!company) {
      throw new Error('Company not found');
    }
    await this.companyRepository.delete(id);
  }

  public async update(
    id: string,
    companyUpdates: CompanyUpdateInterface
  ): Promise<Company> {
    const companyFound = await this.companyRepository.getById(id);

    const company = {
      ...companyFound,
      name: companyUpdates.name ? companyUpdates.name : companyFound?.name,
      cnpj: companyUpdates.cnpj ? companyUpdates.cnpj : companyFound?.cnpj,
    };

    const companyUpdated = await this.companyRepository.update(
      company as CompanyInterface
    );

    return companyUpdated;
  }
}

export default CompanyService;
