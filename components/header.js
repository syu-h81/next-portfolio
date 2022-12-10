import styles from 'styles/css/header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles['header-Block']}>
        <div className={styles['header-Container']}>
          <div className={styles['header-Inner']}>
            <div className={styles['header-Logo']}>
              <h1 className={styles['header-Title']}>Danjo Syu</h1>
            </div>
            <div className={styles['header-Nav_area']}>
              <nav className={styles['header-Nav']}>
                <ul className={styles['header-Nav_list']}>
                  <li className={styles['header-Nav_item']}>
                    <a className={styles['header-Nav_link']}>スキル</a>
                  </li>
                  <li className={styles['header-Nav_item']}>
                    <a className={styles['header-Nav_link']}>制作実績</a>
                  </li>
                  <li className={styles['header-Nav_item']}>
                    <a className={styles['header-Nav_link']}>自己紹介</a>
                  </li>
                  <li className={styles['header-Nav_item']}>
                    <a className={styles['header-Nav_link']}>お問い合わせ</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}