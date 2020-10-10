import React, {useContext} from 'react';

import Image from '../components/fileList';
import PostContext from '../context/postContext';

const Files = function () {
	const {data} = useContext(PostContext);

	return (
		<div style={{
			display: 'flex',
			flexWrap: 'wrap',
			marginBottom: 30
		}}>
			{data.files.map((item, index) => {
				return (
					<Image
						key={index}
						source={item}
					/>
				)
			})}
		</div>
	)
}

export default Files