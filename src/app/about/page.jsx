import Image from 'next/image'
import styles from './about.module.css'

export const metadata = {
	title: "About",
	description: "Generated by create next app",
};

export default function AboutPage() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.textContainer}>
					<h2 className={styles.subtitle}>About Agency</h2>
					<h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
					<p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae vel autem laboriosam velit doloremque ipsum amet quibusdam incidunt obcaecati, assumenda a nisi ratione minima porro quas debitis facilis sed.</p>
					<div className={styles.boxes}>
						<div className={styles.box}>
							<h1>10 K+</h1>
							<p>Year of experience</p>
						</div>
						<div className={styles.box}>
							<h1>10 K+</h1>
							<p>Year of experience</p>
						</div>
						<div className={styles.box}>
							<h1>10 K+</h1>
							<p>Year of experience</p>
						</div>
						<div className={styles.box}>
							<h1>10 K+</h1>
							<p>Year of experience</p>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>

					<Image src="/about.png" alt="About Image" className={styles.image} fill/>
				</div>
			</div>
		</>
	);
}