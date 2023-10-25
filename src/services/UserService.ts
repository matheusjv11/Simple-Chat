import { UserType } from '@/types/UserType'
import { Characters, ExistingCharacters } from '@/database/Characters'
import { Quotes } from '@/database/Quotes'
import { ArrayUtils } from '@/utils/ArrayUtils'
import { Houses } from '@/database/Houses'

export class UserService {
  public static getAllUsers(): UserType[] {
    return Object.values(Characters)
  }

  public static getUser(username: ExistingCharacters): UserType {
    return Characters[username]
  }

  public static randomQuote(username: ExistingCharacters) {
    const userQuotes = Quotes[username]

    return ArrayUtils.randomItem<string>(userQuotes)
  }

  public static getHouseDescription(house: string): string {
    return Houses[house].name || 'No house'
  }
}
