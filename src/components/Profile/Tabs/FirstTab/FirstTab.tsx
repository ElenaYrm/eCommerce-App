import styles from './firstTab.module.scss';

import classNames from 'classnames';
import { Formik, FormikErrors } from 'formik';
import { Input } from '../../../../types/enums';
import { InputField } from '../../../shared/InputField';
import { ReactElement, useEffect } from 'react';
import { dateMYValidate, emailValidate, lastNameValidate, nameValidate } from '../../../../utils/validation';
import { IUser } from '../../../../types/interfaces';
import { UserDateOfBirth } from './UserDateOfBirth';
import { Button } from '../../../shared/Button';
import { useIsEditMode, useUpdateEditMode } from '../../../../pages/Profile/profileContext';
import { useSelector } from 'react-redux';
import { selectUserData, selectUserLoadingInfo } from '../../../../store/user/selectors';
import { useAppDispatch } from '../../../../store/store';
import { getUserThunk, updUserThunk } from '../../../../store/user/thunks';
import { IUpdateUser } from '../../../../services/sdk/customer/types';
import { months } from '../../../../constant';
import { getMonthIndex } from '../../../../utils';
import { ErrorMessage } from '../../../shared/ErrorMessage';
import { Loader } from '../../../shared/Loader';

function FirstTab(): ReactElement {
  const { status, error } = useSelector(selectUserLoadingInfo);
  const isEditMode = useIsEditMode();
  const updateEditMode = useUpdateEditMode();
  const user = useSelector(selectUserData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.id) {
      dispatch(getUserThunk());
    }
  }, [user, dispatch]);

  function handleSubmit(values: IUser): void {
    const { year, month, date } = values;
    const dateOfBirth = year + '-' + getMonthIndex(month) + '-' + (date.length === 1 ? `0${date}` : date);
    const newValue: IUpdateUser = {
      id: values.id,
      version: values.version,
      action: [
        { action: 'setFirstName', firstName: values.firstName },
        { action: 'setLastName', lastName: values.lastName },
        { action: 'changeEmail', email: values.email },
        { action: 'setDateOfBirth', dateOfBirth: dateOfBirth },
      ],
    };

    dispatch(updUserThunk(newValue));
  }

  function validateDate(values: IUser): void | object | Promise<FormikErrors<IUser>> {
    const errors: FormikErrors<IUser> = {};
    errors[Input.Date] = dateMYValidate(
      `${values[Input.Date]}${months[Number(getMonthIndex(values[Input.Month])) - 1]}${values[Input.Year]}`,
    );
    if (!errors[Input.Date]) return {};
    return errors;
  }

  return (
    <>
      {status === 'loading' && <Loader />}
      <Formik initialValues={user} validate={validateDate} onSubmit={handleSubmit} validateOnBlur={false}>
        {({ handleSubmit, errors, touched, setFieldTouched, handleChange, resetForm }): ReactElement => (
          <form
            className={classNames(styles.form, { [styles.formEdit]: isEditMode })}
            onSubmit={handleSubmit}
            noValidate
          >
            <InputField
              className={`${styles.form__input} ${isEditMode ? styles.formEdit__input : ''}`}
              placeholder="First name"
              error={errors?.[Input.FirstName]}
              touched={touched?.[Input.FirstName]}
              validate={nameValidate}
              setFieldTouched={setFieldTouched}
              isDisabled={!isEditMode}
              fieldName={Input.FirstName}
              labelText="Name"
              hideLabel={!isEditMode}
            />
            <InputField
              className={`${styles.form__input} ${isEditMode ? styles.formEdit__input : ''}`}
              placeholder="Last name"
              error={errors?.[Input.LastName]}
              touched={touched?.[Input.LastName]}
              validate={lastNameValidate}
              setFieldTouched={setFieldTouched}
              isDisabled={!isEditMode}
              fieldName={Input.LastName}
              labelText="Last name"
              hideLabel={!isEditMode}
            />
            <InputField
              className={classNames(
                styles.form__email,
                styles.form__input,
                { [styles.formEdit__email]: isEditMode },
                { [styles.formEdit__input]: isEditMode },
              )}
              placeholder="Email"
              error={errors?.[Input.Email]}
              touched={touched?.[Input.Email]}
              validate={emailValidate}
              setFieldTouched={setFieldTouched}
              isDisabled={!isEditMode}
              fieldName={Input.Email}
              labelText="Email"
              hideLabel={!isEditMode}
            />
            {isEditMode && (
              <UserDateOfBirth
                touched={touched}
                handleChange={handleChange}
                values={user}
                errors={errors}
                setFieldTouched={setFieldTouched}
              />
            )}
            {!isEditMode && <div className={styles.form__dateOfBirth}>{`${user.date} ${user.month} ${user.year}`}</div>}

            {!isEditMode && <Button name="Edit  ( ´･ω･)" type="button" onClick={(): void => updateEditMode()} />}
            {isEditMode && <Button name="Save changes" type="submit" className={styles.formEdit__btn} />}
            {isEditMode && (
              <button
                type="button"
                className={styles.formEdit__closeBtn}
                onClick={(): void => {
                  updateEditMode(false);
                  resetForm();
                }}
              >
                Close
              </button>
            )}
          </form>
        )}
      </Formik>
      {error && <ErrorMessage className={styles.errorResponse} text="Something bad happened... Try again! (つω`｡)" />}
      {status === 'success' && !error && (
        <div className={styles.successResponse}>Profile information was successfully updated ٩(｡•́‿•̀｡)۶</div>
      )}
    </>
  );
}

export default FirstTab;
