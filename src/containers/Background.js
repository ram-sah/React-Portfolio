import React from "react";
import Particles from "react-particles-js";
import "./Background.scss";

const Background = () => {
  return (
    <Particles
      className="bubbles"
      params={{
        particles: {
          number: {
            value: 1200,
            density: {
              enable: true,
              value_area: 890
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 2,
            random: false,
            anim: {
              enable: true,
              speed: 0.1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 7,
              size_min: 0.5,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.1,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 190,
              size: 1.5,
              duration: 3,
              opacity: 1,
              speed: 5
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};
export default Background;