import React, { createContext } from 'react';
import ComB from './ComB';

const BioData = createContext();

const ComA = () => {
	return (
		<div>
			<BioData.Provider value={'This is Component A'}>
				<ComB />
			</BioData.Provider>
		</div>
	);
};
export default ComA;
export { BioData };
