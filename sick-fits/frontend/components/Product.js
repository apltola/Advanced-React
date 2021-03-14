import styled from 'styled-components';
import Link from 'next/link';
import Title from './styles/Title';
import formatMoney from '../lib/formatMoney';

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
`;

const StyledPriceTag = styled.div`
  background-color: var(--red);
  color: white;
  position: absolute;
  right: -3px;
  top: -3px;
  padding: 0 1rem;
  font-size: 2rem;
  transform: rotate(5deg);
`;

export default function Product({ product }) {
  return (
    <StyledProduct>
      {/* TODO: implement with Next image */}
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <StyledPriceTag>{formatMoney(product.price)}</StyledPriceTag>
      <p>{product.description}</p>
    </StyledProduct>
  );
}
