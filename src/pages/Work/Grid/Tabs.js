export default function Tabs(props) {
	return (
		<>
			{props.tabProp.tabs.map((tab) => (
				<button
					key={`tab-${tab.id}`}
					role="tab"
					id={tab.id}
					className={`${
						tab.showTab === props.stateProp.active ? "active" : ""
					} tab`}
					aria-selected={tab.showTab === props.stateProp.active ? true : false}
					onClick={() => props.reducerProp({ type: `${tab.showTab}` })}
				>
					{tab.tabTitle}
				</button>
			))}
		</>
	);
}
