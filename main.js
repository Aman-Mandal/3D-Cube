let scene, camera, renderer, cube

const init = () => {
  // Scene
  scene = new THREE.Scene()

  // Perspective Camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  // WebGL Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })

  renderer.setSize(window.innerWidth, window.innerHeight)

  // Adding our renderer in HTML body
  document.body.appendChild(renderer.domElement)

  // --------------------Objects (geometry)--------------------

  // BoxGeometry (width,height,depth)
  const geometry = new THREE.BoxGeometry(2, 2, 2)

  // material (color / texture)
  // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })

  const texture = new THREE.TextureLoader().load('textures/texture1.jpg')
  const material = new THREE.MeshBasicMaterial({ map: texture })

  // Adding material & geometry together with Mesh
  cube = new THREE.Mesh(geometry, material)
  // adding cube on our scene
  scene.add(cube)

  // Camera and cube are inside of each other
  // so, repositioning the camera
  camera.position.z = 5
}

// GameLoop (its like a recursion loop which calls itself for rendering)
const animate = () => {
  // draws a scene everytime user refreshs
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  cube.rotation.z += 0.01

  renderer.render(scene, camera)
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize, false)

init()
animate()
