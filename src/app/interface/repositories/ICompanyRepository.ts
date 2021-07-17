import Company from '../../database/entities/Company';
import { CompanyInterface } from '../Company';

export default interface ICompanyRepository {
  create(data: CompanyInterface): Promise<Company>;

  getAll(): Promise<Company[]>;

  getById(id: string): Promise<Company | undefined>;

  delete(id: string): Promise<void>;

  update(company: Company): Promise<Company>;
}
