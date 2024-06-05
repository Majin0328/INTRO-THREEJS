import * as THREE from './three.js';
// crear scena 
const scene = new THREE.Scene();
// crea una camara (angulo de vision en grados, tamano de la pantalla donde se vera la camara, plano mas cercano que va a poder persivir, plano mas lejano que puede persivir )
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1 , 1000 );
// crea un render 
const renderer = new THREE.WebGLRenderer();
//alto y ancho de pantalla
renderer.setSize( window.innerWidth, window.innerHeight );
// invocamos la funcion animate
renderer.setAnimationLoop( animate );
// crea el elemento html para visualizar la escena 3d
document.body.appendChild( renderer.domElement );
// dibujamos un cuboide (ancho,alto,profundidad)
const geometry = new THREE.BoxGeometry( 2, 1, 3 );
// creamos un material (color)
const material = new THREE.MeshBasicMaterial( { color: 0xc22323 } );
// creamos un objeto que se va a dibujar en base a la geomtria y el material dado
const cube = new THREE.Mesh( geometry, material );
//agrega el cubo a la escena
scene.add( cube );
//distancia hacia el origen del objeto 
camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;

	renderer.render( scene, camera );

}