import { useForm } from 'react-hook-form';

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: '400px', margin: '0 auto' }}
    >
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          {...register('fullName', { required: true })}
          placeholder="Enter your full name"
        />
        {errors.fullName && <p>Full name is required.</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: true })}
          placeholder="Enter your email"
        />
        {errors.email && <p>Email is required.</p>}
      </div>

      <div>
        <label htmlFor="birthDay">Date of Birth</label>
        <input
          id="birthDay"
          type="date"
          {...register('birthDay', { required: true })}
        />
        {errors.birthDay && <p>Date of birth is required.</p>}
      </div>

      <fieldset>
        <legend>Where did you hear about this event?</legend>
        <div>
          <input
            id="socialMedia"
            type="checkbox"
            {...register('referral', { required: true })}
            value="Social media"
          />
          <label htmlFor="socialMedia">Social media</label>
        </div>

        <div>
          <input
            id="friends"
            type="checkbox"
            {...register('referral', { required: true })}
            value="Friends"
          />
          <label htmlFor="friends">Friends</label>
        </div>

        <div>
          <input
            id="foundMyself"
            type="checkbox"
            {...register('referral', { required: true })}
            value="Found myself"
          />
          <label htmlFor="foundMyself">Found myself</label>
        </div>
        {errors.referral && <p>Please select at least one option.</p>}
      </fieldset>

      <button type="submit">Register</button>
    </form>
  );
}
