Feature: Yahtzee game
    Single player yahtzee game

    Scenario: Player about to start game
        When player opens yahtzee
        Then player can start a game

    Scenario: Player starts the game
        Given player starts the game
        Then player can throw dices
