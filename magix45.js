G.AddData({
name:'Magix',
author:'pelletsstarPL',
desc:'Magic! Magic!. Fit more guys discover essences which have its secret use. At the moment you can reach mirror dimension which will double your max land soon. More housing so you can fit more people.',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:{'magixmod':'https://i.imgur.com/Ze77ITE.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function(){
//Kategorie wiem, że przepisałem ale ciul/Categories i know i rewrote but anyway i will be able to implement magic one.
//Mana and essences. 
		new G.Res({
		name:'Mana',
		desc:'[Mana] is used to make essences. Thing used by beginner wizards. ',
		icon:[2,3,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Fire essence',
		desc:'[Fire essence] is warm in hands and dangerous. Might be used to fight against cold winters.',
		icon:[0,2,'magixmod'],
		// turnToByContext: {'eat': {'health':0.08,'happiness':0.2},'decay'}, //trying to make essences decaying    // ERROR
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Water essence',
		desc:'[Water essence] this essence is undrinkable but can be used to cast rain.',
		icon:[0,1,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Nature essence',
		desc:'[Nature essence] is used by wizards to reviewe their beloved flowers or make harvests more plentiful.',
		icon:[1,2,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Dark essence',
		desc:'[Dark essence] used to make a blackholes for graves or to even bigger spellworks like mirror world. .',
		icon:[1,3,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Lightning essence',
		desc:'[Lightning essence] can make a storms safer for people granting satisfaction  and good entertainment for storm hunters. Who knows what would happen if its essence can start elecricity age.',
		icon:[0,3,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Wind essence',
		desc:'[Wind essence] this one should not be used by everyone due to risk of tornado disaster. Anyway this one will have its use in mirror world spellcasting.',
		icon:[1,1,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
//Trait to unlock a mirror dimension
		new G.Trait({
		name:'Belief in portals',
		desc:'@Makes wizards attempting to create a mirrored world',
		icon:[2,1,'magixmod'],
		cost:{'culture':30,'faith':3},
		chance:10,
		req:{'belief in the afterlife':true,'Wizard complex':true},
	});
//Then we add a new technology for wizards:
	new G.Tech({
		name:'Wizardry',
		desc:'@unlocks [Wizard] .Here wizardry and essences will start to appear. Essences are not naturally generated so they consume mana to be made.',
		icon:[5,3,'magixmod'],
		cost:{'insight':75,'faith':5},
		req:{'well-digging':true},
	});
//New tech to allow wizards progressing
		new G.Tech({
		name:'Mana brewery',
		desc:'You can find a specimen who will convert water into mana.',
		icon:[3,2,'magixmod'],
		cost:{'insight':50},
		req:{'Wizardry':true},
	});
		new G.Tech({
		name:'Mana silos',
		desc:'You have to get a place where you will store basic of all things of wizardry. And in addition it will give a housing to your population',
		icon:[5,2,'magixmod'],
		cost:{'insight':45},
		req:{'city planning':true,'cities':true,'construction':true},
	});
		new G.Tech({
		name:'Well of Mana',
		desc:'Now you may get a well which contains mana instead of water. ',
		icon:[4,3,'magixmod'], //WIP
		cost:{'insight':40,'faith':4,'Mana':20},
		req:{'Mana brewery':true,'Mana silos':true},
	});
		new G.Tech({
		name:'Wizard towers',
		desc:'Now you can build wizard towers which can produce specified essences. Essences made depends on what type of tower you build. Provides additional housing. Making essences consumes mana. @unlocks [Fire wizard tower],[Water wizard tower],[Nature wizard tower],[Dark wizard tower],[Lightning wizard tower],[Wind wizard tower].',
		icon:[6,0,'magixmod'], //WIP
		cost:{'insight':125,'culture': 30,'Mana':40,'influence':10},
		req:{'Mana brewery':true,'Mana silos':true},
	});
		new G.Tech({
		name:'Wizard wisdom',
		desc:'Now each wizard will increase wisdom.',
		icon:[3,0,'magixmod'], //WIP
		cost:{'insight':85,'culture': 30,'Mana':40,'influence':10},
		req:{'Mana brewery':true,'Mana silos':true,'Wizardry':true},
	});
		new G.Tech({
		name:'Wizard complex',
		desc:'Complex of wizard towers. Expensive but The Complex produces all types of Essences three times better than usual towers. Each complex increases additionaly max [faith],[culture] & [influence]. Boosts max mana too.',
		icon:[2,2,'magixmod'], //WIP
		cost:{'insight':480,'culture':30,'Mana':100,'influence':20},
		req:{'Mana brewery':true,'Mana silos':true,'Wizardry':true,'Wizard towers':true},
	});
		new G.Tech({
		name:'Mirror dimension discovery',
		desc:'Your wizards discovered and now they plan to open a mirror dimension. However buildings and everything except land will not double.',
		icon:[2,1,'magixmod'], //WIP
		cost:{'insight':1400,'culture':30,'Mana':2500,'influence':70},
		req:{'Mana brewery':true,'Mana silos':true,'Wizardry':true,'Wizard wisdom':true,'Wizard complex':true,'Belief in portals':true},
	});
//Towers of the Wizards and the wizard unit in its own person.
		new G.Unit({
		name:'Fire wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Fire essence] by consuming mana.',
		icon:[2,4,'magixmod'],
		cost:{'basic building materials':1000,'precious building materials':100},
		use:{'land':1},
		upkeep:{'Mana':6},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',what:{'Fire essence':2}},
		],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Wizard',
		desc:'A man needed to make his towers even exist. ',
		icon:[0,0,'magixmod'],
		cost:{'insight':1,'stick':2},
		use:{'worker':1},
		upkeep:{'food':15},
		req:{'Wizardry':true},
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
		icon:[4,2,'magixmod'],
		cost:{'insight':1,'stick':2},
		use:{'worker':1},
		upkeep:{'food':5},
		req:{'Wizardry':true,'Mana brewery':true},
		//require:{'wizard':3},
		effects:[
			{type:'gather',what:{'Mana':20}},
        ],
		category:'discovery',
		limitPer:{'population':4000},
	});
		new G.Unit({
		name:'Water wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Water essence] by consuming mana.',
		icon:[0,4,'magixmod'],
		cost:{'basic building materials':1000,'precious building materials':100},
		use:{'land':1},
		upkeep:{'Mana':6},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',what:{'Water essence':2}},
	],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		//require:{'wizard':3},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Dark wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Dark essence] by consuming mana.',
		icon:[1,4,'magixmod'],
		cost:{'basic building materials':1000,'precious building materials':100,},
		use:{'land':1},
		upkeep:{'Mana':6},
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',what:{'Dark essence':2}},
	],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Nature wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Nature essence] by consuming mana.',
		icon:[3,4,'magixmod'],
		cost:{'basic building materials':1000,'precious building materials':100,},
		use:{'land':1},
		upkeep:{'Mana':6},
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',what:{'Nature essence':2}},
	],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Lightning wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Lightning essence] by consuming mana.',
		icon:[5,4,'magixmod'],
		cost:{'basic building materials':1000,'precious building materials':100,},
		use:{'land':1},
		upkeep:{'Mana':6},
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',what:{'Lightning essence':2}},
	],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});	
		new G.Unit({
		name:'Well of mana',
		desc:'Source of mana. Once you spill some [Mana] & [Water essence] into the hole you will get mana source.',
		icon:[4,3,'magixmod'],
		cost:{'precious building materials':10,'stone tools':10,'Mana':100,'Water essence':15},
		use:{'land':1},
		upkeep:{'Water essence':1},
		req:{'Wizardry':true,'Well of Mana':true},
		//require:{'wizard':3},
		effects:[
			{type:'gather',what:{'Mana':13}},
        ],
		category:'crafting',
		limitPer:{'land':75},
	});
		new G.Unit({
		name:'Wind wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Wind essence] by consuming mana.',
		icon:[4,4,'magixmod'],
		cost:{'basic building materials':1000,'precious building materials':100,},
		use:{'land':1},
		upkeep:{'Mana':6},
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',what:{'Wind essence':2}},
	],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Wizard Complex',
		desc:'@provides 250 [housing]<>A towers for 400 citizens and 30 wizards. Gathers all type of essences three times better than usual tower and consuming same mana.',
		icon:[3,3,'magixmod'],
		cost:{'basic building materials':12500,'precious building materials':3000},
		use:{'land':9},
		upkeep:{'mana':36},
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true,'Wizard complex':true},
		//require:{'wizard':30},
		effects:[
			{type:'provide',what:{'housing':400}},
			{type:'provide',what:{'authority':15}},
			{type:'provide',what:{'spirituality':15}},
			{type:'provide',what:{'inspiration':30}},
			{type:'gather',context:'gather',what:{'Fire essence':6}},
			{type:'gather',context:'gather',what:{'Water essence':6}},
			{type:'gather',context:'gather',what:{'Nature essence':6}},
			{type:'gather',context:'gather',what:{'Lightning essence':6}},
			{type:'gather',context:'gather',what:{'Wind essence':6}},
			{type:'gather',context:'gather',what:{'Dark essence':6}}
		],
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true,'Wizard complex':true},
		category:'housing',
		limitPer:{'land':300},
		limitPer:{'population':9000},
	});
//House with mana silo to increase mana capacity
		new G.Unit({
		name:'Brick house with mana silo',
		desc:'@provides 15 [housing]<>This house can store up to 750 mana too due to its silo.',
		icon:[5,1,'magixmod'],
		cost:{'brick':2000,'basic building materials':100},
		use:{'land':1},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':15}},
		],
		req:{'construction':true,'Mana silos':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':3},
	});
//New Wonder. The portal to mirror dimension
new G.Unit({
    name:'Mirror dimension passage',
    desc:'@opens a portal to a </b>Mirror dimension<>A creation made of ideas of wizards and dreams of population more exactly kids.//A It is getting more & more real. You got sure you may open this gateway but you have to consume a lot of mana and all 6 Essences you gather from towers.//A Good luck. It will double available land for your people. However houses , mines, kilns etc. will not get mirrorly doubled.',
    wonder:'mirror dimension passage',
    icon:[3,1],
    cost:{'precious building materials':5000,'insight':150,'faith':10,'Fire essence':75,'Water essence':75,'Dark essence':75,'Wind essence':75,'Lightning essence':75,'Nature essence':75},
    costPerStep:{'basic building materials':200,'precious building materials':20},
    steps:150,
    messageOnStart:'You begin the construction of the Mirror dimension passage. Its biggest mirror. Gain essence, gain. The portal is opening. Double your land and double your happiness.',
    finalStepCost:{'population':35000,'Mana':4000,'insight':500,'faith':25,'Fire essence':575,'Water essence':575,'Dark essence':575,'Wind essence':575,'Lightning essence':575,'Nature essence':575},
    finalStepDesc:'To complete&activate the Passage, 35000 of your [population,People] must be sacrificed to scout land beyond portal. To keep portal activation stable for very long time 575 of each essences, 4000 mana, 500 insight & 25 faith will be sacrificed.',
    effects:[
    		{type:'provide',what:{'land':double}}
    ],
    use:{'land':10},
    req:{'Mirror dimension discovery':true,'Belief in portals':true},
    limit:1,
    category:'wonder',
});

}});
