import { useEffect, useState } from 'react';
import styles from './modal.module.scss';
import useMetrika from '../../hooks/useMetrika';
export default function Modal() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { ym } = useMetrika();

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
								ym('reachGoal', 'close');
								(window as any).gtag('event', 'button_click', {
									send_to: 'G-2JCKTN9RLF', // указываем ID потока
									event_name: 'button_click',
								});
							}}>
							Закрыть модальное окно
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
