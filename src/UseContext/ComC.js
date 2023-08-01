import React, { useContext } from 'react';
import { BioData } from './ComA';

const ComC = () => {
	const comA = useContext(BioData);

	return <div>{comA}</div>;
};
export default ComC;
