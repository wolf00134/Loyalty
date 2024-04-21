import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss';
import LoadingButton from '@atlaskit/button/loading-button';
import TextField from '@atlaskit/textfield';
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormSection,
  HelperMessage,
  ValidMessage,
} from '@atlaskit/form';

const useStyles = createUseStyles({
  formWrapper: {
    display: 'flex',
    width: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    height: '100vh',
    margin: '0 auto',
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
  forgotPassword: {
    width: '100%',
    display: 'flex',
    marginTop: 25,
    justifyContent: 'end',
  },
  signUp: {
    width: '100%',
    height: '3rem',
    alignItems: 'center',
  }
})

function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.formWrapper}>
      <img src='https://i.pinimg.com/474x/38/9c/ab/389cab4fab3baa1227257cd58e765237.jpg' alt='' style={{ height: '100%' }}/>
      <Form
        onSubmit={(data) => {
          console.log('form data', data);
          return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
            data.username === 'error' ? { username: 'IN_USE' } : undefined,
          );
        }}
      >
        {({ formProps, submitting }) => (
          <form className={classes.formContent} {...formProps}>
            <div>
              <h2>Chào mừng đến với Loyalty Portal</h2>
              <p aria-hidden="true" style={{ margin: 0, fontSize: 12 }}>Vui lòng đăng nhập để sử dụng dịch vụ của chúng tôi</p>
              <FormSection>
                <Field
                  aria-required={true}
                  name="email"
                  label="Email"
                  isRequired
                >
                  {({ fieldProps, error }) => (
                    <Fragment>
                      <TextField autoComplete="off" {...fieldProps} />
                      {!error && (
                        <HelperMessage>
                          You can use letters, numbers, and periods
                        </HelperMessage>
                      )}
                      {error && (
                        <ErrorMessage>
                          This username is already in use, try another one
                        </ErrorMessage>
                      )}
                    </Fragment>
                  )}
                </Field>
                <Field
                  aria-required={true}
                  name="password"
                  label="Password"
                  defaultValue=""
                  isRequired
                  validate={(value) =>
                    value && value.length < 8 ? 'TOO_SHORT' : undefined
                  }
                >
                  {({ fieldProps, error, valid, meta }) => {
                    return (
                      <Fragment>
                        <TextField type="password" {...fieldProps} />
                        {error && !valid && (
                          <HelperMessage>
                            Use 8 or more characters with a mix of letters, numbers,
                            and symbols
                          </HelperMessage>
                        )}
                        {error && (
                          <ErrorMessage>
                            Password needs to be more than 8 characters
                          </ErrorMessage>
                        )}
                        {valid && meta.dirty ? (
                          <ValidMessage>Awesome password!</ValidMessage>
                        ) : null}
                      </Fragment>
                    );
                  }}
                </Field>
                <div className={classes.forgotPassword}>
                  <a href='' alt=''>Forgot password?</a>
                </div>
              </FormSection>

              <FormFooter>
                  <LoadingButton
                    type="submit"
                    appearance="primary"
                    isLoading={submitting}
                    className={classes.signUp}
                  >
                    Đăng nhập
                  </LoadingButton>
              </FormFooter>
            </div>
          </form>
        )}
    </Form>
  </div>
  );
}

export default SignIn;