import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('Fitness App Landing Page', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders the header with logo and navigation links', () => {
    expect(screen.getByText(/FitFlow/i)).toBeInTheDocument()
    expect(screen.getByText(/Features/i)).toBeInTheDocument()
    expect(screen.getByText(/Pricing/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
  })

  it('displays the hero section with correct headline and call-to-action', () => {
    expect(screen.getByText(/Transform Your Fitness Journey/i)).toBeInTheDocument()
    expect(screen.getByText(/Start Your Free Trial/i)).toBeInTheDocument()
  })

  it('renders the features section with all feature cards', () => {
    expect(screen.getByText(/Personalized Workouts/i)).toBeInTheDocument()
    expect(screen.getByText(/Progress Tracking/i)).toBeInTheDocument()
    expect(screen.getByText(/Expert Coaching/i)).toBeInTheDocument()
  })

  it('displays the pricing section with three pricing tiers', () => {
    expect(screen.getByText(/Basic Plan/i)).toBeInTheDocument()
    expect(screen.getByText(/Premium Plan/i)).toBeInTheDocument()
    expect(screen.getByText(/Elite Plan/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Monthly/i).length).toBe(3)
  })

  it('renders the footer with copyright and social links', () => {
    expect(screen.getByText(/© 2023 FitFlow. All rights reserved./i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Instagram/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Twitter/i)).toBeInTheDocument()
  })
})