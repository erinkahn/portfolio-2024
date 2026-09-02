import { useRef, useEffect, useState, type RefObject } from "react";

interface IntersectionObserverResult {
	isVisible: boolean;
	entry: IntersectionObserverEntry | undefined;
}

const useIntersectionObserver = <T extends Element>(
	elementRef: RefObject<T | null>,
	options: IntersectionObserverInit = {
		root: null,
		rootMargin: "0%",
		threshold: 0.1,
	}
): IntersectionObserverResult => {
	const observer = useRef<IntersectionObserver | null>(null);
	const [entry, setEntry] = useState<IntersectionObserverEntry>();

	const updateEntry = (entries: IntersectionObserverEntry[]) => {
		setEntry(entries[0]);
	};

	useEffect(() => {
		const node = elementRef?.current;
		if (!node) return;

		if (observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver(updateEntry, options);

		const { current: currentObserver } = observer;

		currentObserver.observe(node);

		return () => currentObserver.disconnect();
		// eslint-disable-next-line
	}, [elementRef]);

	return { isVisible: !!entry?.isIntersecting, entry };
};

export default useIntersectionObserver;
