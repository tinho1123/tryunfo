import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome da carta:
          <input
            type="text"
            id="name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>

        <label htmlFor="description">
          Descrição da carta:
          <textarea
            id="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>

        <label htmlFor="firstAttribute">
          Primeiro atributo:
          <input
            type="number"
            id="firstAttribute"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
          />
        </label>

        <label htmlFor="secondAttribute">
          Segundo atributo
          <input
            type="number"
            id="secondAttribute"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
          />
        </label>

        <label htmlFor="thirdAttribute">
          Terceiro atributo:
          <input
            type="number"
            id="thirdAttribute"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>

        <label htmlFor="image">
          Imagem da carta:
          <input
            type="text"
            id="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>

        <label htmlFor="rareCard">
          Nivel de raridade da carta:
          <select
            id="rareCard"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        { hasTrunfo
          ? (
            <span>Você já tem um Super Trunfo em seu baralho</span>
          )
          : (
            <label htmlFor="checkbox">
              A carta é Super Trunfo?
              <input
                type="checkbox"
                id="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                name="cardTrunfo"
              />
            </label>
          )}

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
