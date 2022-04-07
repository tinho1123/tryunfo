import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      allCards: [],
    };
  }

  handlechange = ({ target: { name, value, checked, type } }) => {
    const newValue = type === 'checkbox' ? checked : value;
    if (['cardAttr1', 'cardAttr2', 'cardAttr3'].includes(name)) {
      return this.setNewValue({ name, value: parseInt(newValue, 10) });
    }
    return this.setNewValue({ name, value: newValue });
  }

  onSaveButtonClick = () => {
    const { ...newCard } = { ...this.state };

    delete newCard.hasTrunfo;
    delete newCard.isSaveButtonDisabled;

    newCard.id = newCard.allCards.length;
    newCard.allCards.push(newCard);
    const updatedCardDeck = newCard.allCards;
    delete newCard.allCards;

    const newState = { allCards: updatedCardDeck };

    if (!newCard.hasTrunfo && newCard.cardTrunfo) newState.hasTrunfo = true;

    this.setState(newState, this.resetState());
  }

  setNewValue({ name, value }) {
    this.setState({
      [name]: value,
    }, this.validateFormData);
  }

  setDisabledSaveButtonState(val) {
    this.setState({ isSaveButtonDisabled: val });
  }

  deleteCard(id) {
    const { allCards } = this.state;
    const updatedCardDeck = allCards
      .filter((card) => card.id !== id);
    const isTrunfo = allCards.find((card) => card.id === id).cardTrunfo;
    const newState = { allCards: updatedCardDeck };

    if (isTrunfo) newState.hasTrunfo = false;

    this.setState(newState);
  }

  hasEmptyFields() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    return [cardName, cardDescription, cardImage, cardRare]
      .some((field) => field === '');
  }

  hasWrongAttrValues(attr) {
    const minValue = 0;
    const maxValue = 90;
    return attr < minValue || attr > maxValue || (attr !== 0 && !attr);
  }

  hasWrongSum(attrs) {
    const maxSum = 210;
    const actualSum = attrs.reduce((sum, attr) => sum + parseInt(attr, 10), 0);
    return actualSum > maxSum;
  }

  hasWrongAttrs() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attrs = [cardAttr1, cardAttr2, cardAttr3];
    return this.hasWrongSum(attrs) || attrs.some(this.hasWrongAttrValues);
  }

  resetState() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  validateFormData() {
    if (this.hasEmptyFields() || this.hasWrongAttrs()) {
      this.setDisabledSaveButtonState(true);
    } else {
      this.setDisabledSaveButtonState(false);
    }
  }

  createCardData() {
    const { ...cardData } = { ...this.state };
    delete cardData.allCards;
    delete cardData.hasTrunfo;
    delete cardData.isSaveButtonDisabled;
    return cardData;
  }

  createFormData() {
    const { ...formData } = { ...this.state };
    delete formData.allCards;
    return formData;
  }

  render() {
    const formData = this.createFormData();
    const cardData = this.createCardData();
    const { allCards } = this.state;

    return (
      <div>
        <Form
          { ...formData }
          onInputChange={ this.handlechange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card { ...cardData } />
        <div>
          {
            allCards.map((cardInfo) => (
              <div key={ cardInfo.id }>
                <Card
                  { ...cardInfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.deleteCard(cardInfo.id) }
                >
                  Excluir
                </button>
              </div>))
          }
        </div>
      </div>
    );
  }
}

export default App;
