import { Formik } from 'formik';
import { ReactElement } from 'react';
import { Button } from '../../../shared/Button';
import { ITabsProps } from '../FirstTab/FirstTab';
import { testUser } from '../../../../pages/Profile/Profile';

function SecondTab({ isEditMode }: ITabsProps): ReactElement {
  function handleSubmit(): void {}

  return (
    <Formik initialValues={testUser} onSubmit={handleSubmit} validateOnBlur={false}>
      {({ handleSubmit }): ReactElement => (
        <form className="testFormClass" onSubmit={handleSubmit} noValidate>
          {isEditMode ? <Button type="submit" name="Save adress" className="TESTINFIRSTTABBTN" /> : ''}
        </form>
      )}
    </Formik>
  );
}

export default SecondTab;
