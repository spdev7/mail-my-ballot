import { toLetter } from '.'
import { signatureStateInfo } from './router'
import { availableStates } from '../../common'

test('Leteer for all states render correctly', () => {
  const confirmationId = 'sampleConfirmationId'

  const letters = availableStates.map(state => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return toLetter({...signatureStateInfo, state: state as any}, confirmationId)
  }).filter(letter => !!letter)
  
  letters.forEach(letter => {
    expect(letter?.md).toContain(confirmationId)
    /*
      A poor man's test for missing fields
      since most fields are '**{{field}}**' 
    */
    expect(letter?.md).not.toContain('****')
  })
})