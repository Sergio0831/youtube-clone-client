import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuItems } from '../data/menuItems';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { toggleDarkTheme } from '../features/theme/themeSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import SignInButton from './ui/SignInButton';

const MenuItems = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.darkTheme);

  return (
    <Items>
      {menuItems.map((item) => {
        const { icon, title } = item;
        return (
          <React.Fragment key={title}>
            {title === 'Music' && (
              <>
                <Login>
                  Sign in to like videos, comment and subscribe.
                  <SignInButton />
                </Login>
                <hr />
                <h2>best of clonetube</h2>
              </>
            )}
            {title === 'Mode' ? (
              <ThemeButton onClick={() => dispatch(toggleDarkTheme())}>
                {icon}
                {theme ? 'Dark Mode' : 'Light Mode'}
              </ThemeButton>
            ) : (
              <li>
                {icon}
                {title}
              </li>
            )}

            {(title === 'Subscriptions' ||
              title === 'History' ||
              title === 'Live') && <hr />}
          </React.Fragment>
        );
      })}
    </Items>
  );
};

export default MenuItems;

const Items = styled.ul`
  hr {
    margin: 1.5rem 0 1.5rem 1rem;
    border: 0.5px solid ${({ theme }) => theme.soft};
  }

  li {
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    padding: 8px 0 8px 1rem;
    transition: ease 100ms;

    &:hover {
      background-color: ${({ theme }) => theme.soft};
      border-radius: 1rem;
    }
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textSoft};
    margin-bottom: 1.5rem;
    margin-left: 1rem;
    text-transform: uppercase;
  }
`;

const Login = styled.div`
  padding-left: 1rem;

  button {
    margin-top: 5px;
  }
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  width: 100%;
  gap: 2rem;
  cursor: pointer;
  padding: 8px 0 8px 1rem;
  font: inherit;
  color: inherit;
  transition: ease 100ms;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
    border-radius: 1rem;
  }
`;
