import React from "react";
import Benefit from "./Benefit";
import benefit1 from "./prize.webp";
import benefit2 from "./meet.webp";
import benefit3 from "./job.webp";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <h2>
          No pierdas la oportunidad de ser parte de la industria de mayor
          crecimiento en el mundo!
        </h2>
        <div className="benefits__list">
          <Benefit
            image={benefit1}
            title="Logra todas tus metas"
            description="Nuestras clases son concretas, prácticas y aplicables a tu negocio desde el primer día."
          />
          <Benefit
            image={benefit2}
            title="Seguimiento personal"
            description="Las clases se dan en grupos de menos de 10 personas, garantizando una mentoría personalizada."
          />
          <Benefit
            image={benefit3}
            title="Mayor empleabilidad"
            description="Transforma tu vida a través de la educación y llega al siguiente nivel sin importar el rubro en el que te desempeñes."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
