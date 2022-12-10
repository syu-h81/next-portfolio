import Styles from 'styles/css/footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={Styles['footer-Block']}>
        <div className={Styles['footer-Container']}>
          <nav className={Styles['footer-Nav']}>
            <ul className={Styles['footer-Nav_list']}>
              <li className={Styles['footer-Nav_item']}>
                <a className={Styles['footer-Nav_link']} href="">SKILL</a>
              </li>
              <li className={Styles['footer-Nav_item']}>
                <a className={Styles['footer-Nav_link']} href="">WORKS</a>
              </li>
              <li className={Styles['footer-Nav_item']}>
                <a className={Styles['footer-Nav_link']} href="">PROFILE</a>
              </li>
              <li className={Styles['footer-Nav_item']}>
                <a className={Styles['footer-Nav_link']} href="">CONTACT</a>
              </li>
            </ul>
          </nav>
          <small>copyright@Syu Danjo. All Rights Reserved</small>
        </div>
      </footer>
    </>
  )
}