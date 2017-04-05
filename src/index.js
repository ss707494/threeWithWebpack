/**
 * Created by Administrator on 2017/4/3.
 */


import {init} from './study/ani'
const _ = id => document.getElementById(id);
window._onload = x => {
  const $main = _('main');
  $main.height = 800
  $main.width = 800

  init();
}

