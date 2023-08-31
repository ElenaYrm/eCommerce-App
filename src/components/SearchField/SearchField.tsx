import { ChangeEvent, ReactElement, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks';
import { SearchParams } from '../../types/enums';
import { changeParams } from '../../utils';

function SearchField(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get(SearchParams.Search) || '');

  const debounceChangeParams = useDebounce(changeParams, 500);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const newValue = event.target.value;
    setValue(newValue);
    debounceChangeParams(setSearchParams, newValue, SearchParams.Search);
  }

  function handleClick(): void {
    setValue('');
    debounceChangeParams(setSearchParams, '', SearchParams.Search);
  }

  return (
    <form>
      <label>
        <span className="visually-hidden">Search</span>

        <input value={value} onChange={handleChange} type="text" placeholder="Search product" />
      </label>

      <button type="button" onClick={handleClick} aria-label="Clear search">
        Clear
      </button>
    </form>
  );
}

export default SearchField;
