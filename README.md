# Lowtide UI

User Interface for Analytics Demo Data Tool by Salesforce's Einstein Analytics Product Marketing Management Team. React client that consumes [Lowtide Backend](https://github.com/luciyer-sfdc/lowtide).

![DDT Deploy Screen](https://i.imgur.com/6RxZx8G.png)

## Installing

You will need to have npm installed on your machine. Clone this repository and move to the root directory. Run `npm install` to install dependencies. Then you can start development server with `npm start`, which runs by default on port `3000`. Generate a production-optimized build, with `npm run build`.

## Documentation

This project uses React functional components, hooks and Context API. Additionally, it uses [React Router](https://reactrouter.com/) for client-side routing, UI components from [Material-UI](https://material-ui.com/), [custom hooks](https://reactjs.org/docs/hooks-custom.html) to separate UI from logic, and [Sass](https://sass-lang.com/) for custom styling. Deploy and timeshift pages follow the same UI paradigm, with cards on the left representing the tool available resources, and the ones on the right, those that the logged-in user has in their org.

### Routing

The application has **3 main routes**: `/deploy`, `/timeshift` (with their correspondent functionality), and `/jobs` (which displays the logs the backend sends when the previously mentioned tasks run). Additionally, theres a `/login` route which display a form for the user to login with their Salesforce account.

The `/` (home) route, redirects either to the `deploy` route –if a user is logged in– or to the login route if not. The `login` route redirects to `deploy` if a user is already logged in. The three main routes redirect to `login` if there is no logged-in user.

### Context

The application uses React Context API to share state between components. `SessionContext.js` will be in charge of providing all information about the session (e.g. logged in user, jobs, org info) to all the application. `FilterContext.js` will be used in the deploy page to communicate the components that set the selected tags and search words (`Filterbox.js` and `SearchBar.js`, respectively) with the one that displays the filtered cards (`CardContainer.js`).

### Custom Hooks

Component files should be kept short and focused on UI, so for large and reusable functionality, this project uses Custom Hooks, which is a convention that moves the application logic to their own files and return the data that the component needs to properly render the interface.

`useCards.js`: Takes `type`(available/org) as a parameter. Takes care of getting the cards information from the backend API, the tags selected on `FilterBox.js` and the words inputted on `SearchBar.js` and returning the list of cards that should be rendered in each CardContainer.

`useFilters.js`: Takes `type`(available/org) as a parameter. Handles the functionality of opening and closing the `FilterBox` component, getting all the tags that can be used, setting the selected tags, removing tags and updating the tags selected in the FiltersContext.

`useLogin.js`: Is in charge of logging in to the backend application, with information provided in the login screen, and setting up the SessionContext information related to the user.

### Components

These are the components used in this project. For ease of comprenhension, this list is ordered in a way that related elements are consecutive.

#### `NavBar`

The navbar is rendered in every main route. It displays the tool icon and name, navigation links, the current user and logout button, and the settings button. Takes the following props:

- `activeTab`: _String_. The current page of the application.

#### `SettingsDrawer`

Has a config button and the overlayed element that shows the configuration options when the button is clicked. It is a `Drawer` component from MaterialUI. Takes the following props:

- `position`: _String_. Position where the drawer is going to be shown (top, right, bottom or left)

#### `Card`

Each card represents a resource from the Demo Data Tool that can be deployed (or already exists) in the user's org. It is an expandable `accordion` (From MaterialUI), and displays the template name, author, version , description and tags. Takes the following props:

- `type`: _String_. Type of card to render (`available`/`org`).
- `startSelected`: _Boolean_. Works for cards of type `available` Determines if the card is gonna start with an state of selected (Checkbox checked and blue background).
- `startExpanded`: _Boolean_. Determines if the card is gonna be expanded by default.
- `warning`: _Boolean_. Determines if the card is gonna have a warning badge ("New Template" for repo cards, and "Old template" for org cards). If true for a card of type `org` it will also make the card background be `warning` color (see `assets/variables.scss`).
- `data`: _Object_. Information to be displayed in the card (name, author, version, description, tags).

#### `Checkbox`

A custom checkbox that is mainly used by cards of type _org_, but can be used for different purposes across the app. Uses the `Checkbox` component from MaterialUI as base. Takes the following props:

- `selected`: _Boolean_. Determines if the checkbox is checked or not by default.
- `setParentSelected`: _function_. A function used to update the parent's selected state from the Checkbox component.

#### `Badge`

A custom badge that is mainly used by cards –to indicate that there's a new version (for repo cards) or that it's an old version (for org cards), but can be used for different purposes across the app. Uses the `Paper` component as its base element. Takes the following props:

- `background`: _String_. Determines the background color of the badge.
- `color`: _String_. Determines the text color of the badge.
- `text`: _String_. Content to be display in the badge.

#### `CardContainer`

A component that displays all cards of either type available (repo) or org, and a SearchBar to filter the cards. Rathen than passing the cards as a conventional props, Card Container expects the cards to be passed as childen props in order to render them. It uses `Paper` component from MaterialUI as base. Takes the following props:

- `type`: _String_. The type of card container (`available`/`org`)
- `styles`: _Object_. Object with the desired width and height of the CardContainer.

#### `SearchBar`

A bar where the user can enter a keyword or select tags to filter the card results in a `CardContainer`. It's based on the `Paper` component from MaterialUI and also uses the `InputBase` component. It receives just a `type` prop (`available`/`org`), which needs to be passed to the `FilterBox` component that `SearchBar` has nested.

#### `FilterBox`

Based on the `Popover` and `Button` component from MaterialUI, it can be opened to select the filters that the user wants to filter the Card results by. Takes the `type` (`available`/`org`) as a prop. The Popover is showed when the button is clicked, and closed with a button inside it, or by simply clicking in any other area of the screen.

When filters are selected in the FilterBox, it's only reflected in the component own state. The user would have to hit the `Save` button in order to update the filters in the FiltersContext, and so be reflected in the CardsContainer (deploy page).

#### `Tag`

Based on the `Chip` component from MaterialUI, it represents a tag of the tool templates. It's used both in the cards to show the specific template tags, and in the `FilterBox` to show all tags available; it can be clickable or deletable (mainly useful fot the ). Takes the following props:

- `label`: _String_. The text to be displayed in the Tag.
- `selected`: _Boolean_.Determines fi the chip is selected (To give it an accent background).
- handleChipClick: _function_. To be executed in the parent component when the Tag is clicked. If this prop is not provided, then the Tag won't be clickable.
- handleDelete: _function_. To be executed in the parent component when the Tag is deleted. If this prop is not provided, then the Tag won't be deletable.
