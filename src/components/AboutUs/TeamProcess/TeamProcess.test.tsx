import { render } from '@testing-library/react';
import TeamProcess from './TeamProcess';

describe('Test TeamProcess component', () => {
  it('Should correctly displays headings and paragraphs.', () => {
    const { getByText } = render(<TeamProcess />);

    expect(getByText('Teamwork & Process')).toBeInTheDocument();
    expect(getByText('Project Kickoff')).toBeInTheDocument();

    expect(getByText(/Hey! We are a team of 3 developers/i)).toBeInTheDocument();
    expect(getByText(/Let's have a look at our workflow/i)).toBeInTheDocument();
    expect(getByText(/We did this meeting right before Sprint 1 started/i)).toBeInTheDocument();
    expect(getByText(/Actually, we needed more than one kickoff./i)).toBeInTheDocument();
  });
});
