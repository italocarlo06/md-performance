"use client";

import { useState } from "react";
import { periods, plans, whatsappLink, type Period } from "@/lib/site";
import { Check } from "./icons";

export default function Plans() {
  const [period, setPeriod] = useState<Period>("trimestral");
  const periodLabel = periods.find((p) => p.id === period)!.label.toLowerCase();

  return (
    <section id="planos" className="section--alt">
      <div className="container stack-56">
        <div className="section-head section-head--center">
          <span className="eyebrow">Planos</span>
          <h2 className="h2 fx-reveal">Personal compartilhado no ritmo da sua semana.</h2>
          <p className="lead">Escolha quantas vezes por semana quer treinar e o período do plano.</p>
        </div>

        <div className="periods" role="group" aria-label="Período do plano">
          {periods.map((p) => (
            <button key={p.id} type="button" aria-pressed={p.id === period} onClick={() => setPeriod(p.id)}>
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid grid--280" style={{ alignItems: "stretch" }}>
          {plans.map((plan) => (
            <article key={plan.id} className={`card plan fx-reveal${plan.featured ? " plan--featured" : ""}`}>
              {plan.featured && <span className="plan__badge">Recomendado</span>}
              <div>
                <h3>{plan.title}</h3>
                <p className="text-muted">{plan.description}</p>
              </div>
              <div className="plan__price" aria-live="polite">
                <span className="plan__value">{plan.prices[period]}</span>
                <span className="plan__per">/mês</span>
              </div>
              <span className="plan__note">Valor mensal no plano {periodLabel}</span>
              <ul className="check-list">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={20} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Olá! Tenho interesse no plano ${plan.title}, ${periodLabel}, da MD Performance.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn--block${plan.featured ? " btn--primary" : ""}`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
