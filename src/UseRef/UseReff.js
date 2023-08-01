import React, { useState, useEffect, useRef } from 'react';

const UseReff = () => {
	const [ myData, setMyData ] = useState('');
	// const [ count, setCount ] = useState(0);

	const inputElment = useRef('');

	const changeStyle = () => {
		const data = inputElment.current;
		inputElment.current.style.backgroundColor = 'red';
		inputElment.current.focus();
		inputElment.current.style.color = 'blue';
		data.style.fontSize = '50px';
	};

	// useEffect(() => {
	// 	// setCount(count + 1);
	// 	count.current = count.current + 1;
	// });
	return (
		<div>
			<input ref={inputElment} type="text" value={myData} onChange={(e) => setMyData(e.target.value)} />
			<br />
			<button onClick={changeStyle}> Submit </button>
		</div>
	);
};
export default UseReff;
