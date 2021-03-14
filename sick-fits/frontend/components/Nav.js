import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    display: flex;
    align-items: center;
    padding: 1rem 3rem;
    position: relative;
    text-transform: uppercase;
    border: none;
    background: none;
    font-size: 1em;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 1px;
      background-color: var(--lightGray);
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      transform: skew(-5deg);
    }
    &:after {
      content: '';
      height: 2px;
      background-color: var(--red);
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      margin-top: 3rem;
      transition: width 400ms cubic-bezier(1, -1, 0, 2);
    }
    &:hover,
    &:focus {
      text-decoration: none;
      outline: none;
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
      &:after {
        width: calc(100% - 70px);
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: flex-end;
    font-size: 1.5rem;
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </StyledNav>
  );
}
