import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => (
  <Container>
    <Row>
      <a href="#">Compartilhar</a>
      <a href="#">Vender um igual</a>
    </Row>

    <Panel>
      <Column>
        <Gallery>
          <img src={tshirtImage} alt="T-Shirt" />
        </Gallery>

        <Info />
      </Column>

      <Column>
        <ProductAction />
        <SellerInfo />

        <WarrantySection />
        <WarrantySection />
        <WarrantySection />
      </Column>
    </Panel>
  </Container>
);

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o MercadoPago</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      perspiciatis cupiditate est. Quo, explicabo reprehenderit, rerum veniam
      natus expedita aut velit dolorem consectetur repudiandae itaque modi,
      porro nemo temporibus quam?
    </p>
  </Description>
);

export default Product;
