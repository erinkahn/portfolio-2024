import { useEffect, useState } from "react";
import { AnimatePresence, motion as m, useReducedMotion } from "framer-motion";

interface IntroProps {
	onComplete: () => void;
}

type IntroStep = "logo" | "tagline" | "exit";

export default function Intro({ onComplete }: IntroProps) {
	const prefersReducedMotion = useReducedMotion();
	const [step, setStep] = useState<IntroStep>("logo");

	useEffect(() => {
		const logoHold = prefersReducedMotion ? 300 : 1000;
		const taglineHold = prefersReducedMotion ? 600 : 1800;

		const toTagline = window.setTimeout(() => setStep("tagline"), logoHold);
		const toExit = window.setTimeout(
			() => setStep("exit"),
			logoHold + taglineHold
		);

		return () => {
			window.clearTimeout(toTagline);
			window.clearTimeout(toExit);
		};
	}, [prefersReducedMotion]);

	return (
		<AnimatePresence onExitComplete={onComplete}>
			{step !== "exit" && (
				<m.div
					className="intro-overlay"
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6, ease: "easeInOut" }}
				>
					<AnimatePresence mode="wait">
						{step === "logo" ? (
							<m.img
								key="intro-logo"
								className="intro-logo"
								src="/images/header/logo-dark.svg"
								alt="Erin Kahn"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
							/>
						) : (
							<m.p
								key="intro-tagline"
								className="intro-tagline"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
							>
								Leaving products <span className="accent">better</span> than
								I found them
							</m.p>
						)}
					</AnimatePresence>
				</m.div>
			)}
		</AnimatePresence>
	);
}
