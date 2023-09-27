import { render } from '@testing-library/react';
import TeamProcessList from './TeamProcessList.tsx';
import { teamworkText } from '../../constant/about-teamwork.ts';

describe('Test TeamProcessList component', () => {
  it('Should correctly displays headings and paragraphs.', () => {
    const { getByText } = render(<TeamProcessList content={teamworkText} />);

    expect(getByText('Teamwork & Process')).toBeInTheDocument();
    expect(getByText('Project Kickoff')).toBeInTheDocument();

    expect(getByText(/Hey! We are the team who has been working/i)).toBeInTheDocument();
    expect(getByText(/Let’s have a look at our workflow/i)).toBeInTheDocument();
    expect(getByText(/We did this meeting right before Sprint 1 started/i)).toBeInTheDocument();
    expect(getByText(/We needed more than one call/i)).toBeInTheDocument();
  });
});
