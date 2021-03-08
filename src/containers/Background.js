import React from "react";
import Particles from "react-particles-js";
import "./Styles.scss";

const Background = () => {
	return (
		<Particles
			className="bubbles"
			params={{
				"particles": {
					"number": {
						"value": 430,
						"density": {
							"enable": false
						}
					},
					"size": {
						"value": 1.5,
						"random": true,
						"anim": {
							"speed": 4,
							"size_min": 0.3
						}
					},
					"line_linked": {
						"enable": false
					},
					"move": {
						"random": true,
						"speed": 0.5,
						"direction": "bottom",
						"out_mode": "out"
					}
				},
				"interactivity": {
					"events": {
						"onhover": {
							"enable": true,
							"mode": "bubble"
						},
						"onclick": {
							"enable": true,
							"mode": "repulse"
						}
					},
					"modes": {
						"bubble": {
							"distance": 250,
							"duration": 2,
							"size": 0,
							"opacity": 0
						},
						"repulse": {
							"distance": 400,
							"duration": 4
						}
					}
				}
			}} 
		/>
	);
};
export default Background;