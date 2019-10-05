import { OQuery } from './src/oquery';


class UserMenu {
  id: number;
  module: string;
  value: boolean;
}

class Permission {
  id: number;
  module: string;
  value: boolean;
  menu: UserMenu[];
}

class User {
  id: number;
  mail: string;
  displayName: string;
  createDate: Date;

  permission: Permission;
  menu: UserMenu[];
}

const result = new OQuery<User>()
.filter(u => u.mail.equals('test@test.com').and(u.displayName.contains('test')))
.toString();

console.log(result);
