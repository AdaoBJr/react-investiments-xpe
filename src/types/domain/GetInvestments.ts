interface InvestmentsItems {
  id: string;
  description: string;
}

interface Reports {
  id: string;
  investmentId: string;
  month: number;
  year: number;
  value: number;
}

export interface GetInvestments {
  investments: InvestmentsItems[];
  reports: Reports[];
}
