import { render } from '@testing-library/react';
import { PasswordChecklist } from '.';

describe('Test PasswordChecklist shared component', () => {
  test('Should renders with all rules as invalid', () => {
    const { container } = render(<PasswordChecklist password="password" />);

    expect(container).toBeInTheDocument();

    const ruleElements = container.querySelectorAll('.check-item');
    ruleElements.forEach((ruleElement) => {
      expect(ruleElement.outerHTML).not.toContain('class="valid"');
    });
  });

  test('Should renders with all rules as valid', () => {
    const { container } = render(<PasswordChecklist password="Qwer123$" />);

    expect(container).toBeInTheDocument();

    const ruleElements = container.querySelectorAll('.check-item');
    ruleElements.forEach((ruleElement) => {
      expect(ruleElement).toHaveClass('valid');
    });
  });
});
