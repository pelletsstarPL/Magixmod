G.AddData({
name:'Magix',
author:'pelletsstarPL',
desc:'Magic! Magic!. Fit more guys discover essences which have its secret use.',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:{'magixmod':'https://imgur.com/a/91Ln5DX'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function(){
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
//Mana and essences. 
		new G.Res({
		name:'Mana',
		desc:'[Mana] is used to make essences. Thing used by beginner wizards. ',
		icon:[1,1,'magixmod'],
		partOf:'mana',
		limit:'max mana',
		category:'magic essences',
	});
		new G.Res({
		name:'Max mana',
		hidden:true,
		icon:[0,0,'magixmod'],
		category:'magic essences',
	});
		new G.Res({
		name:'Fire essence',
		desc:'[Fire essence] is warm in hands and dangerous. Might be used to fight against cold winters.',
		icon:[0,2,'magixmod'],
		// turnToByContext: {'eat': {'health':0.08,'happiness':0.2},'decay'}, //trying to make essences decaying    // ERROR
		partOf:'magic essences',
		category:'magic essences',
	});G.Res
		new G.Res({
		name:'Water essence',
		desc:'[Water essence] this essence is undrinkable but can be used to cast rain.',
		icon:[0,1,'magixmod'],
		partOf:'magic essences',
		category:'Magic essences',
	});
		new G.Res({
		name:'Nature essence',
		desc:'[Nature essence] is used by wizards to reviewe their beloved flowers or make harvests more plentiful.',
		icon:[1,2,'magixmod'],
		category:'magic essences',
	});
		new G.Res({
		name:'Dark essence',
		desc:'[Dark essence] used to make a blackholes for graves or to even bigger spellworks like mirror world. .',
		icon:[1,3,'magixmod'],
		category:'magic essences',
	});
		new G.Res({
		name:'Lightning essence',
		desc:'[Lightning essence] can make a storms safer for people granting satisfaction  and good entertainment for storm hunters. Who knows what would happen if its essence can start elecricity age.',
		icon:[0,3,'magixmod'],
		category:'magic essences',
	});
		new G.res({
		name: 'Wind essence',
		desc: '[Wind essence] this one should not be used by everyone due to risk of tornado disaster. Anyway this one will have its use in mirror world spellcasting.',
		icon:[1,1,'magixmod'],
		category:'magic essences',
	});
//Trait to unlock a mirror dimension
		new G.Trait({
		name:'Belief in portals',
		desc:'@makes wizard attempting to create a mirrored world',
		icon:[2,1],
		cost:{'culture':30,'faith':3},
		chance:10,
		req:{'belief in afterlife':true,'wizard complex':true},
	});
//Then we add a new technology for wizards:
	new G.Tech({
		name:'Wizardry',
		desc:'Here wizardry and essences will start to appear. Essences are not naturally generated so they consume mana to be made.',
		icon:[5,3,'imageSheet'],
		cost:{'insight':75,'faith':5},
		req:{'well-digging':true},
	});
//New tech to allow wizards progressing
		new G.Tech({
		name:'Mana brewery',
		desc:'You can find a specimen who will convert water into mana.',
		icon:[3,2,'imageSheet'],
		cost:{'insight':50},
		req:{'wizardry':true},
	});
		new G.Tech({
		name:'Mana silos',
		desc:'You have to get a place where you will store basic of all things of wizardry. And in addition it will give a housing to your population',
		icon:[5,2,'imageSheet'],
		cost:{'insight':45},
		req:{'city planning':true,'cities':true,'construction':true},
	});
		new G.Tech({
		name:'Well of Mana',
		desc:'Now you may get a well which contains mana instead of water. ',
		icon:[4,3,'imageSheet'], //WIP
		cost:{'insight':40,'faith':4,'mana':20},
		req:{'Mana brewery':true,'Mana silos':true},
	});
		new G.Tech({
		name:'Wizard towers',
		desc:'Now you can build wizard towers which can produce specified essences. Essences made depends on what type of tower you build. Provides additional housing. Making essences consumes mana.',
		icon:[6,0,'imageSheet'], //WIP
		cost:{'insight':125,'culture': 30,'mana':40,'infulence':10},
		req:{'Mana brewery':true,'Mana silos':true},
	});
		new G.Tech({
		name:'Wizard wisdom',
		desc:'Now each wizard will increase wisdom.',
		icon:[6,0,'imageSheet'], //WIP
		cost:{'insight':85,'culture': 30,'mana':40,'infulence':10},
		req:{'Mana brewery':true,'Mana silos':true,'Wizardry':true},
	});
		new G.Tech({
		name:'Wizard complex',
		desc:'Complex of wizard towers. Expensive but The Complex produces all types of Essences three times better than usual towers. Each complex increases additionaly max [faith],[culture] & [infulence]. Boosts max mana too.',
		icon:[6,0,'imageSheet'], //WIP
		cost:{'insight':480,'culture':30,'mana':100,'infulence':50},
		req:{'Mana brewery':true,'Mana silos':true,'Wizardry':true,'Wizard towers':true},
	});
		new G.Tech({
		name:'Mirror dimension discovery',
		desc:'Your wizards discovered and now they plan to open a mirror dimension. However buildings and everything except land will not double.',
		icon:[6,0,'imageSheet'], //WIP
		cost:{'insight':1400,'culture':30,'mana':2500,'infulence':70},
		req:{'Mana brewery':true,'Mana silos':true,'Wizardry':true,'Wizard wisdom':true,'Wizard complex':true,'Belief in power of mirror':true},
	});
//Towers of the Wizards and the wizard unit in its own person.
		new G.Unit({
		name:'Fire wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Fire essence] by consuming mana.',
		icon:[2,4],
		cost:{'basic building materials':1000,'precious building materials':100},
		use:{'land':1},
		upkeep:{'Wizard':3},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',context:'gather',what:{'Fire essence':2},use:{'mana':6}},
		],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Wizard',
		desc:'A man needed to make his towers even exist. ',
		icon:[2,4],
		cost:{'insight':1,'wand':2},
		use:{'worker':1},
		upkeep:{'food':15},
		//require:{'wizard':3},
		effects:[
			{type:'gather',what:{'insight':0.025}},
            {type:'provide',what:{'wisdom':1},req:{'Wizard wisdom':true}}
        ],
		category:'discovery',
		limitPer:{'population':3},
	});
		new G.Unit({
		name:'Mana maker',
		desc:'A man who can make mana for you.',
		icon:[4,2],
		cost:{'insight':1,'wand':2},
		use:{'worker':1},
		upkeep:{'food':5},
		//require:{'wizard':3},
		effects:[
            // turnToByContext:{'water':5:{'mana':4}    //// ERROR
        ],
		category:'gathering',
		limitPer:{'population':7500},
	});
		new G.Unit({
		name:'Water wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Water essence] by consuming mana.',
		icon:[2,4],
		cost:{'basic building materials':1000,'precious building materials':100},
		use:{'land':1},
		upkeep:{'Wizard':3},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',context:'gather',what:{'Water essence':2},use:{'mana':6}},
		],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Dark wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Dark essence] by consuming mana.',
		icon:[2,4],
		cost:{'basic building materials':1000,'precious building materials':100},
		use:{'land':1},
		upkeep:{'Wizard':3},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',context:'gather',what:{'Dark essence':2},use:{'mana':6}},
		],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Nature wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Nature essence] by consuming mana.',
		icon:[2,4],
		cost:{'basic building materials':1000,'precious building materials':100},
		use:{'land':1},
		upkeep:{'Wizard':3},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',context:'gather',what:{'Nature essence':2},use:{'mana':6}},
		],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Lightning wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Lightning essence] by consuming mana.',
		icon:[2,4],
		cost:{'basic building materials':1000,'precious building materials':100},
		use:{'land':1},
		upkeep:{'Wizard':3},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',context:'gather',what:{'Lightning essence':2},use:{'mana':6}},
		],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Wind wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Wind essence] by consuming mana.',
		icon:[2,4],
		cost:{'basic building materials':1000,'precious building materials':100},
		use:{'land':1},
		upkeep:{'Wizard':3},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',context:'gather',what:{'Wind essence':2},use:{'mana':6}},
		],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Wizard Complex',
		desc:'@provides 250 [housing]<>A towers for 400 citizens and 30 wizards. Gathers all type of essences three times better than usual tower and consuming same mana.',
		icon:[2,4],
		cost:{'basic building materials':12500,'precious building materials':3000},
		use:{'land':9},
		upkeep:{'Wizard':30},
		//require:{'wizard':30},
		effects:[
			{type:'provide',what:{'housing':400}},
			{type:'gather',context:'gather',what:{'Fire essence':6},use:{'mana':6}},
			{type:'gather',context:'gather',what:{'Water essence':6},use:{'mana':6}},
			{type:'gather',context:'gather',what:{'Nature essence':6},use:{'mana':6}},
			{type:'gather',context:'gather',what:{'Lightning essence':6},use:{'mana':6}},
			{type:'gather',context:'gather',what:{'Wind essence':6},use:{'mana':6}},
			{type:'gather',context:'gather',what:{'Dark essence':6},use:{'mana':6}}
		],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true,'Wizard complex':true},
		category:'housing',
		limitPer:{'land':300},
		limitPer:{'population':9000},
		limitPer:{'wizards':150},
	});
//House with mana silo to increase mana capacity
		new G.Unit({
		name:'Brick house with mana silo',
		desc:'@provides 15 [housing]<>This house can store up to 750 mana too due to its silo.',
		icon:[2,4],
		cost:{'brick':2000,'basic building materials':100},
		use:{'land':1},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':15}},
			{type:'provide',what:{'max mana':750}},
		],
		req:{'construction':true,'Mana silos':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':5},
	});
//New Wonder. The portal to mirror dimension
new G.Unit({
    name:'Mirror dimension passage',
    desc:'@opens a portal to a </b>Mirror dimension<>A creation made of ideas of wizards and dreams of population more exactly kids.//A It is getting more & more real. You got sure you may open this gateway but you have to consume a lot of mana and all 6 Essences you gather from towers.//A Good luck. It will double available land for your people. However houses , mines, kilns etc. will not get mirrorly doubled.',
    wonder:'mirror dimension passage',
    icon:[1,14],
    wideIcon:[0,14],
    cost:{'precious building materials':5000,'insight':150,'faith':10,'Fire essence':75,'Water essence':75,'Dark essence':75,'Wind essence':75,'Lightning essence':75,'Nature essence':75},
    costPerStep:{'basic building materials':200,'precious building materials':20},
    steps:150,
    messageOnStart:'You begin the construction of the Mirror dimension passage. Its biggest mirror. Gain essence, gain. The portal is opening. Double your land and double your happiness.',
    finalStepCost:{'population':35000,'mana':4000,'insight':500,'faith':25,'Fire essence':575,'Water essence':575,'Dark essence':575,'Wind essence':575,'Lightning essence':575,'Nature essence':575},
    finalStepDesc:'To complete&activate the Passage, 35000 of your [population,People] must be sacrificed to scout land beyond portal. To keep portal activation stable for very long time 575 of each essences, 4000 mana, 500 insight & 25 faith will be sacrificed.',
    effects:[
        // {type:'provide',what:{'land':landvar*2}}
    ],
    use:{'land':10},
    req:{'Mirror dimension discovery':true,'Belief in portals':true},
    limit:1,
    category:'wonder',
});

}});
