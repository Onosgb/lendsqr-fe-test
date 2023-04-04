export interface User {
  id: string;
  accountBalance: string;
  accountNumber: string;
  userName: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  createdAt: Date;
  officeEmail: string;
  sector: string;
  email: string;

  education: {
    duration: string;
    employmentStatus: string;
    level: string;
    loanRepayment: string;
    monthlyIncome: string[];
  };

  guarantor: {
    address: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };

  profile: {
    address: string;
    avatar: string;
    bvn: string;
    currency: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };

  social: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}
