import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/button';

/**
 * Button Component Tests
 * 
 * Example test file demonstrating testing patterns for NextDoc Global.
 * This is a foundation - expand with comprehensive tests as needed.
 */

describe('Button Component', () => {
  it('renders with text', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    expect(getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>);
    
    await user.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    const { getByRole } = render(<Button disabled>Disabled Button</Button>);
    expect(getByRole('button')).toBeDisabled();
  });

  it('applies variant styles correctly', () => {
    const { rerender, getByRole } = render(<Button variant="default">Default</Button>);
    expect(getByRole('button')).toHaveClass('bg-primary');
    
    rerender(<Button variant="outline">Outline</Button>);
    expect(getByRole('button')).toHaveClass('border-input');
  });

  it('applies size styles correctly', () => {
    const { getByRole } = render(<Button size="lg">Large Button</Button>);
    expect(getByRole('button')).toHaveClass('h-11');
  });

  it('accepts custom className', () => {
    const { getByRole } = render(<Button className="custom-class">Custom</Button>);
    expect(getByRole('button')).toHaveClass('custom-class');
  });
});
