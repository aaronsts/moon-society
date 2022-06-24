import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

// animation
import { useParallax, ParallaxProvider, Parallax } from "react-scroll-parallax";

// graphcms
import { getServices } from "../services";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices().then((newServices) => setServices(newServices));
  }, []);

  return (
    <ParallaxProvider>
      <div className="bg-primary-400 scroll-mt-24" id="services">
        <div className="container mx-auto h-[calc(100vh-80px)] flex flex-col items-left">
          <h2 className="mx-auto mb-16">Services</h2>

          <div className="flex flex-col items-center gap-32">
            {services.map((service, index) => (
              <Parallax
                key={index}
                speed={-10}
                translateY={[0, 100]}
                opacity={[0, 1]}
              >
                <ServiceCard
                  key={service.name}
                  name={service.name}
                  desc={service.description}
                  icon={service.iconField.url}
                />
              </Parallax>
            ))}
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Services;
