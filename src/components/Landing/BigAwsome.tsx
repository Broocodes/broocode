"use client";

import React from "react";
import styled from "styled-components";
import {
  Rocket,
  Code2,
  Sparkles,
  Cpu,
  Zap,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

const icons = [
  <Rocket key={0} size={32} />,
  <Code2 key={1} />,
  <Sparkles key={2} />,
  <Cpu key={3} />,
  <Zap key={4} />,
  <Lightbulb key={5} />,
  <Rocket key={6} />,
  <Code2 key={7} />,
  <Sparkles key={8} />,
  <Cpu key={9} />,
  <Zap key={10} />,
  <Lightbulb key={11} />,
];

const BigAwesomeButton = () => {
  return (
    <Wrapper>
      <button className="button">
        <p
          className="button__text"
          style={{ ["--total" as any]: icons.length } as React.CSSProperties}
        >
          {icons.map((Icon, i) => (
            <span
              key={i}
              style={{ ["--index" as any]: i } as React.CSSProperties}
            >
              {Icon}
            </span>
          ))}
        </p>

        <div className="button__circle">
         <Image src="/logo.svg" alt="Bestdesign" width={100} height={100} className=" hover:text-myblack " />
        </div>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    cursor: pointer;
    border: none;
    background: #a2f23e;
    color: #fff;

    width: 300px;
    height: 300px;

    border-radius: 50%;
    position: relative;
    overflow: hidden;

    display: grid;
    place-content: center;

    transition: 0.3s;
  }

  .button:hover {
    background: #000;
    transform: scale(1.05);
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: spin 12s linear infinite;
  }

  .button__text span {
    position: absolute;
    inset: 14px;

    transform: rotate(calc(360deg / var(--total) * var(--index)));
    transform-origin: center;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  /* ICON STYLE */
  .button__text span svg {
    width: 32px;
    height: 32px;
    stroke-width: 2.2;
		animation: spin 12s linear infinite;
  }

  .button__circle {
    width: 180px;
    height: 180px;

    border-radius: 50%;
    background:black;
    color: #a2f23e;


    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    position: relative;

		
  }

  .button__icon {
    width: 22px;
    height: 22px;

  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-160%, 160%);
  }

  .button:hover .button__icon {
    color: #000;
  }

  .button:hover .button__icon:first-child {
    transition: transform 0.3s ease;
    transform: translate(160%, -160%);
  }

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease 0.1s;
    transform: translate(0);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
	@keyframes spin-reverse {
    to {
      transform: rotate(-360deg);
    }
  }
`;

export default BigAwesomeButton;