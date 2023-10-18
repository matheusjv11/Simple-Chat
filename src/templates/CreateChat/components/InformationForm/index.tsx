import * as S from './styles'
import { Dispatch, SetStateAction } from 'react'
import { ChatSettingsType } from '../..'

type InformationFormProps = {
  setChatSettings: Dispatch<SetStateAction<ChatSettingsType>>
  membersSize: number
}

const InformationForm = ({
  setChatSettings,
  membersSize
}: InformationFormProps) => {
  return (
    <S.Wrapper>
      <S.InputLabel>
        First Message
        <input
          type="text"
          onChange={(e) =>
            setChatSettings((settings) => ({
              ...settings,
              message: e.target.value
            }))
          }
        />
      </S.InputLabel>
      {membersSize > 1 && (
        <S.GroupInformation>
          <S.InputLabel>
            Group name
            <input
              type="text"
              onChange={(e) =>
                setChatSettings((settings) => ({
                  ...settings,
                  groupName: e.target.value
                }))
              }
            />
          </S.InputLabel>
          <S.InputLabel>
            Group description
            <input
              type="text"
              onChange={(e) =>
                setChatSettings((settings) => ({
                  ...settings,
                  groupDescription: e.target.value
                }))
              }
            />
          </S.InputLabel>
        </S.GroupInformation>
      )}
    </S.Wrapper>
  )
}
export default InformationForm
