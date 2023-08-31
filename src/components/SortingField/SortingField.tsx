import { ChangeEvent, ReactElement, useState } from 'react';
import { sorting } from '../../constant';
import { useSearchParams } from 'react-router-dom';
import { SearchParams } from '../../types/enums';
import { useDebounce } from '../../hooks';
import { changeParams } from '../../utils';

function SortingField(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get(SearchParams.Sort) || '');

  const debounceChangeParams = useDebounce(changeParams, 0);
  function handleChange(event: ChangeEvent<HTMLSelectElement>): void {
    const newValue = event.target.value;
    setSort(newValue);
    debounceChangeParams(setSearchParams, newValue, SearchParams.Sort);
  }

  return (
    <form>
      <label>
        <span>Sort by: </span>
        <select name="sorting" defaultValue={sort} onChange={handleChange}>
          {sorting.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default SortingField;
