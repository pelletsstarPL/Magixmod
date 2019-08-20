G.AddData({
name:'Magix',
author:'pelletsstarPL',
desc:'Magic! Magic!. Fit more guys discover essences which have its secret use.',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:{'magixmod':'https://imgur.com/a/91Ln5DX'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
//Kategorie wiem, że przepisałem ale ciul/Categories i know i rewrote but anyway i will be able to implement magic one.
		G.resCategories={
		'main':{
			name:'Essentials',
			base:[],
			side:['population','worker','happiness','health','land','coin'],
		},
		'demog':{
			name:'Demographics',
			base:['baby','child','adult','elder','worker','sick','wounded',],
			side:['population','housing','corpse','burial spot'],
		},
		'food':{
			name:'Food & Water',
			base:[],
			side:['food','spoiled food','water','muddy water','food storage'],
		},
		'build':{
			name:'Crafting & Construction',
			base:[],
			side:['archaic building materials','basic building materials','advanced building materials','precious building materials','material storage'],
		},
		'gear':{
			name:'Gear',
			base:[],
			side:[],
		},
		'misc':{
			name:'Miscellaneous',
			base:[],
		},
		'magic essences':{
			name:'Magic essences',
			base:[],
			side:['mana'],
		},
	};
