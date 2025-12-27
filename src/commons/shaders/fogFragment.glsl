uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;

/**
 * Retourne un facteur de fog [0..1]
 * 0 = pas de fog
 * 1 = full fog
 */
float computeFogFactor(float viewZ) {
    return smoothstep(uFogNear, uFogFar, viewZ);
}

/**
 * Applique le fog avec désaturation à une couleur
 * @param baseColor - couleur originale
 * @param viewZ - distance caméra → fragment
 * @param intensity - facteur d’intensité du fog [0..1]
 */
vec3 applyFog(
    vec3 baseColor,
    float viewZ,
    float intensity
) {
    float fog = computeFogFactor(viewZ);

    // gris basé sur luminance
    vec3 gray = vec3(dot(baseColor, vec3(0.299, 0.587, 0.114)));

    // mélange couleur originale et gris selon le fog
    vec3 desat = mix(baseColor, gray, fog * 0.5);

    // mélange avec la couleur du fog
    return mix(desat, uFogColor, fog * intensity);
}
