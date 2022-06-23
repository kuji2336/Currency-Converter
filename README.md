# About Project

Calculate live currency and foreign exchange rates with  Currency Converter. Convert between all major global currencies,  and view the live mid-market rates.

## Installation

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

```bash
npm install
```

To Start Dev Server:

```bash
npm start
```

For Production Build:

```bash
npm run build
```

## Used Packages

[Redux-Toolkit](https://redux-toolkit.js.org/)
[Axios](https://axios-http.com/docs/intro)
[react-select](https://react-select.com/home)
[react-toast-notifications](https://www.npmjs.com/package/react-toast-notifications)

# Folder Structure Conventions

> Folder structure options and naming conventions for software projects

### A typical SRC directory Folder Structure:

    ├──components
        ──common   #Common components which are widly used inside app
    ├──config      #API Configuration
    ├──controller  #Static functions for API calls
    ├──fonts
    ├──global      #Global utilities (Hooks, Styles)
    ├──store
    └──view        #Application Pages
        ──screen-name
            ──hooks
            ──style
            ──interface

### IMPORTANT NOTES

[API REQUEST LIMIT FOR EACH KEY IS LIMITED](https://apilayer.com/) If your limit expires you will need to generate a new key
