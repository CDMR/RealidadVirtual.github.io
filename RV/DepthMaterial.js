function setup(){
var forma = new THREE.BoxGeometry(100,100,500);
var material = new THREE.MeshDepthMaterial();
var malla = new THREE.Mesh(forma,material);
var luzPuntual = new THREE.PointLight(0xFFFFFF);
escena = new THREE.Scene();
escena.add(malla);
escena.add(luzPuntual);
camara= new THREE.PerspectiveCamera();
camara.position.z=750;
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeigth*.95);
document.body.appendChild(renderer.domElement);
}
function loop() {
  requestAnimationFrame(loop);
  malla.rotation.x +=0.1;
  malla.rotation.y +=0.1;
  renderer.render(escena, camara);
  }
  var camara, escena, renderer, malla;
  setup();
  loop();
