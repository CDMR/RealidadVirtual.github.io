var camara= new THREE.OrthographicCamera();
camara.left= window.innerWidth/-2;
camara.right= window.innerWidth/2;
camara.top= window.innerHeigth/2;
camara.botttom = window.innerHeigth/-2;
camara.near=0.1;
camara.far=1000;
camara.updateProjectionMatrix();

camara.position.z=100;

var cubo = new THREE.Mesh(new THREE.BoxGeometry(30,30,300),new THREE.MeshNormalMaterial());
cubo.rotateY(Math.PI/4);

var esfera1= new THREE.Mesh( new THREE.SphereGeometry(2), new THREE.MeshNormalMaterial() );
esfera1.position.x=5;
var esfera2= new THREE.Mesh( new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial() );
esfera2.position.x=5;
esfera2.position.z=5;

var escena = new THREE.Scene();
 escena.add(esfera1);
 escena.add(esfera2);
 escena.add(cubo);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
