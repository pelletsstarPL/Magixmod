G.AddData({
name:'Magix',
author:'pelletsstarPL',
desc:'Magic! Magic!. Fit more guys discover essences which have its secret use. At the moment you can reach new dimensions which will double your max land soon. More housing so you can fit more people.',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:{'magixmod':'https://i.imgur.com/nPWAsQo.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function(){
//Mana and essences. 
		new G.Res({
		name:'Mana',
		desc:'[Mana] is used to make essences. Thing used by beginner wizards. ',
		icon:[2,3,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Wand',
		desc:'Wands are basic of wizardry. Thing used by beginner wizards. Without it most of spells are impossible to be casted. ',
		icon:[6,4,'magixmod'],
		category:'gear',
		displayUsed:true,
	});
		new G.Res({
		name:'Land of the Plain Island',
		desc:'The land you got from activating a portal to Plain Island. Place for new buildings.',
		icon:[7,0,'magixmod'],
		category:'main',
		displayUsed:true,
	});
		new G.Res({
		name:'Fire essence',
		desc:'[Fire essence] is warm in hands and dangerous. Might be used to fight against cold winters.',
		icon:[0,2,'magixmod'],
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
		new G.Res({
		name:'Cobalt ore',
		desc:'Hard mineral. At least you may be able to smelt some cobalt and turn them into ingot of the Cobalt in mortal world.',
		icon:[8,2,'magixmod'],
		partOf:'misc materials',
		category:'build',
	});
//Trait to unlock a mirror dimension
		new G.Trait({
		name:'Belief in portals',
		desc:'@Makes wizards attempting to create a new dimension',
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
		name:'More useful housing',
		desc:'Can store food. Building made out of hard bricks. And in addition it will give a housing to your population',
		icon:[5,2,'magixmod'],
		cost:{'insight':45},
		req:{'city planning':true,'cities':true,'construction':true},
	});
		new G.Tech({
		name:'Well of Mana',
		desc:'Now you may get a well which contains mana instead of water. ',
		icon:[4,3,'magixmod'], //WIP
		cost:{'insight':40,'faith':4,'Mana':20},
		req:{'Mana brewery':true,'More useful housing':true},
	});
		new G.Tech({
		name:'Wizard towers',
		desc:'Now you can build wizard towers which can produce specified essences. Essences made depends on what type of tower you build. Provides additional housing. Making essences consumes mana. @unlocks [Fire wizard tower],[Water wizard tower],[Nature wizard tower],[Dark wizard tower],[Lightning wizard tower],[Wind wizard tower].',
		icon:[6,0,'magixmod'], //WIP
		cost:{'insight':125,'culture': 30,'Mana':40,'influence':10},
		req:{'Mana brewery':true,'More useful housing':true},
	});
		new G.Tech({
		name:'Wizard wisdom',
		desc:'Now each wizard will increase wisdom.',
		icon:[3,0,'magixmod'], //WIP
		cost:{'insight':85,'culture': 30,'Mana':40,'influence':10},
		req:{'Mana brewery':true,'More useful housing':true,'Wizardry':true},
	});
		new G.Tech({
		name:'Wizard complex',
		desc:'Complex of wizard towers. Expensive but The Complex produces all types of Essences three times better than usual towers. Each complex increases additionaly max [faith],[culture] & [influence]. Boosts max mana too.',
		icon:[2,2,'magixmod'], //WIP
		cost:{'insight':480,'culture':30,'Mana':100,'influence':20},
		req:{'Mana brewery':true,'More useful housing':true,'Wizardry':true,'Wizard towers':true},
	});
		new G.Tech({
		name:'First portal to new world',
		desc:'Your wizards discovered way to make a portal and now they plan to open a new dimension. What would it mean? It means, more place to build, more housing, more everything!',
		icon:[2,1,'magixmod'], //WIP
		cost:{'insight':1400,'culture':30,'Mana':2500,'influence':70},
		req:{'Mana brewery':true,'More useful housing':true,'Wizardry':true,'Wizard wisdom':true,'Wizard complex':true,'Belief in portals':true},
	});
		new G.Tech({
		name:'Crafting a glass',
		desc:'Since now your kilns will be able to craft glass out of sand.',
		icon:[7,1,'magixmod'], //WIP
		cost:{'insight':45},
		req:{'masonry':true,'smelting':true},
	});
		new G.Tech({
		name:'floating islands',
		desc:'Wizards got knowledge enough to start making floating isles.',
		icon:[7,2,'magixmod'], //WIP
		cost:{'insight':95},
		req:{'Wizardry':true,'Wizard wisdom':true},
	});
		new G.Tech({
		name:'Essence storages', //COMING SOON , RESEARCH AVAILABLE, BUT WON'T UNLOCK ANYTHING.
		desc:'Essence has to be stored somewhere. So do not wait and build!',
		icon:[5,0,'magixmod'], //WIP
		cost:{'insight':100,'Mana':317,'faith':8,'Wand':260},
		req:{'Mana brewery':true,'More useful housing':true,'Wizardry':true},
	});
		new G.Tech({
		name:'Concrete making',
		desc:'Use limestone and water to craft a concrete, an [advanced building materials].',
		icon:[8,0,'magixmod'], //WIP
		cost:{'insight':75},
		req:{'masonry':true,'smelting':true,'Crafting a glass':true},
	});
		new G.Tech({
		name:'Plain island building',
		desc:'Unlocks sheet of buildings which can be only built in new dimension.',
		icon:[9,0,'magixmod'], 
		cost:{'insight':0},
		req:{'Plain island portal':true},
	});
		new G.Tech({
		name:'construction II',
		desc:'Allows your people to build [Blockhouse] out of [advanced building materials]. Provides much more housing but it is limited to prevent global warmings etc.',
		icon:[8,1,'magixmod'], 
		cost:{'insight':65},
		req:{'Plain island portal':true,'Plain island building':true},
	});
		new G.Tech({
		name:'Burial in new world',
		desc:'Provides even better use of the Plain Island. You may build now few cemetries which consume much more [Land of the Plain Island], but they can store more corpses.',
		icon:[1,6,'magixmod'], 
		cost:{'insight':65},
		req:{'Plain island portal':true,'Plain island building':true},
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
		icon:[6,1,'magixmod'],
		cost:{'insight':1,'stick':2,'food':1,'water':1},
		use:{'worker':1,'Wand':3},
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
		category:'housing',
		limitPer:{'land':2},
	});	
		new G.Unit({
		name:'Well of mana',
		desc:'Source of mana. Once you spill some [Mana] & [Water essence] into the hole you will get mana source.',
		icon:[6,2,'magixmod'],
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
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Floating island',
		desc:'@provides 6 [land]<> Land consumes nature essence, wind essence, a bit fire & water essences but only at first cast. Needs a bit of stones and mud to form its island',
		icon:[6,3,'magixmod'],
		cost:{'Mana':4000,'mud':1000,'stone':3000,'Nature essence':1500,'Wind essence':1500,'Fire essence':600,'Water essence':600},
		upkeep:{'Mana':6,'Nature essence':3,'Wind essence':5},
		req:{'floating islands':true},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'land':6}},
	],
		category:'housing',
		limitPer:{'Land of the Plain Island':250},
	});
		new G.Unit({
		name:'Wizard Complex',
		desc:'@provides 690 [housing]<>A towers for 660 citizens and 30 wizards. Gathers all type of essences three times better than usual tower and consuming same mana.',
		icon:[3,3,'magixmod'],
		cost:{'basic building materials':12500,'precious building materials':3000},
		use:{'land':9},
		upkeep:{'Mana':36},
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true,'Wizard complex':true},
		//require:{'wizard':30},
		effects:[
			{type:'provide',what:{'housing':690}},
			{type:'provide',what:{'authority':15}},
			{type:'provide',what:{'spirituality':15}},
			{type:'provide',what:{'inspiration':30}},
			{type:'gather',context:'gather',what:{'Fire essence':6}},
			{type:'gather',context:'gather',what:{'Water essence':6}},
			{type:'gather',context:'gather',what:{'Nature essence':6}},
			{type:'gather',context:'gather',what:{'Lightning essence':6}},
			{type:'gather',context:'gather',what:{'Wind essence':6}},
			{type:'gather',context:'gather',what:{'Dark essence':6}},
		],
		category:'housing',
		limitPer:{'land':300},
		limitPer:{'population':9000},
	});
//House with mana silo to increase mana capacity
		new G.Unit({
		name:'Brick house with a silo',
		desc:'@provides 15 [housing]<>. Even harder construction makes people feel more safe. Increases food storage by 65 per building.',
		icon:[5,1,'magixmod'],
		cost:{'brick':2000,'basic building materials':100},
		use:{'land':1},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':15}},
			{type:'provide',what:{'food storage':65}},
		],
		req:{'construction':true,'More useful housing':true,'Well of Mana':true},
		category:'housing',
		limitPer:{'land':3},
	});
		new G.Unit({
		name:'Concrete making shack',
		desc:'Allows to make you concrete using some [limestone] and [water].',
		icon:[26,3,25,2],
		cost:{'basic building materials':1000},
		use:{'land':1,'worker':1},
		effects:[
			{type:'convert',from:{'water':8,'limestone':2},into:{'concrete':2},every:7},
		],
		req:{'construction':true,'Concrete making':true},
		category:'crafting',
	});
		new G.Unit({
		name:'Blockhouse',
		desc:'@provides 50 [housing]. Hardly constructed at the lands of Plain Island blockhouse has very low chance to be wasted.',
		icon:[9,1,'magixmod'],
		cost:{'advanced building materials':3000},
		use:{'Land of the Plain Island':3},
		effects:[
			{type:'provide',what:{'housing':50}},
		],
		req:{'construction II':true,'Concrete making':true},
		category:'plainisleunit',
		limitPer:{'land':35},
	});
		new G.Unit({
		name:'Mine of the plain island',
		desc:'@can mine new resource such as [Cobalt ore]. They will be able to mine few other resources.',
		icon:[9,2,'magixmod'],
		cost:{'basic building materials':100},
		use:{'Land of the Plain Island':5,'worker':4,'metal tools':4},
		req:{'Plain island building':true},
		gizmos:true,
		category:'plainisleunit',
		limitPer:{'land':35},
	});
		new G.Unit({
		name:'Cemetry of Plain Island',
		desc:'@Big cemetry but stores a lot of corpses with a method of family burials. Uses workers to keep conservacy & keep Cemetry clean. Provides 7500 [burial spot].',//Soon new policies which will decide how much you may store corpses
		icon:[2,6,'magixmod'],
		cost:{'basic building materials':300},
		use:{'Land of the Plain Island':100,'worker':10},
		effects:[
			{type:'provide',what:{'burial spot':7500}},
		],
		req:{'Plain island building':true,'Burial in new world':true},
		category:'plainisleunit',
		limitPer:{'land':400},
	});
		new G.Unit({
		name:'Family graves',
		desc:'On 5 pieces of new land you can store 10 family graves. Does not use [worker]. Provides 100 [burial spot].',
		icon:[0,6,'magixmod'],
		cost:{'basic building materials':300},
		use:{'Land of the Plain Island':5},
		effects:[
			{type:'provide',what:{'burial spot':100}},
		],
		req:{'Plain island building':true,'Burial in new world':true},
		category:'plainisleunit',
		limitPer:{'land':40},
	});
		new G.Unit({
		name:'Single grave',
		desc:'Simple, single grave for 1 person. Does not use [worker]. Provides 1 [burial spot].',
		icon:[3,6,'magixmod'],
		cost:{'basic building materials':300},
		use:{'Land of the Plain Island':1},
		effects:[
			{type:'provide',what:{'burial spot':1}},
		],
		req:{'Plain island building':true,'Burial in new world':true},
		category:'plainisleunit',
	});
//New Wonder. The portal to Plain Island. If possible i make it being built same way as Mausoleum
		new G.Unit({
    		name:'Plain island portal',
    		desc:'@opens a portal to a huge </b>Plain Island<>A creation made of ideas of wizards and dreams of population more exactly kids.//A Dream comes real. You will grant +25000 max land upon activation of portal',
    		wideIcon:[7,3,'magixmod'],
    		cost:{'precious building materials':5000,'insight':1500,'faith':100,'Fire essence':45000,'Water essence':47500,'Dark essence':37500,'Wind essence':27500,'Lightning essence':37750,'Nature essence':100750},
    		effects:[
    			{type:'provide',what:{'Land of the Plain Island':25000}},//SOON NEW CATEGORY & BUILDINGS WHICH CAN ONLY BE BUILT THERE
    		],
    		use:{'land':10},
		messageOnStart:'You built a portal to Plain Island. It is big isle. On this island you may build houses , mines and other but not these one you built in your mortal world. You will unlock new category of buildings, a little bit better but limited housing. You may gain new minerals, who know maybe new food or anything else you did not see anytime earlier.',
    		req:{'First portal to new world':true,'Belief in portals':true},
    		limitPer:{'land':100000000000000},//It is something like max 1
    		category:'dimensions',
	});
	//Artisans will make wands for wizards. Mode for it.
		G.getDict('artisan').modes['Craftwands']={name:'Craft wands',desc:'Your artisan will craft tool used by wizards. It is not any junk tool.',req:{'Wizardry':true},use:{'worker':1,'stone tools':2}};	
		G.getDict('artisan').effects.push({type:'convert',from:{'stick':4,'stone':2},into:{'Wand':1},every:5,mode:'Craftwands'});
	//Kilns will be able to make glass out of sand
		G.getDict('kiln').modes['Craftglass']={name:'Craft glass',desc:'Your kiln will now use sand to make a glass.',req:{'Crafting a glass':true},use:{'worker':1,'stone tools':1}};	
		G.getDict('kiln').effects.push({type:'convert',from:{'sand':8},into:{'glass':2},every:5,mode:'Craftglass'});
	//Mining modes for Plain Island mines
	//Category for portals
	G.unitCategories.unshift({
			id:'dimensions',
			name:'Portals'
		});
	//Category for buildings which can only be built on lands of Plain island
	G.unitCategories.unshift({
			id:'plainisleunit',
			name:'Plain Island'
		});
	//Modes for mine from Plain Island
		G.getDict('Mine of the plain island').modes['cobalt']={name:'Cobalt',desc:'Gain [Cobalt ore] mainly from this mine.',use:{'worker':5,'metal tools':5}};	
		G.getDict('Mine of the plain island').effects.push({type:'gather',context:'mine',what:{'Cobalt ore':1},every:5,mode:'cobalt'});
		G.getDict('Mine of the plain island').modes['salt']={name:'Salt',desc:'Gain [salt] mainly from this mine.',use:{'worker':3,'metal tools':3}};	
		G.getDict('Mine of the plain island').effects.push({type:'gather',context:'mine',what:{'salt':3},every:5,mode:'salt'});
		G.getDict('Mine of the plain island').modes['copper']={name:'Copper',desc:'Gain [cooper ore] mainly from this mine.',use:{'worker':3,'metal tools':3}};	
		G.getDict('Mine of the plain island').effects.push({type:'gather',context:'mine',what:{'copper ore':3},every:5,mode:'copper'});
		G.getDict('Mine of the plain island').modes['tin']={name:'Tin',desc:'Gain [tin ore] mainly from this mine.',use:{'worker':3,'metal tools':3}};	
		G.getDict('Mine of the plain island').effects.push({type:'gather',context:'mine',what:{'tin ore':3},every:5,mode:'tin'});
		G.getDict('Mine of the plain island').modes['iron']={name:'Iron',desc:'Gain [iron ore] mainly from this mine.',use:{'worker':3,'metal tools':3}};	
		G.getDict('Mine of the plain island').effects.push({type:'gather',context:'mine',what:{'iron ore':3},every:5,mode:'iron'});
}});
