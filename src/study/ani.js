/**
 * Created by Administrator on 2017/4/4.
 */

const _ = id => document.getElementById(id);
var requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

var scene = null;
var camera = null;
var renderer = null;

var id = null;

var stat = null;

var ballMesh = null;
var ballRadius = 0.5;
var isMoving = false;
var maxHeight = 5;

var v = 0;
var a = -0.01;

function init() {

  renderer = new THREE.WebGLRenderer({
    canvas: _('main')
  });
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10);
  camera.position.set(0, 0, 10);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);

  // ball
  // ballMesh = new THREE.Mesh(new THREE.SphereGeometry(ballRadius, 16, 8),
  //   new THREE.MeshLambertMaterial({
  //     color: 0xffff00
  //   }));
  // ballMesh.position.y = ballRadius;
  // scene.add(ballMesh);

  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
  ballMesh = new THREE.Mesh( geometry, material );
  scene.add( ballMesh );

  var light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(10, 10, 15);
  scene.add(light);
  var light2 = new THREE.PointLight(0xffffff, 1, 100);
  light2.position.set(-10, 10, 15);
  scene.add(light2);

  drop();
}

function draw() {

  renderer.render(scene, camera);

  id = requestAnimationFrame(draw);
}

function stop() {
  if (id !== null) {
    cancelAnimationFrame(id);
    id = null;
  }
}

function drop() {
  draw();
}

document.onkeyup = e => {
  switch (e.key) {
    case 'ArrowRight':
      camera.position.x = camera.position.x + .1
      break
    case 'ArrowLeft':
      camera.position.x = camera.position.x - .1
      break
    case 'ArrowUp':
      break
    case 'ArrowDown':
      break

  }

}

export {init}
