import React, { useState, useEffect } from 'react';
import { Items } from './Items';

export const StoreItems = ({ storeItems }) => {
	const [localData, setLocalData] = useState(null);

	useEffect(() => {
		setLocalData(storeItems);
	}, [storeItems]);

	return (
		<div className="store-items">
			{localData ? <Items items={localData} /> : <p>Loading items...</p>}
		</div>
	);
};