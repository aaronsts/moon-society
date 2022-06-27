import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

// graphcms
import { getServices } from "../services";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices().then((newServices) => setServices(newServices));
  }, []);
  return (
    <div id="service" className=" scroll-mt-24">
      <div className="container mx-auto min-h-[calc(100vh-80px)] flex flex-col items-left">
        <h2 className="mx-auto mb-16">Services</h2>

        <div className="flex flex-col items-center gap-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              desc={service.description}
              icon={service.iconField.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
