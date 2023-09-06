import { render, fireEvent } from '@testing-library/react';
import ModalWindow from './ModalWindow';

describe('Test ModalWindow shared component', () => {
  const onCloseMock = jest.fn();

  it('Should renders children when isOpen is true', () => {
    const { getByText } = render(
      <ModalWindow isOpen={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </ModalWindow>,
    );

    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('Should not render children when isOpen is false', () => {
    const { queryByText } = render(
      <ModalWindow isOpen={false} onClose={onCloseMock}>
        <div>Modal Content</div>
      </ModalWindow>,
    );

    expect(queryByText('Modal Content')).toBeNull();
  });

  it('Should calls onClose when Close button is clicked', () => {
    const { getByText } = render(
      <ModalWindow isOpen={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </ModalWindow>,
    );

    const closeButton = getByText('Close');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
