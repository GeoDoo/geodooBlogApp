import { transformApostrophe } from '../../src/utils/helpers'

describe('transformApostrophe function', () => {
	it('transforms successfully an apostrophe', () => {
		const ascii = '&#8217;'

		expect(transformApostrophe(ascii)).toEqual('\'')
	})

	it('returns the original string', () => {
		const string = 'adasda'

		expect(transformApostrophe(string)).toBe(string)
	})
})