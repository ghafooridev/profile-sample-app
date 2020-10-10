import React from 'react';

import Header from './Header';
import Content from './Content';
import Files from './Files';
import Footer from './Footer';
import {styles} from "./Style";

const Main = function () {
	const classes = styles();

	return (
		<div className={classes.Main}>
			<Header/>
			<Content/>
			<Files/>
			<Footer/>
		</div>
	)
}

export default Main