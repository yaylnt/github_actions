import { useEffect, useState } from 'react';
import styles from './modal.module.scss';
export default function Modal() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				setIsOpen(false);
				console.log('Нажали кнопку ESC');
			}
		};
		document.addEventListener('keydown', handleEsc);
	}, []);

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsOpen(true)}>Открыть модальное окно</button>
			<div className={styles.modal}>
				{isOpen && (
					<div className={styles.container}>
						<button
							onClick={() => {
								setIsOpen(false);
								(window as any).ym(110269587, 'reachGoal', 'close');
							}}>
							Закрыть модальное окно
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
