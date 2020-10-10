import React from 'react';

import Image from '../Components/Images';
import {styles} from "./Style";

import AvatarImage from '../assets/images/000.jpg'

const Files = function () {
	const classes = styles();

	const imageArray=[AvatarImage,AvatarImage,AvatarImage,AvatarImage]

	return (
		<div style={{
			display:'flex',
			flexWrap:'wrap',
			marginBottom:30
		}}>
			{imageArray.map((item,index)=>{
				return(
					<Image
						source={item}
					/>
				)
			})}
		</div>
	)
}

export default Files