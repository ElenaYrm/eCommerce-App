import { render, fireEvent, screen } from '@testing-library/react';

import ModalWindow from './ModalWindow';

describe('Test ModalWindow shared component', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="modal" />';
  });

  const onCloseMock = jest.fn();

  it('Should renders children when isOpen is true with Close button', () => {
    const { baseElement } = render(
      <ModalWindow isOpen={true} onClose={onCloseMock} isShowCloseBtn={true}>
        <div>Modal Content</div>
      </ModalWindow>,
    );

    expect(baseElement).toMatchSnapshot();
    expect(screen.queryByText('Modal Content')).toBeInTheDocument();
    expect(screen.queryByText('Close')).toBeInTheDocument();
  });

  it('Should renders children when isOpen is true without Close button', () => {
    const { baseElement } = render(
      <ModalWindow isOpen={true} onClose={onCloseMock} isShowCloseBtn={false}>
        <div>Modal Content</div>
      </ModalWindow>,
    );

    expect(baseElement).toMatchSnapshot();
    expect(screen.queryByText('Modal Content')).toBeInTheDocument();
    expect(screen.queryByText('Close')).not.toBeInTheDocument();
  });

  it('Should not render children when isOpen is false', () => {
    const { baseElement } = render(
      <ModalWindow isOpen={false} onClose={onCloseMock} isShowCloseBtn={true}>
        <div>Modal Content</div>
      </ModalWindow>,
    );

    expect(baseElement).toMatchSnapshot();
    expect(screen.queryByText('Modal Content')).toBeNull();
  });

  it('Should calls onClose when Close button is clicked', () => {
    const { baseElement } = render(
      <ModalWindow isOpen={true} onClose={onCloseMock} isShowCloseBtn={true}>
        <div>Modal Content</div>
      </ModalWindow>,
    );
    expect(baseElement).toMatchSnapshot();

    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
