# Testing Guide - NextDoc Global

## Testing Setup

We use **Vitest** + **React Testing Library** for component and unit testing.

## Running Tests

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

## Writing Tests

### Component Test Example

```tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Button>Click</Button>);
    expect(getByRole('button')).toBeInTheDocument();
  });
});
```

## Test Location

Place tests next to components:
```
src/components/
  Button.tsx
  __tests__/
    Button.test.tsx
```

## Future Expansion

- E2E tests with Playwright
- Visual regression testing
- Accessibility automated testing

---

**Testing is a foundation - expand as project grows**
