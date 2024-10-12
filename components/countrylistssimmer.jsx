import * as styles from './style.module.css';
import * as styless from './ConstryListsimmer.module.css';

export default function ConstryListsimmer() {
    return (
        <>
            {Array.from({ length: 15 }).map((el, i) => {
                return (
                    <div key={i} className={`${styles.cardContainer} ${styless.ConstryListsimmer}`}>
                        <div className={`${styles.myimg} ${styless.myimgs}`}></div>
                        <h2 className={`${styles.heading} ${styless.headings}`}></h2>
                        <div className={`${styles.cardText}`}>
                            <h4 className={`${styles.h4} ${styless.h4s}`}>
                                <span className={styles.span}></span>
                            </h4>
                            <h4 className={`${styles.h4} ${styless.h4s}`}>
                                <span className={styles.span}></span>
                            </h4>
                            <h4 className={`${styles.h4} ${styless.h4s}`}>
                                <span className={styles.span}></span>
                            </h4>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
