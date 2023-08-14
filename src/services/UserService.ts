import { UserType } from '@/types/UserType'
import { Characters, ExistingCharacters } from '@/database/Characters'

export class UserService {
  public static getAllUsers(): UserType[] {
    return Object.values(Characters)
  }

  public static getUser(username: ExistingCharacters): UserType {
    return Characters[username]
  }
}
