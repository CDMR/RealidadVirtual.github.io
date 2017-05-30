var campoVision =45;//grados
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1
var planoLejano =1000;
var camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.z=100;
camara.position.x=10;
camara.position.x=100;
var geometry = new THREE.BoxGeometry( 8, 8, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var cubo = new THREE.Mesh( geometry, material );
//var esfera1= new THREE.Mesh( new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial() );
//esfera1.position.x=30;
//var esfera2= new THREE.Mesh( new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial() );
//esfera2.position.x=-5;
//esfera2.position.z=-5;
var escena = new THREE.Scene();
//escena.add(esfera1);
//escena.add(esfera2);
escena.add(cubo);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
