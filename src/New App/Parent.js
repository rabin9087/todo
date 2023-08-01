import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
	const [ parentCount, setParentCount ] = useState(0);
	const [ childCount, setChildCount ] = useState(0);

	const changeParentCount = () => {
		setParentCount(parentCount + 1);
	};

	const changeChildtCount = () => {
		setChildCount(childCount + 1);
	};

	return (
		<div>
			This is a Parent Component
			<h1>Parent count is {parentCount}</h1>
			<Child count={childCount} />
			<button onClick={changeParentCount}>Increment Parent Count</button>
			<button onClick={changeChildtCount}>Increment Child Count</button>
		</div>
	);
}
