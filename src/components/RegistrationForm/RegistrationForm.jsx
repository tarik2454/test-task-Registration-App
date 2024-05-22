import { useForm } from 'react-hook-form';

import { addParticipants } from '../../apiServices/apiServices';

import styles from './RegistrationForm.module.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RegistrationForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const params = useParams();
  const eventId = params.eventId;

  const onSubmit = async data => {
    try {
      data.eventId = eventId;
      await addParticipants(data);
      setIsSuccess(true);
      setIsError(false);
      reset();
    } catch (error) {
      setIsSuccess(false);
      setIsError(true);
      console.warn(error.message);
    }
  };

  return (
    <>
      {(isSuccess || isError) && (
        <p
          style={{
            color: isSuccess ? 'green' : 'rgb(216, 47, 47)',
            marginBottom: '10px',
          }}
        >
          {isSuccess
            ? 'Data successfully submitted!'
            : 'Data submission failed!'}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_inner}>
          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="fullName">
              Full Name
            </label>
            <input
              className={styles.form_input}
              id="fullName"
              {...register('fullName', { required: true })}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className={styles.form_error}>Full name is required.</p>
            )}
          </div>

          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.form_input}
              id="email"
              type="email"
              {...register('email', { required: true })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className={styles.form_error}>Email is required.</p>
            )}
          </div>

          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="birthDay">
              Date of birth
            </label>
            <input
              className={styles.form_input}
              id="birthDay"
              type="date"
              {...register('birthDay', { required: true })}
            />
            {errors.birthDay && (
              <p className={styles.form_error}>Date of birth is required.</p>
            )}
          </div>
        </div>

        <fieldset className={styles.checkbox}>
          <legend className={styles.checkbox_title}>
            Where did you hear about this event?
          </legend>

          <div className={styles.checkbox_inner}>
            <div className={styles.checkbox_group}>
              <input
                className={styles.checkbox_input}
                id="socialMedia"
                type="checkbox"
                {...register('referral', { required: true })}
                value="Social media"
              />
              <label htmlFor="socialMedia">Social media</label>
            </div>

            <div className={styles.checkbox_group}>
              <input
                className={styles.checkbox_input}
                id="friends"
                type="checkbox"
                {...register('referral', { required: true })}
                value="Friends"
              />
              <label htmlFor="friends">Friends</label>
            </div>

            <div className={styles.checkbox_group}>
              <input
                className={styles.checkbox_input}
                id="foundMyself"
                type="checkbox"
                {...register('referral', { required: true })}
                value="Found myself"
              />
              <label htmlFor="foundMyself">Found myself</label>
            </div>
          </div>
          {errors.referral && (
            <p className={styles.form_error}>
              Please select at least one option.
            </p>
          )}
        </fieldset>

        <button type="submit" className={styles.form_button}>
          Register
        </button>
      </form>
    </>
  );
}
