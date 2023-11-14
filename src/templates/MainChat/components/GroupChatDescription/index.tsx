import * as S from './styles'
import GroupPicture from '@/components/GroupPicture'
import { Username } from '@/components/MessageBox/styles'
import ProfilePicture from '@/components/ProfilePicture'
import { UserService } from '@/services/UserService'
import { GroupChatType } from '@/types/GroupChatType'
import ChatDescription from '../ChatDescription'

type GroupChatDescriptionProps = {
  chat: GroupChatType
}

const GroupChatDescription = ({ chat }: GroupChatDescriptionProps) => {
  const users = chat.members.map((member) => {
    return UserService.getUser(member)
  })

  const usersProfile = users.map((user) => user.banner)

  return (
    <ChatDescription
      title={chat.name}
      chatId={chat.id}
      subtitle={chat.description}
      pinned={chat.pinned}
      coverPicture={<GroupPicture membersProfile={usersProfile} large={true} />}
      isGroup={true}
    >
      <S.UserWrapper className="custom-scroll">
        <S.MembersTitle>Members</S.MembersTitle>
        {users.map((user, id) => {
          return (
            <S.UserRow key={id}>
              <ProfilePicture
                profile={user.profile}
                profileAlt={`${user.name}'s profile picure`}
              />
              <S.NameWrapper>
                <Username>{user.name}</Username>
                <S.House>{user.house}</S.House>
              </S.NameWrapper>
            </S.UserRow>
          )
        })}
      </S.UserWrapper>
    </ChatDescription>
  )
}

export default GroupChatDescription
