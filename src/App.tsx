import "./App.scss";
import PageRoutes from "./routes/PageRoutes";
import Intro from "./components/Intro";
import useIntro from "./hooks/useIntro";

export default function App() {
	const { showIntro, completeIntro } = useIntro();

	return (
		<>
			{showIntro && <Intro onComplete={completeIntro} />}
			<PageRoutes />
		</>
	);
}
