window.addEventListener('load', () => {
  initApplication();
});

function initApplication() {
  showViewStartGame();
}

function showViewStartGame() {
  clearView();
  const appContainer = getElementById(yahtzeeAppId);
  const startGameButton = createButton('start-game-button', 'Start game');

  startGameButton.addEventListener('click', () => {
    showViewThrowDices();
  });
  appContainer.appendChild(startGameButton);
}

function showViewThrowDices() {
  clearView();
  const appContainer = getElementById(yahtzeeAppId);
  const throwDicesButton = createButton('throw-dices-button', 'Throw dices');
  appContainer.appendChild(throwDicesButton);
}

function createButton(id: string, text: string): HTMLElement {
  const button = document.createElement('button');
  button.id = id;
  button.appendChild(document.createTextNode(text));
  return button;
}

function clearView() {
  const appContainer = getElementById(yahtzeeAppId);
  while(appContainer.lastChild) {
    appContainer.removeChild(appContainer.lastChild);
  }
}

function getElementById(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error('Element with id ${id} not found!');
  }
  return element;
}



const yahtzeeAppId = 'yahtzee-app';
