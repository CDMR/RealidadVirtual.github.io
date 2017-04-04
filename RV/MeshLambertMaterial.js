function setup(){
  var forma = new THREE.BoxGeometry(1,1,1);
  var material= new THREE.MeshLambertMaterial({color:'#ffffff'});
  malla = new THREE.Mesh(forma, material);

  var luzPuntual = new THREE.PointLight(0xCC00CC);
  luzPuntual.position.x=10;
  luzPuntual.position.y=10;
  luzPuntual.position.z=10;
  
  escena= new THREE.Scene();
  escena.add(malla);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 5;
  
  renderer= new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeigth*.95, window.innerHeigth*.95);
  document.body.appendChild(renderer.domElement);
  
}
function loop(){
requestAnimationFrame(loop);
malla.rotation.x +=0.01;
malla.rotation.y += 0.01;


renderer.render(escena,camara);
var camara, escena, renderer, malla;

setup();
loop();
}
