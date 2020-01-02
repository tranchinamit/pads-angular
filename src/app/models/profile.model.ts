export interface IProfile {
  accountId: number;
  accountOid: string;
  address: string;
  avatar: string;
  createdAt: number;
  email: string;
  accountName: string;
  isActive: boolean;
  phone: number;
  updateAt: number;
}

export class ProfileDTO implements IProfile {
  accountId: number = null;
  accountOid: string = null;
  address: string = null;
  avatar: string = null;
  createdAt: number = null;
  email: string = null;
  accountName: string = null;
  isActive: boolean = null;
  phone: number = null;
  updateAt: number = null;

  constructor(data?: ProfileDTO) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  }
}
