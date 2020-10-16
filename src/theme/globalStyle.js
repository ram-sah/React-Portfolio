import { injectGlobal } from 'styled-components';
import { ColorScheme } from './styleConstants';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${ColorScheme.mainText};
  }

  h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
  }

  hr {
    width: 50%;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${ColorScheme.secondary};
    transition: all .3s ease;
    &:hover {
      text-decoration: none;
      color: ${ColorScheme.primary};
    }
    &:focus {
      text-decoration: none;
      color: ${ColorScheme.primary};
    }
  }

  input[type=text], textarea {
    border-style: groove;
    border-width: 1px;
    padding: 1px;
  }

  button {
    padding: 5px 10px;
    background: 0 0;
    border: 2px solid ${ColorScheme.secondary};
    border-radius: 3px;
    display: block;
    margin: 0 auto;;
    color: ${ColorScheme.secondary};
    font-family: Gotham,Helvetica,Arial,sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    transition: all .3s ease;
    &:hover {
      background: ${ColorScheme.primary};
      color: #fff;
      border-color: ${ColorScheme.primary};
    }
  }
  .card {   
    background: #dfb8b8;
    padding:0.2% 25% 8% 25%;
    margin: -1.3% -22% -4.19% -22%
  }
  .contactPg {   
    background: #e7d67c;
    padding:0.2% 25% 8% 25%;
    margin: -1.3% -22% -4.19% -22%
  }
  .portfolioPg {   
    background: #0000ff3b;
    padding:0.2% 25% 8% 25%;
    margin: -1.3% -22% -4.19% -22%
  }
}
`;