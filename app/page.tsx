
import Link from "next/link"
import styles from "./page.module.css"

const HomePage =()=>{
  return(
    <div>
      <nav className={styles.nav}>
        <ul className={styles.ul}> 
        <li>
          
          <Link href="/" className={styles.a} target ="_blank"><b>Home</b></Link>
          </li>
          <li>
            <Link href="/about" className={styles.a} target ="_blank"><b>About</b></Link>
          </li> 
          <li><Link href ="/contact" className={styles.a} target ="_blank"><b>Contact</b></Link>
          </li>
          <li>
            <Link href ="/service" className={styles.a} target ="_blank"><b>Service</b></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
  
}
export default HomePage;