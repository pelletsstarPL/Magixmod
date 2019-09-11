G.AddData({
name:'Magix',
author:'pelletsstarPL',
desc:'Magic! Magic!. Fit more guys discover essences which have its secret use. At the moment you can reach new dimensions which will double your max land soon. More housing so you can fit more people.',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:{'magixmod':'https://i.imgur.com/dJubhEE.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function(){
//Mana and essences.
		G.resCategories={

			'main':{
				name:'Essentials',
				base:[],
				side:['population','worker','happiness','health','land','coin','Land of the Plain Island'],
		},
			'demog':{
				name:'Demographics',
				base:['baby','child','adult','elder','worker','sick','wounded'],
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
			'flowersanddyes':{
				name:'Flowers & Dyes',
				base:[],
				side:['Flowers','Dyes'],
		},
			'alchemy':{
				name:'Alchemy', //It won't be added quickly but i will code this category
				base:[],
				side:[],
		},
	};
		new G.Res({
		name:'Mana',
		desc:'[Mana] is used to make essences. Thing used by beginner wizards. ',
		icon:[2,3,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Wand',
		desc:'Wands are basic of wizardry. Thing used by beginner wizards. Without it most of spells are impossible to be casted. @Number to the left means how much is now used, to the right how much is in stock.',
		icon:[6,4,'magixmod'],
		category:'gear',
		displayUsed:true,
	});
		new G.Res({
		name:'Land of the Plain Island',
		desc:'The land you got from activating a portal to Plain Island. Place for new buildings.',
		icon:[7,0,'magixmod'],
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
//FLOWERS!,DYES!
		new G.Res({
		name:'Flowers',
		desc:'This defines the amount of flowers, which you have currently in total.',
		icon:[11,8,'magixmod'],
		partOf:'misc materials',
		meta:true,
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Dyes',
		desc:'This defines the amount of dyes crafted out of flowers, which you have currently in total.',
		icon:[11,7,'magixmod'],
		partOf:'misc materials',
		meta:true,
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Lavender',
		desc:'Nice flower. Has relaxing smell.',
		icon:[0,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Salvia',
		desc:'Plant which may be used to heal [wounded].',
		icon:[1,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Bachelor\'s button',
		desc:'Known as cornflower too. It looks cool while planted near house.',
		icon:[0,8,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Dianella',
		desc:'Commonly called flax lilies.',
		icon:[1,8,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Desert rose',
		desc:'Desert version of rose. As most plants these are good for flowerbeds.',
		icon:[0,7,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Cosmos',
		desc:'Cosmos is a genus, with the same common name of cosmos, consisting of flowering plants in the sunflower family.',
		icon:[1,7,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Pink rose',
		desc:'One of few versions of roses. As the other roses they fit perfectly for proposal.',
		icon:[2,7,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Pink tulip',
		desc:'One of few versions of tulips. As the other tulips they fit perfectly for proposal.',
		icon:[3,7,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Coreopsis',
		desc:'Yellow flower. If you\'re looking for low maintenance, drought tolerant, long blooming and cheerful plants for a flower border or a filler, coreopses are a perfect choice.',
		icon:[2,8,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Crown imperial',
		desc:'The Crown imperial is a species of flowering plant in the lily family.',
		icon:[3,8,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Cyan rose',
		desc:'One of few versions of roses. As the other roses they fit perfectly for proposal.',
		icon:[2,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Himalayan blue poopy',
		desc:'It was first described by French botanist Viguier in 1814. The species have attractive flowers and have two distinct ranges.',
		icon:[3,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Cockscomb',
		desc:'Cockscomb, is a flowering plant in the genus Rhinanthus.',
		icon:[4,7,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Red tulip',
		desc:'One of few versions of tulips. As the other tulips they fit perfectly for proposal.',
		icon:[5,7,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Green Zinnia',
		desc:'Zinnia is a genus of plants of the sunflower tribe within the daisy family.',
		icon:[4,8,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'cactus',
		desc:'Spiky. Their main house is in desert. Can be used to make archaic caltrops and dye of course. Do not forget about decor use.',
		icon:[5,8,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Lime rose',
		desc:'One of few versions of roses. As the other roses they fit perfectly for proposal.',
		icon:[5,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Lime tulip',
		desc:'One of few versions of tulips. As the other tulips they fit perfectly for proposal.',
		icon:[4,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Azure bluet',
		desc:'Azure bluet is a perennial species in the Rubiaceae family.',
		icon:[6,7,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Daisy',
		desc:'Daisy(Bellis perennis) is a common European species of daisy, of the family Asteraceae, often considered the archetypal species of that name.',
		icon:[7,7,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Sunflower',
		desc:'From this flower except yellow dye you can gain edible seeds.',
		icon:[6,8,'magixmod'],
		partOf:'Flowers',
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Dandelion',
		desc:'Easiest source of yellow dye.',
		icon:[7,8,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Black lily',
		desc:'Black dye source. One of the types of lilies.',
		icon:[6,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Black Hollyhock',
		desc:'Sometimes, the genus name is given as Althea; but don\'t confuse the plant with rose of sharon, which may also go by that name.',
		icon:[7,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Cattail',
		desc:'Cattail (Typha)is a genus of about 30 species of monocotyledonous flowering plants in the family Typhaceae. These plants have a variety of common names such as reed or cattail.',
		icon:[8,7,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Flax',
		desc:'Flax (Linum usitatissimum), also known as common flax or linseed, is a member of the genus Linum in the family Linaceae.',
		icon:[8,8,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Blue orchid',
		desc:'An blue orchid',
		icon:[9,8,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'White tulip',
		desc:'One of few versions of tulips. As the other tulips they fit perfectly for proposal.',
		icon:[8,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Lily of the Valley',
		desc:'Lily of the valley sometimes written lily-of-the-valley, is a highly poisonous woodland flowering plant with sweetly scented, pendent, bell-shaped white flowers borne in sprays in spring. It is native throughout the cool temperate Northern Hemisphere in Asia and Europe.',
		icon:[9,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Gray rose',
		desc:'One of few versions of roses. As the other roses they fit perfectly for proposal.',
		icon:[10,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Gray tulip',
		desc:'One of few versions of tulips. As the other tulips they fit perfectly for proposal.',
		icon:[11,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Light gray dye',
		desc:'Dye used in art and many other.',
		icon:[11,0,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Cyan dye',
		desc:'Dye used in art and many other.',
		icon:[10,0,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Gray dye',
		desc:'Dye used in art and many other.',
		icon:[11,1,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Brown dye',
		desc:'Dye used in art and many other.',
		icon:[10,1,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Purple dye',
		desc:'Dye used in art and many other.',
		icon:[10,2,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'White dye',
		desc:'Dye used in art and many other.',
		icon:[11,2,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Green dye',
		desc:'Dye used in art and many other.',
		icon:[10,3,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Pink dye',
		desc:'Dye used in art and many other.',
		icon:[11,3,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Blue dye',
		desc:'Dye used in art and many other.',
		icon:[10,4,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Lime dye',
		desc:'Dye used in art and many other.',
		icon:[11,4,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Black dye',
		desc:'Dye used in art and many other.',
		icon:[10,5,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Light blue dye',
		desc:'Dye used in art and many other.',
		icon:[11,5,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Yellow dye',
		desc:'Dye used in art and many other.',
		icon:[10,6,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Orange dye',
		desc:'Dye used in art and many other.',
		icon:[11,6,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Red dye',
		desc:'Dye used in art and many other.',
		icon:[10,7,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});
		new G.Res({
		name:'Magenta dye',
		desc:'Dye used in art and many other.',
		icon:[10,8,'magixmod'],
		partOf:'Dyes',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
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
		modes:{
			'off':G.MODE_OFF,
			'cobalt':{name:'Cobalt',icon:[8,2,'magixmod'],desc:'Gain [Cobalt ore] mainly from this mine.',use:{'worker':5,'metal tools':5}},
			'salt':{name:'Salt',icon:[11,7],desc:'Mine for [salt].',req:{'prospecting':true},use:{'worker':3,'metal tools':3}},
			'copper':{name:'Copper',icon:[9,8],desc:'Mine for [copper ore] with x5 efficiency.',req:{'prospecting':true},use:{'worker':3,'metal tools':3}},
			'tin':{name:'Tin',icon:[13,8],desc:'Mine for [tin ore] with x5 efficiency.',req:{'prospecting':true},use:{'worker':3,'metal tools':3}},
			'iron':{name:'Iron',icon:[10,8],desc:'Mine for [iron ore] with x5 efficiency.',req:{'prospecting':true},use:{'worker':3,'metal tools':3}},
		},
		effects:[
			{type:'gather',context:'mine',what:{'stone':10},max:30,notMode:'off'},
			{type:'gather',context:'gather',what:{'Cobalt ore':10},max:30,mode:'cobalt'},
			{type:'gather',context:'mine',what:{'salt':25},max:30,mode:'salt'},
			{type:'gather',context:'mine',what:{'copper ore':25},max:30,mode:'copper'},
			{type:'gather',context:'mine',what:{'tin ore':25},max:30,mode:'tin'},
			{type:'gather',context:'mine',what:{'iron ore':25},max:30,mode:'iron'},
			//{type:'function',func:unitGetsConverted({'wounded':1},0.001,0.01,'[X] [people].','Plain island mine collapsed, wounding its workers','Plain island mines collapsed, wounding their workers'),chance:1/50} ERROR
		],
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
		new G.Unit({
		name:'well of the Plain Island',
		desc:'@produces fresh [water], up to 20 per day<>The [well] is a steady source of drinkable water.',
		icon:[25,3],
		cost:{'stone':70,'archaic building materials':30,'basic building materials':15},
		use:{'Land of the Plain Island':1},
		effects:[
			{type:'gather',what:{'water':20}},
		],
		category:'plainisleunit',
		req:{'well-digging':true,'First portal to new world':true,'Plain island building':true},
		limitPer:{'Land of the Plain Island':10},
	});
		new G.Unit({
		name:'Florist',
		startWith:0,
		desc:'@subclass of gatherer which instead of Food and water, will collect flowers which will have its specific use.',
		icon:[0,2],
		cost:{},
		req:{},
		use:{'worker':1},
		category:'production',
		effects:[
			{type:'gather',context:'gather',what:{'Cactus':1,'Pink tulip':1,'Salvia':1},amount:1,max:3},
			{type:'gather',context:'gather',what:{'Green Zinnia':1,'Sunflower':1},amount:1,max:1,req:{'plant lore':true}},
			{type:'mult',value:1.05,req:{'harvest rituals for flowers':'on'}}
		],
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
	//Category for 
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
	G.policyCategories.push(
			{id:'Florists',name:'Florists gathering'}
	);
	G.contextNames['flowers']='Flowers';
		new G.Goods({
		name:'Tulips',
		desc:'Cool flowers, can be used in most of events and decors.',
		icon:[3,7,'magixmod'],
		res:{
			'flowers':{'Pink tulip':1,'White tulip':1,'Gray tulip':1,'Lime tulip':1},
		},
		mult:5,
	});
		new G.Goods({
		name:'Roses',
		desc:'Cool flowers, can be used in most of events and decors. Lovely.',
		icon:[2,7,'magixmod'],
		res:{
			'flowers':{'Pink Rose':1,'Cyan rose':1,'Lime rose':1,'Desert rose':1},
		},
		mult:5,
	});
		new G.Goods({
		name:'Lavender flowers',
		desc:'Flower used in: Aromatotherapy, used as decor and many, many else.',
		icon:[0,9,'magixmod'],
		res:{
			'flowers':{'Lavender':1},
		},
		mult:5,
	});
		new G.Goods({
		name:'Flowerhouse',
		desc:'This flowerhouse has a few flowers that can be found there. In this type of Flowerhouse you may find: [Lily of the Valley],[Bachelor\'s button],[Dianella],[Dandelion],[Black lily] and [Flax].',
		icon:[0,0,'magixmod'],
		res:{
			'flowers':{'Lily of the Valley':1,'Bachelor\'s button':1,'Dianella':1,'Dandelion':1,'Black lily':1,'Flax':1},
		},
		mult:6,
	});
		new G.Goods({
		name:'Cactus',
		desc:'Spiky but icon of the deserts.',
		icon:[5,8,'magixmod'],
		res:{
			'flowers':{'cactus':2},
		},
		mult:4,
	});
//New land for mortal world
		new G.Land({
		name:'Lavender fields',
		names:['Lavender fields'],
		modifier:true,
		image:13,
		score:8,
		goods:[
			{type:'oak',min:0.2,max:1},
			{type:['Roses'],chance:0.005,min:0.01,max:0.03},
			{type:'freshwater',min:0.2,max:0.6},
			{type:'Lavender flowers',min:0.2,max:0.6},
			{type:['Tulips'],chance:0.005,min:0.01,max:0.03},
			{type:'wild bugs'},
			{type:'rocky substrate'},
		],
	});
		new G.Land({
		name:'Flower forest',
		names:['Flower forest'],
		modifier:true,
		image:13,
		score:9,
		goods:[
			{type:'oak',min:0.2,max:1},
			{type:['Roses'],chance:0.1,min:0.01,max:0.03},
			{type:'freshwater',min:0.2,max:0.6},
			{type:'Flowerhouse',min:0.3,max:0.7},
			{type:['Tulips'],chance:0.08,min:0.01,max:0.03},
			{type:['wolves'],chance:0.1,min:0.1,max:0.3},
			{type:'wild bugs'},
			{type:'rocky substrate'},
		],
	});
		new G.Land({
		name:'Xeric shrubland',
		names:['Xeric shrubland'],
		modifier:true,
		image:13,
		score:7,
		goods:[
			{type:'dead tree',amount:0.5},
			{type:'Cactus',amount:0.6,chance:0.4},
			{type:'succulents',min:0.1,max:0.6},
			{type:'grass',chance:0.3,amount:0.3},
			{type:'wild rabbits',chance:0.05},
			{type:['foxes'],chance:0.3,min:0.1,max:0.3},
			{type:['wolves'],chance:0.1,min:0.1,max:0.3},
			{type:'wild bugs',amount:0.15},
			{type:'freshwater',amount:0.13},
			{type:'sandy soil'},
			{type:'rocky substrate'},
		],
	});

		new G.Policy({
		name:'harvest rituals for flowers',
		desc:'Improves [Florist] efficiency by 20%. Consumes 1 [faith] & 1 [influence] every 20 days; will stop if you run out.',
		icon:[8,12,11,8,'magixmod'],
		cost:{'faith':1,'influence':3},
		startMode:'off',
		req:{'ritualism':true},
		category:'faith',
	});
		G.funcs['create map']=function(w,h)
	{
		//generate basic geography using Conway's Game of Life (rule : births from 4 to 9 neighbors, survival from 6 to 9 neighbors)
		
		var generate=function(w,h)
		{
			var getAt=function(map,x,y)
			{
				//if (x<0||x>=map.length||y<0||y>=map[0].length) return 0;
				//wrap around so we don't get big empty spots on the edges (as a bonus, this creates donut-shaped worlds)
				if (x<0) x+=map.length;
				else if (x>=map.length) x-=map.length;
				if (y<0) y+=map[0].length;
				else if (y>=map[0].length) y-=map[0].length;
				return map[x][y];
			}
			
			//init map
			var lvl=[];
			for (var x=0;x<w;x++)
			{
				lvl[x]=[];
				for (var y=0;y<h;y++)
				{
					lvl[x][y]=Math.random()<0.5?1:0;
				}
			}
			
			//init buffer
			var lvlBuffer=[];
			for (var x=0;x<w;x++){lvlBuffer[x]=[];for (var y=0;y<h;y++){lvlBuffer[x][y]=0;}}
			
			var passes=1;
			for (var i=0;i<passes;i++)
			{
				//live
				for (var x=0;x<w;x++)
				{
					for (var y=0;y<h;y++)
					{
						var n=getAt(lvl,x-1,y)+getAt(lvl,x-1,y-1)+getAt(lvl,x,y-1)+getAt(lvl,x+1,y-1)+getAt(lvl,x+1,y)+getAt(lvl,x+1,y+1)+getAt(lvl,x,y+1)+getAt(lvl,x-1,y+1);
						var on=lvl[x][y];
						if (on && n>=4 && n<=9) on=1; else on=0;
						if (!on && n>=6 && n<=9) on=1;
						if (Math.random()<0.05) on=Math.random()<0.5?1:0;//just a bit of extra randomness
						lvlBuffer[x][y]=on;
					}
				}
				//copy buffer back
				for (var x=0;x<w;x++){for (var y=0;y<h;y++){lvl[x][y]=lvlBuffer[x][y];}}
			}
			
			return lvl;
		}
		
		var getStrAt=function(map,x,y)
		{
			if (x<0||x>=map.length-1||y<0||y>=map[0].length-1) return 'out';
			return map[x][y];
		}
		var getAt=function(map,x,y)
		{
			if (x<0||x>=map.length-1||y<0||y>=map[0].length-1) return 0.5;
			return map[x][y];
		}
		
		var landTiles=[];
		var seaTiles=[];
		var fit=false;
		i=0;
		while (i<20 && fit==false)//discard any map with less than 30% or more than 50% land
		{
			var lvl=generate(w,h);
			
			landTiles=[];
			seaTiles=[];
			for (var x=0;x<w;x++)
			{
				for (var y=0;y<h;y++)
				{
					if (lvl[x][y]==0) seaTiles.push([x,y]);
					else landTiles.push([x,y]);
				}
			}
			var total=landTiles.length+seaTiles.length;
			if (landTiles.length/total>0.3 && landTiles.length/total<0.5) fit=true;
			i++;
		}
		
		//translate into terrain
		for (var x=0;x<w;x++)
		{
			for (var y=0;y<h;y++)
			{
				var land='ocean';
				if (lvl[x][y]==0) land='ocean';
				else if (lvl[x][y]==1)
				{
					land='none';
				}
				lvl[x][y]=land;
			}
		}
		
		//precipitation map
		//generate more humidity over sea, less in land - with some variance
		//on tiles with low humidity, 30% of the time, add some huge variance
		//then, blur the map so that coasts get some humidity and variance can spread
		var wet=[];
		for (var x=0;x<w;x++)
		{
			wet[x]=[];
			for (var y=0;y<h;y++)
			{
				wet[x][y]=(lvl[x][y]=='ocean'?0.8:0.2)+Math.random()*0.1-0.1/2;
				if (Math.random()<0.3 && wet[x][y]<0.5) wet[x][y]+=Math.random()*5-2.5;
			}
		}
		for (var x=0;x<w;x++)//blur
		{
			for (var y=0;y<h;y++)
			{
				var variance=0.05;
				var n=getAt(wet,x-1,y)+getAt(wet,x-1,y-1)+getAt(wet,x,y-1)+getAt(wet,x+1,y-1)+getAt(wet,x+1,y)+getAt(wet,x+1,y+1)+getAt(wet,x,y+1)+getAt(wet,x-1,y+1);
				wet[x][y]=(wet[x][y]+n)/9+Math.random()*variance-variance/2;
			}
		}
		//temperature map. why not
		var jumble=false;
		if (!jumble)
		{
			//vertical sine wave (so we get hot equator and cold poles), with some variance
			//humidity lowers temperature by a bit
			var temp=[];
			for (var x=0;x<w;x++)
			{
				temp[x]=[];
				for (var y=0;y<h;y++)
				{
					var variance=0.15;
					temp[x][y]=Math.sin(((y+0.5)/h-0.25)*Math.PI*2)/2+(lvl[x][y]=='ocean'?0.6:0.5)-(wet[x][y])*0.15+Math.random()*variance-variance/2;
				}
			}
		}
		else
		{
			//temperature spawns in big blobs of cold and hot
			var temp=[];
			for (var x=0;x<w;x++)
			{
				temp[x]=[];
				for (var y=0;y<h;y++)
				{
					temp[x][y]=0.65+Math.random()*0.1-0.1/2-wet[x][y]*0.15;
					if (Math.random()<0.5) temp[x][y]+=Math.random()*10-5;
				}
			}
			for (var i=0;i<2;i++)//blur
			{
				for (var x=0;x<w;x++)
				{
					for (var y=0;y<h;y++)
					{
						var variance=0.05;
						var n=getAt(temp,x-1,y)+getAt(temp,x-1,y-1)+getAt(temp,x,y-1)+getAt(temp,x+1,y-1)+getAt(temp,x+1,y)+getAt(temp,x+1,y+1)+getAt(temp,x,y+1)+getAt(temp,x-1,y+1);
						temp[x][y]=(temp[x][y]+n)/9+Math.random()*variance-variance/2;
					}
				}
			}
		}
		
		for (var x=0;x<w;x++)
		{
			for (var y=0;y<h;y++)
			{
				var tempTile=temp[x][y];
				var wetTile=wet[x][y];
				var landTile=lvl[x][y];
				
				var biomes=[];
				if (tempTile<-0.1)
				{
					if (landTile=='ocean') biomes.push('arctic ocean');
					else biomes.push('ice desert');
				}
				else if (tempTile<0.15)
				{
					if (landTile=='ocean') biomes.push('arctic ocean');
					else if (wetTile<0.25) biomes.push('ice desert');
					else if (wetTile>0.5) biomes.push('boreal forest');
					else biomes.push('tundra');
				}
				else if (tempTile>0.3)
				{
					if (landTile=='ocean') biomes.push('ocean');
					else if (wetTile<0.25) biomes.push('forestdesert');
					else if (wetTile>0.5) biomes.push('Lavender fields');
					else biomes.push('Flower forest');
				}
				else if (tempTile>1.1)
				{
					if (landTile=='ocean') biomes.push('tropical ocean');
					else biomes.push('desert');
				}
				else if (tempTile>0.85)
				{
					if (landTile=='ocean') biomes.push('tropical ocean');
					else if (wetTile<0.25) biomes.push('desert');
					else if (wetTile>0.5) biomes.push('jungle');
					else biomes.push('savanna');
				}
				else
				{
					if (landTile=='ocean') biomes.push('ocean');
					else if (wetTile<0.25) biomes.push('shrubland');
					else if (wetTile>0.5) biomes.push('forest');
					else biomes.push('prairie');
				}
				if (biomes.length==0) biomes.push('prairie');
				lvl[x][y]=choose(biomes);
			}
		}
		
		for (var x=0;x<w;x++)//clean all tiles with no terrain
		{
			for (var y=0;y<h;y++)
			{
				if (lvl[x][y]=='none') lvl[x][y]='forest';
			}
		}
		return lvl;
	}
}});
