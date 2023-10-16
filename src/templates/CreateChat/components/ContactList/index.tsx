import { UserService } from '@/services/UserService'
import * as S from './styles'
import ProfilePicture from '@/components/ProfilePicture'
import { Username } from '@/components/MessageBox/styles'

const ContactList = () => {
  const allUsers = UserService.getAllUsers()

  return (
    <S.Wrapper>
      {allUsers.map((user) => (
        <S.UserOption>
          <ProfilePicture
            profile={user.profile}
            profileAlt={`${user.name}'s profile picure`}
          />
          <S.NameWrapper>
            <Username>{user.name}</Username>
            <S.House>{user.house}</S.House>
          </S.NameWrapper>
        </S.UserOption>
      ))}
    </S.Wrapper>
  )
}
export default ContactList
