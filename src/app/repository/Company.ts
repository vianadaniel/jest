import { getRepository, Repository } from 'typeorm';
import Company from '../database/entities/Company';
import { CompanyInterface } from '../interface/Company';

import ICompanyRepository from '../interface/repositories/ICompanyRepository';

export default class CompanyRepository implements ICompanyRepository {
  private ormRepository: Repository<Company>;

  constructor() {
    this.ormRepository = getRepository(Company);
  }

  public async create(companyData: CompanyInterface): Promise<Company> {
    const company = this.ormRepository.create(companyData);

    return this.ormRepository.save(company);
  }

  public async getAll(): Promise<Company[]> {
    return await this.ormRepository.find();
  }

  public async getById(id: string): Promise<Company | undefined> {
    return this.ormRepository.findOne({
      where: {
        id,
      },
    });
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async update(company: Company): Promise<Company> {
    return this.ormRepository.save(company);
  }
}
