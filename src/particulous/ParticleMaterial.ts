import { Color, NormalBlending, ShaderMaterial, TextureLoader } from "three"

const vertexShader = `
// Per-particle attributes
attribute float size;
attribute float alpha;
attribute vec3 color;

// Keep some for the fragment shader
varying float vAlpha;
varying vec3 vColor;

void main() {
  vAlpha = alpha;
  vColor = color;

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = size * 8.0;
  gl_Position = projectionMatrix * mvPosition;
}
`

const fragmentShader = `
uniform sampler2D pointTexture;

varying float vAlpha;
varying vec3 vColor;

void main() {
  // Set color and alpha
  gl_FragColor = vec4(vColor, vAlpha);

  // Apply texture
  gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
}
`

export class ParticleMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        color: { value: new Color(0xffffff) },
        pointTexture: {
          value: new TextureLoader().load("/textures/particle.png")
        }
      },
      vertexShader,
      fragmentShader,
      blending: NormalBlending,
      depthTest: false,
      transparent: true
    })
  }
}
