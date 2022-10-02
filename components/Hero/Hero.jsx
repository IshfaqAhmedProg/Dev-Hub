import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../public/HeroImg.png";
import Google from '../../public/GoogleLogo.png'
import Figma from '../../public/FigmaLogo.png'
import Microsoft from '../../public/MicrosoftLogo.png'
import Slack from '../../public/SlackLogo.png'
import Bg from '../../public/HeroBG.png'
export default function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.bg}>
            <Image src={Bg} layout='fill'/>
        </div>
      <div className={styles.grid}>
        <div className={styles.heading}>
          <div>
            Make your <span className="emp"> dream </span>
          </div>
          <div>website a</div>
          <div>
            reality<span className="accent">!</span>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={heroImage} alt="landing page image" width={1.33} height={1} layout='responsive' objectFit="contain" priority />
        </div>
        <div className={styles.desc}>
          <p>
            Welcome to the place where, we help you by building the <br/> websites of
            your dreams.
          </p>
        </div>
        <div className={styles.trustedby}>
            Trusted by:
            <Image src={Google} alt='Google Logo'/>
            <Image src={Figma} alt='Figma Logo'/>
            <Image src={Microsoft} alt='Microsoft Logo'/>
            <Image src={Slack} alt='Slack logo'/>
        </div>
      </div>
    </div>
  );
}
