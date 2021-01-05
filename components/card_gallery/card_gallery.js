import styles from '../../styles/global.module.css'
import Card from '../card/card'

export default function CardGallery() {
  return (
    <div className={styles.card_gallery}>
        <div className={styles.grid + ' grid'}>
            <Card title="Documentation" text="Find in-depth information about Next.js features and API." />
            <Card title="Learn" text="Learn about Next.js in an interactive course with quizzes!" />
            <Card title="Examples" text="Discover and deploy boilerplate example Next.js projects." />
            <Card title="Deploy" text="Instantly deploy your Next.js site to a public URL with Vercel." />
        </div>
    </div>
)}
