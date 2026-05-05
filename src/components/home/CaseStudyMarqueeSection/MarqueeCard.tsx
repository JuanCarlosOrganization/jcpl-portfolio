"use client";

import Link from "next/link";
import Image from "next/image";
import type { OwnerCard } from "./data";

type Props = {
  card: OwnerCard;
  ariaHidden?: boolean;
};

export default function MarqueeCard({ card, ariaHidden }: Props) {
  return (
    <Link
      href={card.caseUrl}
      prefetch={false}
      aria-hidden={ariaHidden || undefined}
      tabIndex={ariaHidden ? -1 : undefined}
      className="csm-card group"
    >
      <div className="csm-card__media">
        <Image
          src={card.image}
          alt={`${card.name}. ${card.company}`}
          fill
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 32vw, 340px"
          className="csm-card__img"
          draggable={false}
        />
      </div>

      <div className="csm-card__label">
        <span
          className="csm-card__dot"
          style={card.labelColor ? { background: card.labelColor } : undefined}
          aria-hidden
        />
        <span className="csm-card__company">{card.company}</span>
        <span className="csm-card__arrow" aria-hidden>→</span>
      </div>

      <div className="csm-card__hover">
        <span>Explore case</span>
        <span aria-hidden>↗</span>
      </div>
    </Link>
  );
}
