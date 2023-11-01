import * as S from './styles'
import { MouseEventHandler } from 'react'
import ProfilePicture from '@/components/ProfilePicture'
import { Characters } from '@/database/Characters'
import { Username } from '@/components/MessageBox/styles'

type ContactListProps = {
  userList: string[]
  updateUserList: (id: string) => void
}

const ContactList = ({ userList, updateUserList }: ContactListProps) => {
  const insertUser = (
    e: MouseEventHandler<HTMLButtonElement> | undefined,
    userId: string
  ) => {
    if (e) {
      updateUserList(userId)
    }
  }

  return (
    <S.Wrapper className="custom-scroll">
      {Object.entries(Characters).map(([id, user]) => (
        <S.UserOption
          onClick={(e: MouseEventHandler<HTMLButtonElement> | undefined) =>
            insertUser(e, id)
          }
          key={id}
        >
          <ProfilePicture
            profile={user.profile}
            profileAlt={`${user.name}'s profile picure`}
          />
          <S.NameWrapper>
            <Username>{user.name}</Username>
            <S.House>{user.house}</S.House>
          </S.NameWrapper>
          <S.CheckCircle checked={userList.includes(id)}>
            {userList.includes(id) && <span>&#10003;</span>}
          </S.CheckCircle>
        </S.UserOption>
      ))}
    </S.Wrapper>
  )
}
export default ContactList
