import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Login.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
    switch (action.type) {
      case 'USER_INPUT':
        return { value: action.val, isValid: action.val.includes('@') };
      case 'INPUT_BLUR':
        return { value: state.value, isValid: state.value.includes('@') };
      default:
        return { value: '', isValid: false };
    }
};
const passwordReducer = (state, action) => {
    switch (action.type) {
      case 'USER_INPUT':
        return { value: action.val, isValid: action.val.trim().length > 6 };
      case 'INPUT_BLUR':
        return { value: state.value, isValid: state.value.trim().length > 6 };
      default:
        return { value: '', isValid: false };
    }
  };

const Login = props => {
    const authCtx = useContext(AuthContext);
    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
    });
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
        const identifier = setTimeout(() => {
          setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);
    
        return () => {
          clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);
    
    const emailChangeHandler = event => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
      };
    
      const passwordChangeHandler = event => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
      };
    
      const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
      };
    
      const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
      };

      const submitHandler = event => {
        event.preventDefault();
        if (formIsValid) {
          authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
          emailInputRef.current.focus();
        } else {
          passwordInputRef.current.focus();
        }
      };

    return (
        <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id='email'
          label='E-Mail'
          type='email'
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id='password'
          label='Password'
          type='password'
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
    )

}
