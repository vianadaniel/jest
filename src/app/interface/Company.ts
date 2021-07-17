export interface CompanyInterface {
  id: string;
  name: string;
  cnpj: string;
}
export interface CompanyUpdateInterface {
  name?: string;
  cnpj?: string;
}
