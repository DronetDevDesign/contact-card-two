import './form';
import './submit';
// Import CSS files
import "../css/index.css";
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import DronetLogo from '../images/dronet-logo.png';

import { initdb } from './database';

window.addEventListener('load', function () {
  initdb();
  document.getElementById('dronet-logo').src = DronetLogo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});