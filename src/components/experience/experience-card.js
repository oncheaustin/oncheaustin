import Image from 'next/image';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/experience.module.css';


function ExperienceCard({ id, company, jobtitle, startYear, endYear, highlights }) {

    const { theme } = useContext(ThemeContext);



    return (
        <Fade bottom>
            <div key={id} className={`${styles.experienceCard} bg-[#1E2732]`}>
                <div className={styles.expcardImg} style={{ backgroundColor: theme.primary }}>
                    <Image src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className={styles.experienceDetails}>
                    {(startYear || endYear) && <h6 style={{ color: theme.primary }}>{startYear && endYear ? `${startYear} – ${endYear}` : (startYear || endYear)}</h6>}
                    <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                    <h5 style={{ color: theme.tertiary }}>{company}</h5>
                    <ul className={styles.experienceHighlights} style={{ color: theme.tertiary }}>
                        {highlights.map((highlight, index) => <li key={`${id}-${index}`}>{highlight}</li>)}
                    </ul>
                </div>
            </div>
        </Fade>
    )
}

export default ExperienceCard
