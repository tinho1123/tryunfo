import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <h4 data-testid="attr1-card">{ cardAttr1 }</h4>
        <h4 data-testid="attr2-card">{ cardAttr2 }</h4>
        <h4 data-testid="attr3-card">{ cardAttr3 }</h4>
        <h5 data-testid="rare-card">{ cardRare }</h5>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null}
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
