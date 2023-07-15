import { ExistingCharacters } from '@/database/Characters'

export type QuoteType = {
  character: ExistingCharacters
  sentence: string
}
