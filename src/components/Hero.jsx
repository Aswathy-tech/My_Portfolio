import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import { FaDownload } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import styles from "./Hero.module.css";
import { getImageUrl } from "../utils";
const CV_FILE_URL = 'http://localhost:5173/John_LL.pdf'

export const Hero = () => {
  const { t} = useTranslation(); 
 const {line1,line2} = t("description");
const downloadFileatUrl=(url)=>{
const fileName=url.split("/").pop();
const aTag = document.createElement("a");
aTag.href=url;
aTag.setAttribute("download",fileName)
aTag.click();
aTag.remove();
}


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t ("greeting")}</h1>
        <p className={styles.description}>
          <span className={styles.me}>I'm a </span>{' '}<span className={styles.typewriter}> <Typewriter
            words={['Full Stack Developer   ','Web Developer   ','Programmer   ']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={100}
          
          /></span>
          
          
        </p>
        <p className={styles.description}>  {line1}</p>
        <button onClick={()=>{downloadFileatUrl(CV_FILE_URL)}} className={styles.contactBtn}>
          {line2} <span> <FaDownload/> </span>
        </button>
      </div>
      <img
        src={getImageUrl("hero/me.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};