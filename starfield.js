import * as THREE from 'https://unpkg.com/three@0.152.2/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('starfield'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 1;

const starGeometry = new THREE.BufferGeometry();
const starCount = 1000;
const starVertices = [];

for (let i = 0; i < starCount; i++) {
  starVertices.push((Math.random() - 0.5) * 2000);
  starVertices.push((Math.random() - 0.5) * 2000);
  starVertices.push(-Math.random() * 2000);
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0x00ffff, size: 1 });
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

function animate() {
  requestAnimationFrame(animate);
  stars.rotation.y += 0.0005;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
