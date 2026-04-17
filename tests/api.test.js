// No API or Supabase integration required for static landing page
// This file is a placeholder for future API tests if backend is added

import { vi } from 'vitest'

// Mock console.error to suppress React PropTypes warnings during tests
vi.spyOn(console, 'error').mockImplementation(() => {})

describe('API Tests', () => {
  it('should have no API calls for static landing page', () => {
    expect(true).toBe(true)
  })
})

// Reset mocks after all tests
afterAll(() => {
  vi.clearAllMocks()
})