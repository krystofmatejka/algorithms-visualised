import {HashTable} from './hash-table'

describe('Hash table', () => {
  it('should set and retrieve multiple values', () => {
    const addressBook = new HashTable<string>()

    addressBook.set('Franta', 'Prague 1')
    addressBook.set('Pepa', 'Prague 4')
    addressBook.set('Jirka', 'Brno')

    expect(addressBook.get('Franta')).toBe('Prague 1')
    expect(addressBook.get('Pepa')).toBe('Prague 4')
    expect(addressBook.get('Jirka')).toBe('Brno')
  })

  it('should set and delete value', () => {
    const addressBook = new HashTable<string>()

    addressBook.set('Helča', 'Aš')
    addressBook.delete('Helča')

    expect(addressBook.get('Helča')).toBeUndefined()
  })
})
