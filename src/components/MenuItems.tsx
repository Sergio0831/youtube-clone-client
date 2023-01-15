import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuItems } from '../data/menuItems';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const MenuItems = () => {
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
                  <button>
                    <AccountCircleOutlinedIcon />
                    SIGN IN
                  </button>
                </Login>
                <hr />
                <h2>best of clonetube</h2>
              </>
            )}
            <li>
              {icon}
              {title}
            </li>
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
    margin: 1.5rem 0;
    border: 0.5px solid ${({ theme }) => theme.soft};
  }

  li {
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    padding: 7.5px 0;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textSoft};
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
`;

const Login = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 1.5rem;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 5px;
    cursor: pointer;
  }
`;
