import { Color, NormalBlending, ShaderMaterial, TextureLoader } from "three"

const vertexShader = `
attribute float size;
attribute float alpha;
attribute vec3 color;

varying float vAlpha;
varying vec3 vColor;

void main() {
  vAlpha = alpha;
  vColor = color;

  gl_PointSize = size * 8.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform sampler2D pointTexture;

varying float vAlpha;
varying vec3 vColor;

void main() {
  gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);
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
