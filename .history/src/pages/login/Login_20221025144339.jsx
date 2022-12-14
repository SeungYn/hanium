import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';

import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { InputAdornment } from '@mui/material';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function Login() {
  const [signup, setSignup] = useState(false);
  const [signForm, setSignForm] = useState({
    loginid: '',
    nickname: '',
    password: '',
    passwordVerification: '',
    sex: '',
    email: '',
    university: '',
    dept: '',
    sno: '',
  });

  const onChange = (event) => {
    const {
      target: { name, value, checked },
    } = event;

    switch (name) {
      case 'nickname':
        return setSignForm((f) => ({ ...f, nickname: value }));
      case 'loginId':
        return setSignForm((f) => ({ ...f, loginId: value }));
      case 'password':
        return setSignForm((f) => ({ ...f, password: value }));
      case 'passwordVerification':
        return setSignForm((f) => ({ ...f, passwordVerification: value }));
      // if (value != password) {
      //   return setPasswordVerificationError(true);
      // } else {
      //   return setPasswordVerificationError(false);
      // }
      case 'sex':
        return setSignForm((f) => ({ ...f, sex: value }));
      case 'email':
        return setSignForm((f) => ({ ...f, email: value }));

      case 'university':
        return setSignForm((f) => ({ ...f, university: value }));
      case 'dept':
        return setSignForm((f) => ({ ...f, dept: value }));
      case 'sno':
        return setSignForm((f) => ({ ...f, sno: value }));
      case 'authenticationNumber':
        return console.log('authenticationNumber');
      case 'signup':
        return setSignup(checked);
      default:
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.authTitle}>Spring Server</h2>
      <form className={styles.authForm} onSubmit={submit}>
        <div className={styles.authForm__itemList}>
          <div className={styles.authForm__item}>
            <TextField
              name='loginId'
              required
              // error={loginIdError || duplicateError}
              // helperText={
              //   duplicateError
              //     ? '???????????? ?????? ???????????????.'
              //     : loginIdError
              //     ? '???????????? ??????????????? ???????????? ????????????.'
              //     : ''
              // }
              id='standard-required'
              label='?????????'
              variant='standard'
              value={signForm.loginid}
              onChange={onChange}
              type='text'
              fullWidth
            />
          </div>
          <div className={styles.authForm__item}>
            <TextField
              id='standard-password-input'
              name='password'
              value={signForm.password}
              label='????????????'
              onChange={onChange}
              variant='standard'
              type='password'
              fullWidth
              required
            />
          </div>

          {signup && (
            <div className={styles.authForm__item}>
              <TextField
                name='passwordVerification'
                required
                // error={passwordVerificationError}
                // helperText={
                //   passwordVerificationError
                //     ? '??????????????? ???????????? ????????????.'
                //     : ''
                // }
                label='??????????????????'
                variant='standard'
                value={signForm.passwordVerification}
                onChange={onChange}
                fullWidth
              />
            </div>
          )}
          {signup && (
            <div className={styles.authForm__item}>
              <TextField
                name='nickname'
                required
                label='?????????'
                variant='standard'
                value={nickname}
                onChange={onChange}
                fullWidth
              />
            </div>
          )}
          {signup && (
            <div className={styles.authForm__emailGroup}>
              <div className={styles.emailGroup__top}>
                <TextField
                  name='email'
                  required
                  label='?????????'
                  type='email'
                  variant='standard'
                  value={email}
                  onChange={onChange}
                  fullWidth
                />
                <button
                  type='button'
                  className={styles.emailBtn}
                  disabled={!emailVerification}
                  onClick={onAuthenticationAtivate}
                >
                  ????????????
                </button>
              </div>
            </div>
          )}
          {signup && authenicationAtivation && (
            <div className={styles.authForm__emailGroup}>
              <div className={styles.emailGroup__top}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <CheckIcon
                          color={
                            authenticationNumberVerification ? 'success' : ''
                          }
                        />
                      </InputAdornment>
                    ),
                  }}
                  error={!authenticationNumberVerification}
                  id='standard-number-input'
                  name='authenticationNumber'
                  value={authenticationNumber}
                  label='????????????'
                  onChange={onChange}
                  variant='standard'
                  type='text'
                  fullWidth
                  required
                />
                <button
                  type='button'
                  className={styles.emailBtn}
                  disabled={!authenticationNumber}
                  onClick={onAuthenticationNumberVerification1}
                >
                  ??????
                </button>
              </div>
            </div>
          )}
          {signup && (
            <div className={styles.authForm__item}>
              <InputLabel id='university'>?????????</InputLabel>
              <Select
                labelId='university'
                name='university'
                value={university}
                onChange={onChange}
                fullWidth
                variant='standard'
              >
                <MenuItem value='?????????'>?????????</MenuItem>
              </Select>
            </div>
          )}
          {signup && (
            <div className={styles.authForm__item}>
              <TextField
                name='dept'
                required
                label='??????'
                type='text'
                variant='standard'
                value={dept}
                onChange={onChange}
                fullWidth
              />
            </div>
          )}
          {signup && (
            <div className={styles.sno_gender}>
              <div className={styles.authForm__item}>
                <InputLabel id='sno'>??????</InputLabel>
                <Select
                  labelId='sno'
                  name='sno'
                  value={sno}
                  onChange={onChange}
                  fullWidth
                  variant='standard'
                >
                  <MenuItem value='17'>17</MenuItem>
                  <MenuItem value='18'>18</MenuItem>
                  <MenuItem value='19'>19</MenuItem>
                  <MenuItem value='20'>20</MenuItem>
                  <MenuItem value='21'>21</MenuItem>
                  <MenuItem value='22'>22</MenuItem>
                  <MenuItem value='23'>23</MenuItem>
                </Select>
              </div>
              <div className={styles.gender__container}>
                <FormLabel id='demo-controlled-radio-buttons-group'>
                  ??????
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby='demo-controlled-radio-buttons-group'
                  name='sex'
                  value={sex}
                  onChange={onChange}
                >
                  <div className={styles.groupItems}>
                    <FormControlLabel
                      value='FEMALE'
                      control={<Radio />}
                      label='Female'
                    />
                    <FormControlLabel
                      value='MALE'
                      control={<Radio />}
                      label='Male'
                    />
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
        </div>
        <div className={styles.form_signup}>
          <input
            name='signup'
            id='signup'
            type='checkbox'
            onChange={onChange}
            checked={signup}
          />
          <label htmlFor='signup'> Create a new account?</label>
        </div>
        <button className={styles.auth_btn} type='submit'>
          {signup ? '????????????' : '?????????'}
        </button>
      </form>
    </section>
  );
}
