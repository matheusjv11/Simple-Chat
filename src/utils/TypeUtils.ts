import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'

export class TypeUtils {
  public static isSingleChatType(
    type: SingleChatType | GroupChatType
  ): type is SingleChatType {
    return (type as GroupChatType).name === undefined
  }
}
