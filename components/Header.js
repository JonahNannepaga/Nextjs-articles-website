import styles from '../styles/Header.module.css'
function Header() {
    return (
        <div>
            <h1 className={styles.title}>Web Dev <span>Articles</span></h1>
            
            <p className={styles.description}>Hey I'm learning next.js today. Stay tuned!</p>
            {/* 
            // We can write the styles in the component like below. Adv:- Conditional styles 
            <h1 className={styles.title}><span>Web</span> Developer</h1>
            const x=5;
            <style jsx>
                {`
                    .title span {
                        color: `${x>5?:'green':'red'}`;    
                    }
                `}
            </style> */}
        </div>
    )
}

export default Header
