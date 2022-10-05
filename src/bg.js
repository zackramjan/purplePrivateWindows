"use strict";

const colors={
	p9:"#ddccdd"
};

const theme={
	colors:{
		
		frame:colors.p9,
	}
};

function updateTheme(win){
	if(win.incognito){
		browser.theme.update(win.id,theme);
	}
}

browser.windows.onCreated.addListener(updateTheme);
