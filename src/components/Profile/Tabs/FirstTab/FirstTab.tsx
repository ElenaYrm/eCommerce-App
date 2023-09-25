import styles from './firstTab.module.scss';

import classNames from 'classnames';
import { Formik, FormikErrors } from 'formik';
import { Input } from '../../../../types/enums';
import { InputField } from '../../../shared/InputField';
import { ReactElement, useContext, useEffect } from 'react';
import { dateMYValidate, emailValidate, lastNameValidate, nameValidate } from '../../../../utils/validation';
import { IUser } from '../../../../types/interfaces';
import { UserDateOfBirth } from './UserDateOfBirth';
import { Button } from '../../../shared/Button';
import { useSelector } from 'react-redux';
import { selectEditUserInfo, selectUserData } from '../../../../store/user/selectors';
import { useAppDispatch } from '../../../../store/store';
import { getUserThunk, updUserThunk } from '../../../../store/user/thunks';
import { IUpdateUser } from '../../../../services/sdk/customer/types';
import { months } from '../../../../constant';
import { getMonthIndex } from '../../../../utils';
import { ErrorMessage } from '../../../shared/ErrorMessage';
import { deleteSuccessState, resetEditError } from '../../../../store/user/slice';
import { ModeContext } from '../../../../context/mode/ModeContext.ts';

function FirstTab(): ReactElement {
  const { editStatus, editError, isSuccess } = useSelector(selectEditUserInfo);
  const { isEditMode, toggleEditMode } = useContext(ModeContext);
  const user = useSelector(selectUserData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.id) {
      dispatch(getUserThunk());
    }

    if (editStatus === 'success') {
      toggleEditMode();
      const timer = setTimeout(() => {
        dispatch(deleteSuccessState());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }

    if (editError) {
      const timer = setTimeout(() => {
        dispatch(resetEditError());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [user, dispatch, editStatus, editError]);

  function handleSubmit(values: IUser): void {
    const { year, month, date } = values;
    const newMonth = getMonthIndex(month);
    const dateOfBirth =
      year +
      '-' +
      (String(newMonth).length === 1 ? `0${newMonth}` : newMonth) +
      '-' +
      (date.length === 1 ? `0${date}` : date);
    const newValue: IUpdateUser = {
      id: user.id,
      version: user.version,
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
      {editError && (
        <ErrorMessage className={styles.errorResponse} text="Something bad happened... Try again! (つω`｡)" />
      )}
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
              fieldName={Input.FirstName}
              labelText="Name"
              hideLabel={!isEditMode}
              isDisabled={editStatus === 'loading' || !isEditMode}
            />
            <InputField
              className={`${styles.form__input} ${isEditMode ? styles.formEdit__input : ''}`}
              placeholder="Last name"
              error={errors?.[Input.LastName]}
              touched={touched?.[Input.LastName]}
              validate={lastNameValidate}
              setFieldTouched={setFieldTouched}
              fieldName={Input.LastName}
              labelText="Last name"
              hideLabel={!isEditMode}
              isDisabled={editStatus === 'loading' || !isEditMode}
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
              fieldName={Input.Email}
              labelText="Email"
              hideLabel={!isEditMode}
              isDisabled={editStatus === 'loading' || !isEditMode}
            />
            {isEditMode && (
              <UserDateOfBirth
                touched={touched}
                handleChange={handleChange}
                values={user}
                errors={errors}
                setFieldTouched={setFieldTouched}
                isDisabled={editStatus === 'loading' || !isEditMode}
              />
            )}
            {!isEditMode && <div className={styles.form__dateOfBirth}>{`${user.date}.${user.month}.${user.year}`}</div>}

            {!isEditMode && <Button name="Edit  ( ´･ω･)" type="button" handleClick={toggleEditMode} />}
            {isEditMode && (
              <Button
                name={editStatus === 'loading' ? 'Loading...' : 'Save changes'}
                type="submit"
                className={styles.formEdit__btn}
                disabled={editStatus === 'loading'}
              />
            )}
            {isEditMode && (
              <button
                type="button"
                className={styles.formEdit__closeBtn}
                onClick={(): void => {
                  toggleEditMode();
                  resetForm();
                  dispatch(resetEditError());
                }}
              >
                Close
              </button>
            )}
          </form>
        )}
      </Formik>
      {isSuccess && (
        <div className={styles.successResponse}>Profile information was successfully updated ٩(｡•́‿•̀｡)۶</div>
      )}
    </>
  );
}

export default FirstTab;
