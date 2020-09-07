import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import { Container,
  Row,
  Panel,
  Column,
  Galery,
  Section,
  Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Galery>
            <img src={tshirtImage} alt="T-Shirt"/>
          </Galery>
          <Info />
        </Column>


        <Column>
          {/* <ProductAction /> */}
          {/* <SallerInfo />  */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Chris</p>
        <p className="description">
          Receba o produto que está esperando e não aceitamos devolução
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">
          sem garantia
        </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eleifend
    nibh. Aliquam lacus nisl, venenatis vel tempor in, aliquet ut tortor.
    Suspendisse dignissim justo et iaculis tincidunt. Phasellus at viverra elit,
    a sollicitudin nisi. Praesent gravida non erat at elementum. Phasellus non
    imperdiet purus. Mauris lacinia nulla vel nisi accumsan faucibus. Donec
    imperdiet vel turpis non cursus. Vivamus quis semper mi, et molestie nulla.
    Pellentesque sodales varius odio, non tempus magna volutpat posuere.
    <br/>
    <br/>
    Intens inclusos: <br />
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eleifend
    nibh. Aliquam lacus nisl, venenatis vel tempor in, aliquet ut tortor.
    Suspendisse dignissim justo et iaculis tincidunt. Phasellus at viverra elit,
    a sollicitudin nisi. Praesent gravida non erat at elementum. Phasellus non
    imperdiet purus. Mauris lacinia nulla vel nisi accumsan faucibus. Donec
    imperdiet vel turpis non cursus. Vivamus quis semper mi, et molestie nulla.
    Pellentesque sodales varius odio, non tempus magna volutpat posuere.
    </p>
  </Description>
)

export default Product;
