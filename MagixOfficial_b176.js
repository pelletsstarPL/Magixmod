G.AddData({
name:'Magix',
author:'pelletsstarPL',
desc:'Magic! Magic!. Fit more people, discover essences which have its secret use. At the moment you can reach new dimensions which will increase your max land soon. More housing so you can fit more people. @Mod utilizes vanilla part of the game by adding new modes or new units.',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:{'magixmod':'https://pipe.miroware.io/5db9be8a56a97834b159fd5b/magixmod.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function(){
//Mana and essences.
		G.resCategories={

			'main':{
				name:'Essentials',
				base:[],
				side:['population','worker','happiness','health','land','coin','Land of the Plain Island','Land of the Paradise'],
		},
			'demog':{
				name:'Demographics',
				base:['baby','child','adult','elder','worker','sick','wounded'],
				side:['population','housing','corpse','burial spot','Alchemists'],
		},
			'food':{
				name:'Food & Water',
				base:[],
				side:['food','spoiled food','water','muddy water','food storage','Juices','Spoiled juices'],
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
				side:['Paper','Magic essences'],
		},
			'flowersanddyes':{
				name:'Flowers & Dyes',
				base:[],
				side:['Flowers','Dyes'],
		},
			'alchemypotions':{
				name:'Alchemy - Potions', 
				base:[],
				side:['Basic brews','Alcohol brews','Medicament brews'],
		},
			'alchemyingredients':{
				name:'Alchemy - Ingredients', 
				base:[],
				side:[],
		},
	};
	var limitDesc=function(limit){return 'It is limited by your '+limit+'; the closer to the limit, the slower it is to produce more.';};
	var researchWhenGathered=function(me,amount,by)
		{
			var limit=G.getDict(this.limit).amount;
			if (limit>0)
			{
				var mult=1;
				me.amount+=randomFloor(Math.pow(1-me.amount/limit,2)*(Math.random()*amount*me.mult*mult));
				me.amount=Math.min(me.amount,limit);
			}
		};
		new G.Res({
		name:'Mana',
		desc:'[Mana] is used to make essences. Thing used by beginner wizards. ',
		icon:[2,3,'magixmod'],
		partOf:'misc materials',
		whenGathered:researchWhenGathered,
		limit:'mana capacity',
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
		name:'Cactus spikes',
		desc:'Spikes out of [cactus]. May wound... a lot!',
		icon:[12,0,'magixmod'],
		category:'misc',
		partOf:'misc materials',
	});
		new G.Res({
		name:'Sunflower seeds',
		desc:'Edible seeds out of [Sunflower].',
		icon:[12,1,'magixmod'],
		category:'food',
		partOf:'food',
	});
		new G.Res({
		name:'Painting',
		desc:'The paint made by Painter. People are proud from its beauty.',
		icon:[12,4,'magixmod'],
		category:'misc',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0001;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
			G.pseudoGather(G.getRes('culture'),randomFloor(spent));
		},
	});
		new G.Res({
		name:'Land of the Plain Island',
		desc:'The land you got from activating a portal to Plain Island. Place for new buildings.',
		icon:[7,0,'magixmod'],
		displayUsed:true,
	});
		new G.Res({
		name:'Land of the Paradise',
		desc:'The land you got from activating a portal to the Paradise. Place for new buildings.',
		icon:[20,4,'magixmod'],
		displayUsed:true,
	});
		new G.Res({
		name:'Fire essence',
		desc:'[Fire essence] is warm in hands and dangerous. Might be used to fight against cold winters.',
		icon:[0,2,'magixmod'],
		partOf:'Magic essences',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0001;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		whenGathered:researchWhenGathered,
		limit:'fire essence limit',
		category:'misc',
	});
		new G.Res({
		name:'Water essence',
		desc:'[Water essence] this essence is undrinkable but can be used to cast rain.',
		icon:[0,1,'magixmod'],
		partOf:'Magic essences',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0001;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		whenGathered:researchWhenGathered,
		limit:'water essence limit',
		category:'misc',
	});
		new G.Res({
		name:'Nature essence',
		desc:'[Nature essence] is used by wizards to reviewe their beloved flowers or make harvests more plentiful.',
		icon:[1,2,'magixmod'],
		partOf:'Magic essences',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0001;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		whenGathered:researchWhenGathered,
		limit:'nature essence limit',
		category:'misc',
	});
		new G.Res({
		name:'Dark essence',
		desc:'[Dark essence] used to make a blackholes for graves or to even bigger spellworks like mirror world. .',
		icon:[1,3,'magixmod'],
		partOf:'Magic essences',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0001;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		whenGathered:researchWhenGathered,
		limit:'dark essence limit',
		category:'misc',
	});
		new G.Res({
		name:'Lightning essence',
		desc:'[Lightning essence] can make a storms safer for people granting satisfaction  and good entertainment for storm hunters. Who knows what would happen if its essence can start elecricity age.',
		icon:[0,3,'magixmod'],
		partOf:'Magic essences',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0001;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		whenGathered:researchWhenGathered,
		limit:'lightning essence limit',
		category:'misc',
	});
		new G.Res({
		name:'Wind essence',
		desc:'[Wind essence] this one should not be used by everyone due to risk of tornado disaster. Anyway this one will have its use in spellcasting.',
		icon:[1,1,'magixmod'],
		partOf:'Magic essences',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0001;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		whenGathered:researchWhenGathered,
		limit:'wind essence limit',
		category:'misc',
	});
		new G.Res({
		name:'Essence of the Holiness',
		desc:'[Essence of the Holiness] this one should not be used by everyone due to risk of mass blindness. Anyway this one will have its faithful uses.',
		icon:[20,6,'magixmod'],
		partOf:'Magic essences',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0001;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		whenGathered:researchWhenGathered,
		limit:'holy essence limit',
		category:'misc',
	});
		new G.Res({
		name:'Cobalt ore',
		desc:'Hard mineral. At least you may be able to smelt some cobalt and turn them into ingot of the Cobalt in mortal world.',
		icon:[8,2,'magixmod'],
		partOf:'misc materials',
		category:'build',
	});
		new G.Res({
		name:'Scobs',
		desc:'Scobs are effect of carver working at [Wooden statuette] and cutting trees.',
		icon:[13,2,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Colored clothing',
		desc:'Sewn together from [leather] or textile fiber and in addition colored with help of [Dyes].//Each [population,Person] wearing clothing is slightly happier and healthier.',
		icon:[13,0,'magixmod'],
		category:'gear',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.002;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Wooden statuette',
		desc:'A small idol that was rudimentarily carved from [log] or [lumber].//May be used up over time, creating [culture].',
		icon:[13,1,'magixmod'],
		partOf:'misc materials',
		category:'misc',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.03;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
			G.pseudoGather(G.getRes('culture'),randomFloor(spent));
		},
	});
		new G.Res({
		name:'Dried leather',
		desc:'Hardened version of [leather]. The one way to craft is putting [leather] into <b>Drying rack<b>.',
		icon:[13,4,'magixmod'],
		category:'build',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.03;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Crossbow',
		desc:'Weapon with a pro which [bow] does not have. Your hunter or soldier will now need just click to release belt. Remember about putting belt on before.@Number to the left means how much is now used, to the right how much is in stock.',
		icon:[13,6,'magixmod'],
		category:'gear',
		displayUsed:true,
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.002;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Crossbow belt',
		desc:'An ammo for [Crossbow].@Number to the left means how much is now used, to the right how much is in stock.',
		icon:[13,7,'magixmod'],
		category:'gear',
		displayUsed:true,
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.002;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Fishing net',
		desc:'An another way to catch [seafood]. Solid net can be used to catch more fish. Can gather a little more fishes than line fishing.@Number to the left means how much is now used, to the right how much is in stock.',
		icon:[13,8,'magixmod'],
		category:'gear',
		displayUsed:true,
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Thread',
		desc:'This item is really in need if you want to get at higher level of sewing.',
		icon:[13,9,'magixmod'],
		category:'misc',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Cobalt ingot',
		desc:'An ingot made out of [Cobalt ore]. Has few or almost none of use. Wait, maybe as precious building material it may be used.',
		icon:[14,0,'magixmod'],
		category:'build',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Watermelon',
		desc:'Fresh fruit. Can be farmed at the lands of the Plain Island. You can make a juice out of it.',
		icon:[15,1,'magixmod'],
		turnToByContext:{'eat':{'health':0.045,'happiness':0.025},'decay':{'spoiled food':0.15}},
		category:'food',
		partOf:'food',
	});
		new G.Res({
		name:'Watermelon juice',
		desc:'Fresh, sweet, healthy and tasty juice. Grants more [happiness] and [health] than normal, common [water] but spoils little faster.',
		icon:[15,3,'magixmod'],
		category:'food',
		partOf:'Juices',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.02;
			var spent=G.lose('Watermelon juice',randomFloor(toSpoil),'decay');
			var n=randomFloor(G.getRes('Watermelon juice').amount*0.4);
			G.gain('happiness',randomFloor(spent*0.6),'drinking tasty juice');
			G.gain('health',randomFloor(spent*1.15),'drinking tasty juice');
			if (G.has('Juicy expertise'))
			{
				G.gain('happiness',randomFloor(spent*0.15),'drinking tasty juice');
				G.gain('health',randomFloor(spent*0.23),'drinking tasty juice');
			}
		},
	});
		new G.Res({
		name:'Berry juice',
		desc:'Fresh, sweet, healthy and tasty juice. Grants more [happiness] and [health] than normal, common [water] but spoils little faster.',
		icon:[16,3,'magixmod'],
		category:'food',
		partOf:'Juices',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.02;
			var spent=G.lose('Berry juice',randomFloor(toSpoil),'decay');
			var n=randomFloor(G.getRes('Berry juice').amount*0.4);
			G.gain('happiness',randomFloor(spent*0.6),'drinking tasty juice');
			G.gain('health',randomFloor(spent*1.15),'drinking tasty juice');
			if (G.has('Juicy expertise'))
			{
				G.gain('happiness',randomFloor(spent*0.15),'drinking tasty juice');
				G.gain('health',randomFloor(spent*0.23),'drinking tasty juice');
			}
		},
	});
		new G.Res({
		name:'Juices',
		desc:'This stat shows you how much juices of any type you have currently in total. Juices provide more [happiness] and [health] than normal, common [water] but spoils little faster. Can be used in few crafts like normal water.',
		icon:[14,3,'magixmod'],
		meta:true,
		partOf:'water',
		tick:function(me,tick)
		{
			if (G.checkPolicy('disable spoiling')=='off')
			{
				var toSpoil=me.amount*0.01;
				var spent=G.lose(me.name,randomFloor(toSpoil),'drinking juice');
				G.gain('Spoiled juices',randomFloor(spent*0.4),'decay');
			}
		},
	});
		new G.Res({
		name:'Spoiled juices',
		desc:'This stat shows you how much spoiled juice of any type you have currently in total. Spoiled juice decreases [happiness] and [health] stronger than normal, common [muddy water]. Can be used in few crafts like muddy water.',
		icon:[14,5,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose('Spoiled juices',randomFloor(toSpoil),'decay');
			if (G.checkPolicy('drink spoiled juice')=='on')
			{
				G.gain('happiness',randomFloor(spent*-1.17),'drinking spoiled juice');
				G.gain('health',randomFloor(spent*-1.35),'drinking spoiled juice');
			}
		},
	});
		new G.Res({
		name:'Berries',
		desc:'[Berries] taste sweet, but spoil quickly.',
		icon:[16,1,'magixmod'],
		turnToByContext:{'eat':{'health':0.035,'happiness':0.025},'decay':{'spoiled food':0.8}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});
		new G.Res({
		name:'Bamboo',
		desc:'This tropical material can be used for archaic constructions.',
		icon:[14,4,'magixmod'],
		partOf:'archaic building materials',
		category:'build',
	});
		new G.Res({
		name:'Sugar cane',
		desc:'These canes contains [sugar] in them. You can get [sugar] by giving this task to an artisan.',
		icon:[15,4,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'sugar',
		desc:'If you want to start crafting tasty juices, [sugar] is a must.',
		icon:[15,2,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Watermelon seeds',
		desc:'If you want to start farming [Watermelon] and crafting tasty [Juices] these seeds are a must.',
		icon:[16,6,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Berry seeds',
		desc:'If you want to start farming [Berries] and crafting tasty [Juices] these seeds are a must.',
		icon:[15,6,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Plain Island emblem',
		desc:'A thing you will get after activating a Plain Island portal. Needed to unlock further researching. A pass for further things. You can obtain only one Emblem of this type. <b>@Your adventure has been finished... But portal hides a new secrets... so in fact your adventure has not ended yet.<b>',
		icon:[14,9,'magixmod'],
		startWith:0,
		tick:function(me,tick)
		{
			if (me.amount>=1){ 
				G.Message({type:'good',text:'<b>You and your people activated passage to Plain Island. Out of portal an Emblem fall and hits on rock. Big rectangular portal shines and you can see what is beyond it. You come through and notice there are flat plains. Now it is time for more discoveries and build there some stuff.</b>',icon:[8,3,'magixmod']});
			}
		},	
		category:'main',
	});
		new G.Res({
		name:'Precious pot',
		desc:'Harder and more beautiful pot. Each one stores 27[food]. Decays slower , grants a really low amount of [culture].',
		icon:[15,8,'magixmod'],
		category:'misc',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0008;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
			G.pseudoGather(G.getRes('culture'),randomFloor(spent));
		},
	});
		new G.Res({
		name:'Potion pot',
		desc:'Pot made specially for [Alchemists]. Hard , a little bit heavy but safe.',
		icon:[14,8,'magixmod'],
		category:'misc',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0008;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Ink',
		desc:'Can be used in writing. Not drinkable, not tasty.',
		icon:[18,6,'magixmod'],
		category:'misc',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.0008;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Alchemy zone',
		desc:'This part of land will be occupied by [Alchemists] and their seats. Here they brew potions, antidotums and many more.',
		icon:[17,7,'magixmod'],
		category:'main',
		displayUsed:true,
	});
		new G.Res({
		name:'Plaster',
		desc:'Common, basic thing used in [health,First Aid] to prevent infections enter into the wound. They will prevent wound from bleeding too much',
		icon:[16,10,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
	});
		new G.Res({
		name:'Bandage',
		desc:'Common, basic thing used in [health,First Aid] to prevent wounds from bleeding too much mainly.',
		icon:[17,10,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
	});
		new G.Res({
		name:'Triangular bandage',
		desc:'Basic thing used in [health,First Aid] to immobilize arm-wounds. Can be used to bandage other type of wounds.',
		icon:[15,10,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
	});
		new G.Res({
		name:'Cloudy water',
		desc:'Water which cannot spoil in any way (but it still can decay but slower). Gathered from Paradise\'s lakes, ponds, rivers.',
		icon:[11,14,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.004;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		partOf:'water',
		category:'food',
	});
		new G.Res({
		name:'Fruit juice',
		desc:'Fresh, sweet, healthy and tasty juice. Grants less [happiness] and [health] than [Berry juice],[Watermelon juice] and spoils little slower than [Berry juice] & [Watermelon juice].',
		icon:[17,3,'magixmod'],
		category:'food',
		partOf:'Juices',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.02;
			var spent=G.lose('Fruit juice',randomFloor(toSpoil),'decay');
			var n=randomFloor(G.getRes('Fruit juice').amount*0.4);
			G.gain('happiness',randomFloor(spent*0.6),'drinking tasty juice');
			G.gain('health',randomFloor(spent*1.15),'drinking tasty juice');
			if (G.has('Juicy expertise'))
			{
				G.gain('happiness',randomFloor(spent*0.15),'drinking tasty juice');
				G.gain('health',randomFloor(spent*0.23),'drinking tasty juice');
			}
		},
	});
		new G.Res({
		name:'Basic brews',
		desc:'[Basic brews] may be used to craft more advanced potions',
		icon:[6,10,'magixmod'],
		meta:true,
	});
		new G.Res({
		name:'Sweet water pot',
		desc:'Sweet brew. Can be used to craft more advanced brews/potions.',
		icon:[0,10,'magixmod'],
		category:'alchemypotions',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		partOf:'Basic brews',
	});
		new G.Res({
		name:'mundane water pot',
		desc:'Mundane water. Can be used to craft more advanced brews/potions. Tastes a little bit like [muddy water] but it is not poisonous.',
		icon:[1,10,'magixmod'],
		category:'alchemypotions',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		partOf:'Basic brews',
	});
		new G.Res({
		name:'salted water pot',
		desc:'Salted water. Can be used to craft more advanced brews/potions. It is not tasty water, believe me.',
		icon:[2,10,'magixmod'],
		category:'alchemypotions',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		partOf:'Basic brews',
	});
		new G.Res({
		name:'Bubbling water pot',
		desc:'Bubbling water. Can be used to craft more advanced brews/potions. So hot, so do not drink. At least it releases bubbles.',
		icon:[3,10,'magixmod'],
		category:'alchemypotions',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		partOf:'Basic brews',
	});
		new G.Res({
		name:'Alcohol brews',
		desc:'Main reason of [drunk,alcoholism]. But some of alcohol brews will have its use to make other potions.',
		icon:[11,10,'magixmod'],
		meta:true,
	});
		new G.Res({
		name:'Alcohol pot',
		desc:'Can be used to craft [Wine] or [Pot of vodka]. Let\'s not forget about usage to other potions.',
		icon:[7,10,'magixmod'],
		category:'alchemypotions',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		partOf:'Alcohol brews',
	});
		new G.Res({
		name:'Wine',
		desc:'Edible alcohol. Drinking it will increase [happiness] by low rate, but harm [health] at low rate. Can make [drunk] people appear.',
		icon:[8,10,'magixmod'],
		category:'alchemypotions',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		partOf:'Alcohol brews',
	});
		new G.Res({
		name:'Pot of vodka',
		desc:'Dangerous for health alcohol drink. Has bigger chance to make a person become a [drunk] than a [Wine]',
		icon:[10,10,'magixmod'],
		category:'alchemypotions',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		partOf:'Alcohol brews',
	});
		new G.Res({
		name:'Herb syrup',
		desc:'Not so tasty. Made out of healthy [herb,Herbs] , [Flowers,various flowers] . Can heal [sick] and [drunk] person.',
		icon:[5,10,'magixmod'],
		category:'alchemypotions',
		partOf:'Medicament brews',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Essenced herb syrup',
		desc:'A little bit tastier than [Herb syrup]. Made out of healthy [herb,Herbs] , [Flowers,various flowers] with little addition of [Water essence],[Nature essence]. Can heal [sick] and [drunk] person.',
		icon:[9,10,'magixmod'],
		category:'alchemypotions',
		partOf:'Medicament brews',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'Antidotum',
		desc:'Made out of [mundane water pot], tiny amount of [Alcohol pot,Alcohol],[herb,Herbs] and tiny amount of [salt]. This brew is used to heal [drunk] with a bigger chance to succesful heal.',
		icon:[4,10,'magixmod'],
		category:'alchemypotions',
		partOf:'Medicament brews',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
	});
		new G.Res({
		name:'metal weapons',
		desc:'Solid, durable weapons made of metal and wood. One of many parts of soldiers equipment.@Number to the left means how much is now used, to the right how much is in stock.',
		icon:[15,11,'magixmod'],
		displayUsed:true,
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'gear',
	});
		new G.Res({
		name:'armor set',
		desc:'Solid, durable armor set made for soldiers to protect against not every, but common threats like ambush for instance.@Number to the left means how much is now used, to the right how much is in stock.',
		icon:[16,11,'magixmod'],
		displayUsed:true,
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'gear',
	});
		new G.Res({
		name:'vegetable',
		desc:'[vegetable,Vegetables], whether gathered from bushes or any gardens, are both healthy and good for you.',
		icon:[11,11,'magixmod'],
		turnToByContext:{'eating':{'health':0.02,'happiness':0.01},'decay':{'spoiled food':1}},
		partOf:'food',
		category:'food',
	});
		new G.Res({
		name:'Beet',
		desc:'Good source of [sugar] but not as high rates as [Sugar cane] provides. Tasty, edible.',
		icon:[10,11,'magixmod'],
		turnToByContext:{'eating':{'health':0.1,'happiness':0.005},'decay':{'spoiled food':1}},
		partOf:'food',
		category:'food',
	});
		new G.Res({
		name:'Beet seeds',
		desc:'If you want to start farming [Beet] and crafting [sugar] these seeds are a must.',
		icon:[6,11,'magixmod'],
		partOf:'misc materials',
		category:'misc',
	});
		new G.Res({
		name:'Medicament brews',
		desc:'A brews used to heal people from sickness.',
		icon:[12,10,'magixmod'],
		meta:true,
	});
		new G.Res({
		name:'Granite',
		desc:'One of few types of stone. Is harder to find than regular [stone].',
		icon:[5,12,'magixmod'],
		category:'build',
		partOf:'archaic building materials',
	});
		new G.Res({
		name:'Diorite',
		desc:'One of few types of stone. Is harder to find than regular [stone].',
		icon:[7,12,'magixmod'],
		category:'build',
		partOf:'archaic building materials',
	});
		new G.Res({
		name:'Andesite',
		desc:'One of few types of stone. Is harder to find than regular [stone].',
		icon:[6,12,'magixmod'],
		category:'build',
		partOf:'archaic building materials',
	});
		new G.Res({
		name:'cut granite',
		desc:'[Granite] carved into blocks for easier hauling and building.',
		icon:[4,12,'magixmod'],
		partOf:'basic building materials',
		category:'build',
	});
		new G.Res({
		name:'cut diorite',
		desc:'[Diorite] carved into blocks for easier hauling and building.',
		icon:[3,12,'magixmod'],
		partOf:'basic building materials',
		category:'build',
	});
		new G.Res({
		name:'cut andesite',
		desc:'[Andesite] carved into blocks for easier hauling and building.',
		icon:[2,12,'magixmod'],
		partOf:'basic building materials',
		category:'build',
	});
		new G.Res({
		name:'nickel ore',
		desc:'[nickel ore,Nickel] can be found with better prospecting. May be processed into [hard metal ingot].',
		icon:[9,12,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'build',
	});
		new G.Res({
		name:'platinum ore',
		desc:'[platinum ore,Platinum] can be found with better prospecting and only with small chance by [quarry] and only that unit. May be processed into [precious metal ingot].',
		icon:[8,12,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'build',
	});
		new G.Res({
		name:'platinum ingot',
		desc:'[platinum ingot,Platinum ingot] is used to craft precious items, building materials and more.',
		icon:[3,11,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'build',
	});
		new G.Res({
		name:'platinum block',
		desc:'A valuable, if unreliable construction material. Made from [platinum ingot]. Has same uses as [gold block] or [gem block].',
		icon:[4,11,'magixmod'],
		partOf:'precious building materials',
		category:'build',
	});
		new G.Res({
		name:'Paper',
		desc:'Describes amount of all paper types you have currently in total.',
		icon:[14,12,'magixmod'],
		meta:true,
	});
		new G.Res({
		name:'papyrus',
		desc:'Paper made out of [Sugar cane]. Better than stone carving.',
		icon:[15,12,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
		partOf:'Paper',
	});
		new G.Res({
		name:'pergamin',
		desc:'Paper made out of [hide] or [leather].',
		icon:[16,12,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
		partOf:'Paper',
	});
		new G.Res({
		name:'common paper',
		desc:'Paper made out of [Bamboo]. In later stages you may craft this paper out of [log].',
		icon:[17,12,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
		partOf:'Paper',
	});
		new G.Res({
		name:'Bone dust',
		desc:'Made with knapping in bone. Ingredient used to make strenghtening brews or brews of revenant.',
		icon:[18,11,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'alchemyingredients',
	});
		new G.Res({
		name:'Enchanted ice',
		desc:'Effect of [Mana] + [ice] + [Wind essence]. Used into resistant potions.',
		icon:[17,11,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'alchemyingredients',
	});
		new G.Res({
		name:'Flowered sugar',
		desc:'[sugar] + [Flowers] . Additive ingredient for other potions.',
		icon:[18,10,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'alchemyingredients',
	});
		new G.Res({
		name:'Dark fire pit',
		desc:'[fire pit] + [Dark essence] . Used to craft bunch of Dark Potions. Warms up still but does not provide light.',//Coming very very soon types of potions
		icon:[20,12,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'alchemyingredients',
	});
		new G.Res({
		name:'Withering salt',
		desc:'[salt] + [Dark essence] . Part of few Dark Potions. Do not use it for meals, kills people from inside very quickly',
		icon:[20,10,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'alchemyingredients',
	});
		new G.Res({
		name:'Herb of the undead',
		desc:'[herb] + [Dark essence] + [fruit] . Used to be one of ingredients of the Defense Dark Potions. Weakens deadly power of [Dark essence], does not weaken potions effect',//Coming very very soon types of potions
		icon:[20,11,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'alchemyingredients',
	});
		new G.Res({
		name:'Scobs of life',
		desc:'[Scobs] + [Nature essence] + [water] + [Mana] . Used in Nature Combat Potions. One of strongest and most allergic for undead ingredient.',
		icon:[17,13,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'alchemyingredients',
	});
		new G.Res({
		name:'Grass of growing',
		desc:'[herb] + [Mana] + [Nature essence] . Used in Nature Defense Potions. This grass can be friend of soldiers. Can be used to craft only one potion which will overgrow person who drank it and will work as green, natural camouphlage.',
		icon:[16,13,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'alchemyingredients',
	});
		new G.Res({
		name:'Windy sugar',
		desc:'[sugar] + [Mana] + [Wind essence] . Used in combat. Sweet, tasty but unstable(moves, swirls, levitates over time)',
		icon:[14,13,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'alchemyingredients',
	});
		new G.Res({
		name:'Paradise emblem',
		desc:'A thing you will get after activating a Paradise portal. Needed to unlock further researching. A pass for further things and more adventures. You can obtain only one Emblem of this type. <b>@God called you to his world... But God\'s paradise has rules that you & your people must follow or Paradise will be closed for you and your people... so in fact your adventure has not ended yet even after adventure in Plain Island. Good luck.<b>',
		icon:[20,9,'magixmod'],
		startWith:0,
		tick:function(me,tick)
		{
			if (me.amount>=1){ 
				G.Message({type:'good',text:'<b>You and your people activated passage to Paradise. Out of portal an Emblem fall and hit next to your feet. Big golden portal shines and you can see what is beyond it. You come through and notice there is perfect heat to live. Now it is time for more discoveries.</b>',icon:[8,4,'magixmod']});
			}
		},	
		category:'main',
	});
		new G.Res({
		name:'Magic essences',
		desc:'This is how many you have all <b>Essences</b> in total currently.',
		icon:[20,13,'magixmod'],
		meta:true,
	});
//Currency
		new G.Res({
		name:'Industry point',
		desc:'You can use these points to set up some industry in new world. @using 90% of all points in total may make God mad.',
		icon:[0,14,'magixmod'],
		displayUsed:true,
		category:'main',
	});
		new G.Res({
		name:'Worship point',
		desc:'You can use these points to decide which seraphin will be worshipped.',//Seraphins won't be added quickly it may be January /February 2020 when you will be able to see them for the first time
		icon:[1,14,'magixmod'],
		displayUsed:true,
		category:'main',
	});
//Essence limits which can be increased by buying storages for essences
		new G.Res({
		name:'fire essence limit',
		desc:'The bigger limit the more essence.',
		icon:[0,2,'magixmod'],
		hidden:true,
		category:'main',
	});
		new G.Res({
		name:'water essence limit',
		desc:'The bigger limit the more essence.',
		icon:[0,1,'magixmod'],
		category:'main',
		hidden:true,
	});
		new G.Res({
		name:'lightning essence limit',
		desc:'The bigger limit the more essence.',
		icon:[0,3,'magixmod'],
		category:'main',
		hidden:true,
	});
		new G.Res({
		name:'wind essence limit',
		desc:'The bigger limit the more essence.',
		icon:[1,1,'magixmod'],
		category:'main',
		hidden:true,
	});
		new G.Res({
		name:'nature essence limit',
		desc:'The bigger limit the more essence.',
		icon:[1,2,'magixmod'],
		hidden:true,
		category:'main',
	});
		new G.Res({
		name:'dark essence limit',
		desc:'The bigger limit the more essence.',
		icon:[1,3,'magixmod'],
		hidden:true,
		category:'main',
	});
		new G.Res({
		name:'mana capacity',
		desc:'The bigger limit the more mana can be stored.',
		icon:[2,3,'magixmod'],
		hidden:true,
		category:'main',
	});
		new G.Res({
		name:'holy essence limit',
		desc:'The bigger limit the more essence can be stored.',
		icon:[20,6,'magixmod'],
		hidden:true,
		category:'main',
	});
//New content
		new G.Res({
		name:'Florist\'s notes',
		desc:'Notes where [Florist] said about its discoveries and tips for future [Florist,florists] .',
		icon:[21,3,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
		hidden:true,
	});
		new G.Res({
		name:'Wizard\'s notes',
		desc:'Notes where [Wizard] / [Archaic wizard] said about its discoveries and basic spells. Some philosophy you can find there too.',
		icon:[21,2,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
		hidden:true,
	});
		new G.Res({
		name:'Poet\'s notes',
		desc:'Text which was written by [Poet] . May summon some cultural traits.',
		icon:[21,1,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
		hidden:true,
	});
		new G.Res({
		name:'Lawyer\'s notes',
		desc:'The code of law.',
		icon:[21,1,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
		hidden:true,
	});
		new G.Res({
		name:'Empty book',
		desc:'The book which can be filled by knowledge of people , instructions and many , many more.',
		icon:[13,12,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
	});
//Types of books
		new G.Res({
		name:'nature book',
		desc:'The book written by writers with help of [Florist]\'s notes.',
		icon:[2,13,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.003;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
	});
		new G.Res({
		name:'spellbook',
		desc:'The book written by writers with help of [Wizard]\'s notes.',
		icon:[3,13,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.003;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
	});
		new G.Res({
		name:'novel',
		desc:'The book written by writers with help of [Poet]\'s  beautiful notes.',
		icon:[1,13,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.003;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
	});
		new G.Res({
		name:'Book of law',
		desc:'The book written with help of [Lawyer]\'s thoughts contained in his own notes.',
		icon:[0,13,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.003;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
	});
		new G.Res({
		name:'Ambrosium leaf',
		desc:'Thing which can be used to gather [Ambrosium shard]s with help of some other ingredients.',
		icon:[12,14,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.003;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
		hidden:true
	});
		new G.Res({
		name:'Ambrosium shard',
		desc:'People call it merged and hardened [Ambrosium leaf,Ambrosium leaves] . These shinies probably will have their own use.',
		icon:[14,14,'magixmod'],
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.003;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'misc',
	});
//But books has to be stored somewhere right?
	new G.Res({
		name:'food storage',
		desc:'Each [food storage] unit slows down decay for one [food] unit.//The number on the left is how much food storage is occupied, while the number on the right is how much you have in total.',
		icon:[12,5],
		tick:function(me,tick)
		{
			var amount=0;
			amount+=G.getRes('basket').amount*10;
			amount+=G.getRes('pot').amount*25;
			amount+=G.getRes('ice').amount;
			amount+=G.getRes('added food storage').amount;
			me.amount=amount;
		},
		getDisplayAmount:function()
		{
			return B(Math.min(this.displayedAmount,G.getRes('food').displayedAmount))+'<wbr>/'+B(this.displayedAmount);
		},
	});
		G.getDict('grass').res['gather']['vegetable']=0.001;
		G.getDict('palm tree').res['gather']['Bamboo']=0.0000035;
		G.getDict('jungle fruits').res['gather']['Watermelon']=0.00004;
		G.getDict('freshwater').res['gather']['Sugar cane']=0.000000004;
		G.getDict('rocky substrate').res['mine']['Granite']=0.075;
		G.getDict('rocky substrate').res['mine']['Diorite']=0.075;
		G.getDict('rocky substrate').res['mine']['Andesite']=0.075;
		G.getDict('rocky substrate').res['quarry']['cut granite']=0.07;
		G.getDict('rocky substrate').res['quarry']['cut diorite']=0.07;
		G.getDict('rocky substrate').res['quarry']['cut andesite']=0.07;
		G.getDict('rocky substrate').res['mine']['nickel ore']=0.03;
		G.getDict('rocky substrate').res['quarry']['platinum ore']=0.00001;//test
	//To make game not crash by precious pots i had to add it
		new G.Res({
		name:'food storage debug pots',
		desc:'debug for precious pots.',
		partOf:'food storage',
		icon:[0,0,'magixmod'],
		hidden:true,
		tick:function(me,tick)
		{
			var amount=0;
			amount+=G.getRes('Precious pot').amount*27;
			amount+=G.getRes('added food storage').amount;
			me.amount=amount;
		},
	});
		new G.Res({
		name:'material storage debug',
		desc:'debug for spell of capacity.',
		partOf:'material storage',
		icon:[0,0,'magixmod'],
		hidden:true,
	});
//New types of people
		new G.Res({
		name:'Instructor',
		desc:'Instructor can teach people any thing. Can teach alchemy or many other. If he will become [elder], he will retire.//The number on the left is how many are currently being employed, while the number on the right is your total amount of instructors.',
		icon:[12,6,'magixmod'],
		partOf:'population',
		category:'demog',
		displayUsed:true,
		tick:function(me,tick)
		{
			var n=randomFloor(G.getRes('Instructor').amount*0.0002);G.gain('elder',n,'aging up');G.lose('Instructor',n,'aging up');	
		},
	});
		new G.Res({
		name:'Alchemists',//There is something more :)
		desc:'This stat shows all alchemists you currently have in total(children + adult alchemists).//The number on the left is how many are currently being employed, while the number on the right is your total amount of alchemists.',
		icon:[12,8,'magixmod'],
		partOf:'population',
		meta:true,
		tick:function(me,tick)
		{
			//this.displayName=G.getName('inhabs');
			
			if (me.amount>0)
			{
				//note : we also sneak in some stuff unrelated to population here

				if (tick%50==0)
				{
					var rituals=['harvest rituals for flowers'];
					for (var i in rituals)
					{
						if (G.checkPolicy(rituals[i])=='on')
						{
							if (G.getRes('faith').amount<=0) G.setPolicyModeByName(rituals[i],'off');
							else G.lose('faith',1,'rituals');
							if (G.getRes('influence').amount<=0) G.setPolicyModeByName(rituals[i],'off');
							else G.lose('influence',1,'rituals');
						}
					}
				}
				if (tick%50==0)
				{
					var rituals=['Crafting & farm rituals'];
					for (var i in rituals)
					{
						if (G.checkPolicy(rituals[i])=='on')
						{
							if (G.getRes('faith').amount<=0) G.setPolicyModeByName(rituals[i],'off');
							else G.lose('faith',15,'rituals');
							if (G.getRes('influence').amount<=0) G.setPolicyModeByName(rituals[i],'off');
							else G.lose('influence',15,'rituals');
						}
					}
				}
				
				var productionMult=G.doFunc('production multiplier',1);
				
				var deathUnhappinessMult=1;
				if (G.has('fear of death')) deathUnhappinessMult*=2;
				if (G.has('belief in the afterlife')) deathUnhappinessMult/=2;
				if (tick%3==0 && G.checkPolicy('disable eating')=='off')
				{
					//drink water
					var toConsume=0;
					var weights={'Child alchemist':0.3,'Alchemist':0.5,'Instructor':0.5,'drunk':0.4};
					for (var i in weights)
					{toConsume+=G.getRes(i).amount*weights[i];}
					var rations=G.checkPolicy('water rations');
					if (rations=='none') {toConsume=0;G.gain('happiness',-me.amount*3,'water rations');G.gain('health',-me.amount*2,'water rations');}
					else if (rations=='meager') {toConsume*=0.5;G.gain('happiness',-me.amount*1,'water rations');G.gain('health',-me.amount*0.5,'water rations')}
					else if (rations=='plentiful') {toConsume*=1.5;G.gain('happiness',me.amount*1,'water rations');}
					toConsume=randomFloor(toConsume);
					var lacking=toConsume-G.lose('water',toConsume,'drinking');
					if (rations=='none') lacking=me.amount*0.5;
					if (lacking>0)//are we out of water?
					{
						//resort to muddy water
						if (rations!='none' && G.checkPolicy('drink muddy water')=='on') lacking=lacking-G.lose('muddy water',lacking,'drinking');
						if (lacking>0 && G.checkPolicy('disable aging')=='off')//are we also out of muddy water?
						{
							G.gain('happiness',-lacking*5,'no water');
							//die off
							var toDie=(lacking/5)*0.05;
							if (G.year<1) toDie/=5;//less deaths in the first year
							var died=0;
							var weights={'Child alchemist':0.2,'Alchemist':0.5,'Instructor':0.5};//the elderly are the first to starve off
							var sum=0;for (var i in weights){sum+=weights[i];}for (var i in weights){weights[i]/=sum;}//normalize
							for (var i in weights){var ratio=(G.getRes(i).amount/me.amount);weights[i]=ratio+(1-ratio)*weights[i];}
							for (var i in weights)
							{var n=G.lose(i,randomFloor((Math.random()*0.8+0.2)*toDie*weights[i]),'dehydration');died+=n;}
							G.gain('corpse',died,'dehydration');
							G.gain('happiness',-died*20*deathUnhappinessMult,'dehydration');
							G.getRes('died this year').amount+=died;
							if (died>0) G.Message({type:'bad',mergeId:'diedDehydration',textFunc:function(args){return B(args.died)+' '+(args.died==1?'person':'people')+' died from dehydration.';},args:{died:died},icon:[5,4]});
						}
					}
					
					//eat food
					var toConsume=0;
					var consumeMult=1;
					var happinessAdd=0;
					if (G.has('culture of moderation')) {consumeMult*=0.85;happinessAdd-=0.1;}
					else if (G.has('joy of eating')) {consumeMult*=1.15;happinessAdd+=0.1;}
					var weights={'Child alchemist':0.5,'Alchemist':1,'Instructor':1};
					for (var i in weights)
					{toConsume+=G.getRes(i).amount*weights[i];}
					var rations=G.checkPolicy('food rations');
					if (rations=='none') {toConsume=0;G.gain('happiness',-me.amount*3,'food rations');G.gain('health',-me.amount*2,'food rations');}
					else if (rations=='meager') {toConsume*=0.5;G.gain('happiness',-me.amount*1,'food rations');G.gain('health',-me.amount*0.5,'food rations');}
					else if (rations=='plentiful') {toConsume*=1.5;G.gain('happiness',me.amount*1,'food rations');}
					toConsume=randomFloor(toConsume*consumeMult);
					var consumed=G.lose('food',toConsume,'eating');
					G.gain('happiness',G.lose('salt',randomFloor(consumed*0.1),'eating')*5,'salting food');//use salt
					G.gain('happiness',consumed*happinessAdd,'food culture');
					var lacking=toConsume-consumed;
					if (rations=='none') lacking=me.amount*1;
					
					if (lacking>0)//are we out of food?
					{
						//resort to spoiled food
						if (rations!='none' && G.checkPolicy('eat spoiled food')=='on') lacking=lacking-G.lose('spoiled food',lacking,'eating');
						if (lacking>0 && G.checkPolicy('disable aging')=='off')//are we also out of spoiled food?
						{
							G.gain('happiness',-lacking*5,'no food');
							//die off
							var toDie=(lacking/5)*0.05;
							if (G.year<1) toDie/=5;//less deaths in the first year
							var died=0;
							var weights={'Child alchemist':0.2,'Alchemist':0.5,'Instructor':0.5,'drunk':0.4};//the elderly are the first to starve off
							var sum=0;for (var i in weights){sum+=weights[i];}for (var i in weights){weights[i]/=sum;}//normalize
							for (var i in weights){var ratio=(G.getRes(i).amount/me.amount);weights[i]=ratio+(1-ratio)*weights[i];}
							for (var i in weights)
							{var n=G.lose(i,randomFloor((Math.random()*0.8+0.2)*toDie*weights[i]),'starvation');died+=n;}
							G.gain('corpse',died,'starvation');
							G.gain('happiness',-died*20*deathUnhappinessMult,'starvation');
							G.getRes('died this year').amount+=died;
							if (died>0) G.Message({type:'bad',mergeId:'diedStarvation',textFunc:function(args){return B(args.died)+' '+(args.died==1?'person':'people')+' died from starvation.';},args:{died:died},icon:[5,4]});
						}
					}
				}
				
				//clothing
				var objects={'basic clothes':[0.1,0.1],'primitive clothes':[0,0],'Colored clothing':[0.1,0.1]};
				var leftout=me.amount;
				var prev=leftout;
				var fulfilled=0;
				for (var i in objects)
				{
					fulfilled=Math.min(me.amount,Math.min(G.getRes(i).amount,leftout));
					G.gain('happiness',fulfilled*objects[i][0],'clothing');
					G.gain('health',fulfilled*objects[i][1],'clothing');
					leftout-=fulfilled;
				}
				G.gain('happiness',-leftout*0.15,'no clothing');
				G.gain('health',-leftout*0.15,'no clothing');
				
				//fire
				var objects={'fire pit':[10,0.1,0.1]};
				var leftout=me.amount;
				var prev=leftout;
				var fulfilled=0;
				for (var i in objects)
				{
					fulfilled=Math.min(me.amount,Math.min(G.getRes(i).amount*objects[i][0],leftout));
					G.gain('happiness',fulfilled*objects[i][1],'warmth & light');
					G.gain('health',fulfilled*objects[i][2],'warmth & light');
					leftout-=fulfilled;
				}
				G.gain('happiness',-leftout*0.1,'cold & darkness');
				G.gain('health',-leftout*0.1,'cold & darkness');
			}
		}
	});
		new G.Res({
		name:'Alchemist',
		desc:'Adult alchemist. Can be hired to special category of jobs same as his younger version. While he will at [elder] age he will retire.//The number on the left is how many are currently being employed, while the number on the right is your total amount of adult alchemists.',
		icon:[12,5,'magixmod'],
		partOf:'Alchemists',
		displayUsed:true,
		tick:function(me,tick)
		{
			var n=randomFloor(G.getRes('Alchemist').amount*0.0002);G.gain('elder',n,'aging up');G.lose('Alchemist',n,'aging up');
		},
		category:'demog',
	});
		new G.Res({
		name:'Child alchemist',
		desc:'Younger alchemist. Can be hired to special category of jobs but chance for accidents will grow. Soon he will grow to [Alchemist].//The number on the left is how many are currently being employed, while the number on the right is your total amount of child alchemists.',
		icon:[12,7,'magixmod'],
		partOf:'Alchemists',
		displayUsed:true,
		tick:function(me,tick)
		{
			var n=randomFloor(G.getRes('Child alchemist').amount*0.002);G.gain('Alchemist',n,'aging up');G.lose('Child alchemist',n,'aging up');
		},
		category:'demog',
	});
		new G.Res({
		name:'drunk',
		desc:'[adult,People] may get [drunk] due to drinking too much alcohol brews. They do not [worker,work], but may slowly get better over time. Common healer cannot aid with it. Unhealed by any (except) default [healer] alcohol sickness will lead [drunk,drunken] people to death. ',
		partOf:'population',
		icon:[17,0,'magixmod'],
		tick:function(me,tick)
		{
			var n=randomFloor(G.getRes('Wine').amount*0.009);G.gain('drunk',n,'alcohol drinking');G.lose('adult',n,'alcohol drinking');G.lose('Wine',n,'drinking');
			if (n>0) G.Message({type:'bad',mergeId:'fellDrunk',textFunc:function(args){return B(args.n)+' '+(args.n==1?'person':'people')+' fell drunk.';},args:{n},icon:[17,0,'magixmod']});
			var drunkHealing=0.01;
			if (G.checkPolicy('flower rituals')=='on') drunkHealing*=1.2;
			var changed=0;
			var n=G.lose('drunk',randomFloor(Math.random()*G.getRes('drunk').amount*drunkHealing),'healing');G.gain('adult',n,'-');changed+=n;
			G.gain('happiness',changed*10,'recovery');
			if (changed>0) G.Message({type:'good',mergeId:'drunkRecovered',textFunc:function(args){return B(args.n)+' drunk '+(args.n==1?'person':'people')+' got better.';},args:{n:changed},icon:[4,3]});
			//Drunk's death
			var drunkMortality=0.005;
			var changed=0;
			var n=G.lose('drunk',randomFloor(Math.random()*G.getRes('drunk').amount*drunkMortality),'drunk');G.gain('corpse',n,'alcohol sickness');changed+=n;
			G.getRes('died this year').amount+=changed;
			if (changed>0) G.Message({type:'bad',mergeId:'diedDrunk',textFunc:function(args){return B(args.n)+' '+(args.n==1?'person':'people')+' died from alcohol sickness.';},args:{n:changed},icon:[5,4]});
		},
		category:'demog',
	});
		new G.Res({
		name:'wild corpse',//InDevelopment
		desc:'Effect of [Revenants] trait. Dangerous for common, alive people will kill them, so think about hiring soldiers. ',
		partOf:'population',
		icon:[19,11,'magixmod'],
	});
//FLOWERS!,DYES!
		new G.Res({
		name:'Flowers',
		desc:'This defines the amount of flowers, which you have currently in total.',
		icon:[11,8,'magixmod'],
		partOf:'misc materials',
		meta:true,
		visible:false,
	});
		new G.Res({
		name:'Dyes',
		desc:'This defines the amount of dyes crafted out of flowers, which you have currently in total.',
		icon:[11,7,'magixmod'],
		partOf:'misc materials',
		meta:true,
		visible:false,
	});//1
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
	});//2
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
	});//3
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
	});//4
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
	});//5
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
	});//6
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
	});//7
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
	});//8
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
	});//9
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
	});//10
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
	});//11
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
	});//12
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
	});//13
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
	});//14
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
	});//15
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
	});//16
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
	});//17
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
	});//18
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
	});//19
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
	});//20
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
	});//21
		new G.Res({
		name:'Sunflower',
		desc:'From this flower except yellow dye you can gain edible seeds.',
		icon:[6,8,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});//22
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
	});//23
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
	});//24
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
	});//25
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
	});//26
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
	});//27
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
	});//28
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
	});//29
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
	});//30
		new G.Res({
		name:'Gray rose',
		desc:'One of few versions of roses. As the other roses they fit perfectly for proposal.',
		icon:[11,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});//31
		new G.Res({
		name:'Gray tulip',
		desc:'One of few versions of tulips. As the other tulips they fit perfectly for proposal.',
		icon:[10,9,'magixmod'],
		partOf:'Flowers',
		tick:function(me,tick)
		{
			var toSpoil=me.amount*0.01;
			var spent=G.lose(me.name,randomFloor(toSpoil),'decay');
		},
		category:'flowersanddyes',
	});//32
		new G.Res({
		name:'Brown flower',
		desc:'Just a brown flower.',
		icon:[9,7,'magixmod'],
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
		new G.Trait({
		name:'Will to know more',
		desc:'@After opening a portal to Plain Island people started to become more curious. @Curiosity has gotten even stronger with this trait',
		icon:[8,12,8,5],
		cost:{'culture':5,'wisdom':25},
		chance:3,
		category:'knowledge',
		req:{'Plain island building':true},
	});
		new G.Trait({
		name:'Juicy expertise',
		desc:'After few years since you started crafting [Juices] you noticed your people make most <b>tasty juice<b> ever you drank. Since gaining this trait you\'ll get these bonuses: @Happiness caused by drinking juices boosted by 25%. @Health given by drinking juices boosted by 25%. @Due to these bonuses [Juices] will now need little bit more ingredients to craft. @[artisan of juice] has a small chance to craft 1 additional [Juices,juice].',
		icon:[16,5,'magixmod'],
		cost:{'Juices':6.5e3,'wisdom':25,'insight':30},
		chance:6,//experimental
		category:'knowledge',
		req:{'Crafting a juice':true},
	});
		new G.Trait({
		name:'Nutrition',
		desc:'Your dreamers were thinking once how to make eating more healthy. Then they shard its thoughts. Surprisingly they were right. People got healthier, feel better. @This trait makes [healer] generate health. People won\'t eat even more food so do not worry.',
		icon:[16,7,'magixmod'],
		cost:{'culture':150,'wisdom':25,'insight':100,'influence':10},
		chance:120,//experimental
		req:{'joy of eating':true,'Crafting a juice':true},
	});
		new G.Trait({
		name:'More healing ways',
		desc:'Since moment you got able to hire [healer] your dreamers started thinking how to boost healing and decrease amount of failed healing attempts. @This trait unlocks you [first aid], which will be obtainable in later stage of legacy.',
		icon:[8,12,3,5],
		cost:{'insight':50},
		chance:120,
		category:'knowledge',
		req:{'healing':true,'Will to know more':true},
	});
		new G.Trait({
		name:'Revenants',//InDevelopment
		desc:'The dark powers got mad that your people are using [corpse,corpses] as a toy or ritual thing. Since now some of them will come back to live but they will behave like zombie. Do not worry they won\'t replicate. You will need to defend your people against them. Each one will harm your [happiness] and kill your [population,people]. ',
		icon:[19,0,'magixmod'],
		cost:{'insight':50,'corpse':500},
		chance:500,
		category:'long',
		req:{'belief in revenants':true,'ritual necrophagy':true},
	});
		new G.Trait({
		name:'culture of the afterlife',
		desc:'<b>Believements have turned into the culture. People will now try to be closer to gods or god they worship, Who knows if they will build another wonder</b>. @unhappiness from death is halved. ',
		icon:[19,1,'magixmod'],
		cost:{'insight':50,'culture':200,'inspiration':20,'authority':20,'spirituality':30,'faith':40},
		chance:500,
		req:{'belief in the afterlife':true},
		tick:function(me,tick)
		{
			if (G.has('culture of the afterlife')) deathUnhappinessMult/=2;
		},
	});
		new G.Trait({
		name:'The God\'s call',
		desc:'<b>The god... he called your people... to his world... full of hopes... full of new adventures... to... his... Paradise...',
		icon:[20,2,'magixmod'],
		cost:{'insight':650,'culture':200,'inspiration':20,'authority':20,'spirituality':30,'faith':40},
		chance:175,
		req:{'culture of the afterlife':true},
	});
		new G.Trait({
		name:'Moderated politics',
		desc:'Makes politics more moderated. It may boost happiness of people and with same power make it drop down.',//Next update: something which will require this trait
		icon:[8,13,'magixmod'],
		cost:{},
		chance:175,
		req:{'culture of moderation':true},
	});
		new G.Trait({
		name:'Land acknowledge',
		desc:'Your people will easier acknowledge with any new lands thanks to Paradise exploration. This trait does not add any bonuses.',
		icon:[21,10,'magixmod'],
		cost:{},
		chance:100,
		req:{'Second portal to new world':true},
	});
		new G.Trait({
		name:'God\'s trait #1 Housing',
		desc:'Less capable construction obtains small housing bonus with that trait. <b>Bonuses:</b> @[hovel] +1 [housing] every 2 [hovel]s , @[hut] , [bamboo hut] + 1 [housing] to every [hut] & [bamboo hut] same with [branch shelter] , [mud shelter]',
		icon:[21,14,'magixmod'],
		cost:{},
		chance:275,
		req:{'The God\'s call':true,'7th essence':true},
		category:'gods',
	});
		new G.Trait({
		name:'God\'s trait #2 Berry rush',
		desc:'[Berry farm,Berry farms] are 8x as efficient so they gather 8 times as much [Berries]',
		icon:[21,13,'magixmod'],
		cost:{},
		chance:275,
		req:{'The God\'s call':true,'7th essence':true},
		category:'gods',
	});
		new G.Trait({
		name:'God\'s trait #3 Science^2',
		desc:'You can hire a [Guru] who will gather [insight] & [science].',
		icon:[21,12,'magixmod'],
		cost:{},
		chance:275,
		req:{'The God\'s call':true,'7th essence':true},
		category:'gods',
	});
//Then we add a new technology for wizards:
	new G.Tech({
		name:'Wizardry',
		desc:'@unlocks [Archaic wizard] .Here wizardry and essences will start to appear. Essences are not naturally generated so they consume mana to be made.',
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
		desc:'Evolves up [Archaic wizard] into [Wizard] . New one may gain wisdom.',
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
		name:'churches',
		desc:'Will generate milennialy some [spirituality]. Generates some faith at the lower rate than [soothsayer]. ',
		icon:[7,2,'magixmod'], //WIP
		cost:{'insight':95},
		req:{'Wizardry':true,'Wizard wisdom':true},
	});
		new G.Tech({
		name:'Essence storages',
		desc:'Essence has to be stored somewhere. So do not wait and build!',
		icon:[5,0,'magixmod'], //WIP
		cost:{'insight':100,'Mana':317,'faith':8,'Wand':260},
		effects:[
			{type:'provide res',what:{'fire essence limit':1}},
			{type:'provide res',what:{'water essence limit':1}},
			{type:'provide res',what:{'lightning essence limit':1}},
			{type:'provide res',what:{'dark essence limit':1}},
			{type:'provide res',what:{'wind essence limit':1}},
			{type:'provide res',what:{'nature essence limit':1}},
		],
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
		cost:{'insight':4,'Plain Island emblem':1},
		req:{'Plain island portal':true},
	});
		new G.Tech({
		name:'construction II',
		desc:'Allows your people to build [Blockhouse] out of [advanced building materials]. Provides much more housing but it is limited to prevent global warmings etc.',
		icon:[8,1,'magixmod'], 
		cost:{'insight':65},
		req:{'Plain island portal':true,'Plain island building':true,'Plain island building':true},
	});
		new G.Tech({
		name:'Burial in new world',
		desc:'Provides even better use of the Plain Island. You may build now few cemetries which consume much more [Land of the Plain Island], but they can store more corpses.',
		icon:[1,6,'magixmod'], 
		cost:{'insight':65},
		req:{'Plain island portal':true,'Plain island building':true},
	});
		new G.Tech({
		name:'Sewing II',
		desc:'Upgrades sewing skills of your civilization. @Unlocks <b>Drying racks<b> to make [Dried leather] used to craft better quality clothing. @Now artisans can sew [Fishing net] and craft [Thread].',
		icon:[13,5,'magixmod'], 
		cost:{'insight':360,'wisdom':10},
		req:{'Wizardry':true,'sewing':true,},
	});
		new G.Tech({
		name:'Hunting II',
		desc:'Upgrades hunting skills of your civilization. @Unlocks way to craft [Crossbow] - new weapon. Artisans can now craft [bow] & [Crossbow] and [Crossbow belt] in <b>Craft bows<b> mode.',
		icon:[15,0,'magixmod'], 
		cost:{'insight':330,'wisdom':10},
		req:{'Wizardry':true,'hunting':true,},
	});
		new G.Tech({
		name:'Fishing II',
		desc:'Upgrades fishing skills of your civilization. @Makes [Fishing net] introduced into common use.',
		icon:[8,12,25,1], 
		cost:{'insight':350,'wisdom':10},
		req:{'Wizardry':true,'fishing':true,},
	});
		new G.Tech({
		name:'Cobalt-working',
		desc:'@[furnace]s can now make [Cobalt ingot]s from [Cobalt ore]<>',
		icon:[16,0,'magixmod'],
		cost:{'insight':145},
		req:{'smelting':true,'construction II':true},
	});
		new G.Tech({
		name:'Farms in the new land',
		desc:'@Now at the Lands of Plain island you may start opening farms to let your people make more [Berries] & [Watermelon]. You are doing it here because you may have trouble to find free land in your mortal world.<>',
		icon:[16,2,'magixmod'],
		cost:{'insight':550},
		req:{'construction II':true},
	});
		new G.Tech({
		name:'Crafting a juice',
		desc:'@Makes juices possible to be crafted. Any [fruit] + [sugar] + [water] = [Juices]. Be careful. Juices may spoil same like normal water. Spoiled juice grants even more <b>unhappiness and unhealth<b> than normal muddy water.<>',
		icon:[16,4,'magixmod'],
		cost:{'insight':495,'wisdom':50},
		req:{'Farms in the new land':true},
	});
		new G.Tech({
		name:'Farm of the Sugar cane',
		desc:'@Makes [Sugar cane] farm possible to be built. This farm will have increased upkeep cost and will need more people to run.<>',
		icon:[15,7,'magixmod'],
		cost:{'insight':495,'wisdom':50},
		req:{'Farms in the new land':true},
	});
		new G.Tech({
		name:'Precious pottery',
		desc:'@Improves pottery in your civilization. Now [pot] can become harder and more beautiful. Can make pots specialized for potions.<>',
		icon:[16,8,'magixmod'],
		cost:{'insight':650,'wisdom':60},
		req:{'construction II':true},
	});
		new G.Tech({
		name:'Beginnings of alchemy',
		desc:'@Now you may start new adventure with... potions... You need to be expert at juices before you start alchemy.<>',
		icon:[16,9,'magixmod'],
		cost:{'insight':650,'wisdom':60},
		req:{'Juicy expertise':true,'Intermediate maths':true,'Proportion':true},
	});
		new G.Tech({
		name:'Terrain conservacy',
		desc:'@Unlocks subclass of [architect] which instead of setting up new houses etc. will set up some part of ground due to requirements of job group, for example [Alchemists]. Their stands and their "toys" will use [Alchemy zone] instead of [land]  <>',
		icon:[17,5,'magixmod',24,1],
		cost:{'insight':850,'wisdom':60},
		req:{'Beginnings of alchemy':true,'Intermediate maths':true,'Proportion':true},
	});
		new G.Tech({
		name:'first aid',
		desc:'@[sick],[wounded] will have bigger chance to get recovered. Obtaining this research will unlock better healers for you. <b>This research generates [health] by [healer] at low rate but it does.<>',
		icon:[15,9,'magixmod'],
		cost:{'insight':680,'wisdom':60},
		effects:[
			{type:'gather',what:{'health':0.05}},
		],
		req:{'More healing ways':true},
	});
		new G.Tech({
		name:'Basic maths',
		desc:'@people will know basic math making them more intelligent and have chance to be good at more advanced technologies.<>',
		icon:[17,1,'magixmod'],
		cost:{'insight':20},
		effects:[
			{type:'provide res',what:{'education':0.4}},
		],
		req:{'oral tradition':true},
	});
		new G.Tech({
		name:'Intermediate maths',
		desc:'@people will know more harder and advanced math making them even more intelligent and smart. @Your people have bigger chances to understand more advanced things.<>',
		icon:[17,2,'magixmod'],
		cost:{'insight':80},
		effects:[
			{type:'provide res',what:{'education':2}},
		],
		req:{'oral tradition':true,'Basic maths':true,'city planning':true},
	});
		new G.Tech({
		name:'Proportion',
		desc:'@Without it you won\'t be able to start alchemy/chemistry. Without it people will use too much or less ingredient with bad consequences of it. I would research it now.',
		icon:[18,4,'magixmod'],
		cost:{'insight':360,'wisdom':10},
		effects:[
			{type:'provide res',what:{'education':0.6}},
			{type:'provide res',what:{'science':1}},
		],
		req:{'oral tradition':true,'Intermediate maths':true,'Plain island building':true},
	});
		new G.Tech({
		name:'Ink crafting',
		desc:'Now [artisan] will be able to craft [Ink]. Ink will be used by [Poet] later. You can craft ink choosing new working mode for [artisan].',
		icon:[18,7,'magixmod'],
		cost:{'insight':335},
		req:{'Plain island building':true},
	});
		new G.Tech({
		name:'Poetry',
		desc:'Beautiful art of culture. Poems, stories, essays, novels and many more.',
		icon:[18,8,'magixmod'],
		cost:{'insight':635,'culture':300,'inspiration':25},
		req:{'Plain island building':true,'Ink crafting':true},
	});
		new G.Tech({
		name:'Moar juices',
		desc:'Allows you to craft juice out of [fruit]s.',
		icon:[17,4,'magixmod'],
		cost:{'insight':950},
		req:{'Plain island building':true,'Crafting a juice':true},
	});
		new G.Tech({
		name:'Medicaments brewing',
		desc:'[Alchemists] will now be able to craft at their stands medicaments out of [Flowers,various flowers] and a [herb,herbs].',
		icon:[18,2,'magixmod'],
		cost:{'insight':750},
		req:{'Beginnings of alchemy':true},
	});
		new G.Tech({
		name:'Alcohol brewing',
		desc:'[Alchemists] will now be able to craft at their stands alcohol by created by them own recipe. Alcohol can be used to craft trunks.',
		icon:[18,3,'magixmod'],
		cost:{'insight':750},
		req:{'Beginnings of alchemy':true},
	});
		new G.Tech({
		name:'Mana brewery II',
		desc:'[Alchemists] will now be able to craft at their stands [Mana]. To do it they will use same recipe as the [Mana maker]. Will gain same amounts like he.',
		icon:[19,2,'magixmod'],
		cost:{'insight':1000},
		req:{'Beginnings of alchemy':true},
	});
		new G.Tech({
		name:'Stronger faith',
		desc:'Unlocks cathedrals. Soothsayer will gain less [faith] but [Church] will gain more than [soothsayer] since now.',
		icon:[19,3,'magixmod'],
		cost:{'insight':1000},
		req:{'Wizard complex':true,'ritualism':true},
	});
		new G.Tech({
		name:'Healing with brews',
		desc:'@[sick],[drunk] will have bigger chance to get recovered. Obtaining this research will unlock new type of [healer] who heals [sick] and [drunk] using medical brews.',
		icon:[19,6,'magixmod'],
		cost:{'insight':650,'wisdom':60},
		req:{'More healing ways':true,'Medicaments brewing':true},
	});
		new G.Tech({
		name:'Laws of physics(basic)',
		desc:'People acknowledged with physics will understand why towers are falling, why thrown up apple will fall down, why water pushes up light objects while heavy objects sink in it.',
		icon:[13,10,'magixmod'],
		cost:{'insight':1000,'science':1},
		effects:[
			{type:'provide res',what:{'education':2}},
		],
		req:{'Intermediate maths':true,'Will to know more':true},
	});
		new G.Tech({
		name:'monument-building II',
		desc:'@unlocks the [temple of heaven,Temple of Heaven], an mid-legacy wonder. Much bigger than [mausoleum], may lead to victory<>',
		icon:[14,10,'magixmod'],
		cost:{'insight':1400,'culture':300,'spirituality':15,'faith':125},
		req:{'construction':true,'burial':true,'culture of the afterlife':true,'Laws of physics(basic)':true},
		effects:[
		],
	});
		new G.Tech({
		name:'Weapon blacksmithery',
		desc:'[blacksmith workshop,Blacksmiths] can now craft [metal weapons] at the same rules as the [metal tools] were.<>',
		icon:[13,11,'magixmod'],
		cost:{'insight':50},
		req:{'smelting':true},
		effects:[
		],
	});
		new G.Tech({
		name:'Armor blacksmithery',
		desc:'[blacksmith workshop,Blacksmiths] can now craft [armor set] at the same rules as the [metal tools] were.<>',
		icon:[12,11,'magixmod'],
		cost:{'insight':50},
		req:{'smelting':true},
		effects:[
		],
	});
		new G.Tech({
		name:'Mo\' floorz',
		desc:'Now each [Blockhouse] will have 6th floor allowing them to fit 10 more [population,People] per [Blockhouse].<>',
		icon:[14,11,'magixmod'],
		cost:{'insight':750,'wisdom':15},
		req:{'Laws of physics(basic)':true},
		effects:[
		],
	});
		new G.Tech({
		name:'Spell of capacity',
		desc:'Smart wizards figured out a spell which will increase maximum food/material storage of [warehouse] , [barn] , [granary] , [storage pit], [stockpile] by 20%.<>',
		icon:[4,1,'magixmod',23,1],
		cost:{'insight':750,'wisdom':15,'Mana':1e5,'Wind essence':3000},
		req:{'Laws of physics(basic)':true},
	});
		new G.Tech({
		name:'Better house construction',
		desc:'At the same land of usage [house] and [Brick house with a silo] will grant bonuses: @ +1 [housing] from [house] every 8 [house]s , @ +1 [housing] from [Brick house with a silo] every 5 [Brick house with a silo,Brick houses].<>',
		icon:[8,11,'magixmod'],
		cost:{'insight':750,'wisdom':15},
		req:{'Laws of physics(basic)':true},
	});
		new G.Tech({
		name:'Farm of the Beet',
		desc:'@Makes [Beet] farm possible to be built.',
		icon:[10,11,'magixmod',24,1],
		cost:{'insight':450,'wisdom':30},
		req:{'Farms in the new land':true},
	});
		new G.Tech({
		name:'prospecting II',
		desc:'@[mine]s can now dig in search of [nickel ore,Nickel] or focus to mine [Granite],[Diorite],[Andesite] with 3x efficiency instead of any prospected mineral.',
		icon:[11,12,'magixmod'],
		cost:{'insight':250},
		req:{'prospecting':true,'mining':true},
	});
		new G.Tech({
		name:'quarrying II',
		desc:'@[quarry] can now dig for [cut granite],[cut diorite],[cut andesite] by new special mode. @<b>"Advanced quarry stone" mode and "Quarry other stones mode(non advanced)" has 1.7% chance to gain 6 to 13 [platinum ore]s .',
		icon:[10,12,'magixmod'],
		cost:{'insight':340},
		req:{'prospecting II':true,'quarrying':true},
	});
		new G.Tech({
		name:'platinum-working',
		desc:'@[furnace]s can now make [platinum ingot]s from [platinum ore]@[blacksmith workshop]s can now forge [platinum block]s out of [platinum ingot]s<>',
		icon:[5,11,'magixmod'],
		cost:{'insight':100},
		req:{'smelting':true,'prospecting II':true},
		effects:[
		],
	});
		new G.Tech({
		name:'nickel-working',
		desc:'@[furnace]s can now make [hard metal ingot]s from [nickel ore].<>',
		icon:[1,12,'magixmod'],
		cost:{'insight':100},
		req:{'smelting':true,'prospecting II':true},
		effects:[
		],
	});
		new G.Tech({
		name:'papercrafting',
		desc:'@unlocks [Paper-crafting shack]. There you can craft: @[papyrus] out of [Sugar cane], @[pergamin] out of [hide] , [leather] , and [common paper] out of [Bamboo] with help of secret non-magic recipe.<>',
		icon:[18,12,'magixmod'],
		cost:{'insight':500,'wisdom':5},
		req:{'city planning':true},
		effects:[
		],
	});
		new G.Tech({
		name:'ingredient crafting',
		desc:'Alchemists can now craft a special ingredients for more advanced potions. They will use up [Basic brews] and [misc materials].',
		icon:[17,9,'magixmod'],
		cost:{'insight':500,'wisdom':5},
		req:{'Beginnings of alchemy':true},
		effects:[
		],
	});
		new G.Tech({
		name:'Second portal to new world',
		desc:'After your people heard [The God\'s call] your wizards with help of full of faith people figured out a way to acrivate portal to the Paradise at the top of their latest wonder.',
		icon:[20,3,'magixmod'], //WIP
		cost:{'insight':1600,'culture':300,'Mana':2500,'influence':70,'spirituality':50,'population':1000},
		req:{'Mana brewery':true,'More useful housing':true,'Wizardry':true,'Wizard wisdom':true,'Wizard complex':true,'Belief in portals':true,'First portal to new world':true,'The God\'s call':true,'monument-building II':true},
	});
		new G.Tech({
		name:'Paradise building',
		desc:'Unlocks sheet of buildings which can be only built in newly opened <b>Paradise</b>.',
		icon:[19,13,'magixmod'], 
		cost:{'insight':4,'Paradise emblem':1},
		effects:[
			{type:'provide res',what:{'Industry point':1e3}}
		],
		req:{'Second portal to new world':true},
	});
		new G.Tech({
		name:'Dark-essenced ingredients',
		desc:'Unlocks sheet of ingredients made with [Dark essence] as a part of recipe.',
		icon:[20,5,'magixmod'], 
		cost:{'insight':450,'Dark essence':4e3,'wisdom':10},
		req:{'ingredient crafting':true},
	});
		new G.Tech({
		name:'Wind-essenced ingredients',
		desc:'Unlocks sheet of ingredients made with [Wind essence] as a part of recipe.',
		icon:[15,13,'magixmod'], 
		cost:{'insight':450,'Wind essence':4e3,'wisdom':10},
		req:{'ingredient crafting':true},
	});
		new G.Tech({
		name:'Nature-essenced ingredients',
		desc:'Unlocks sheet of ingredients made with [Nature essence] as a part of recipe.',
		icon:[18,13,'magixmod'], 
		cost:{'insight':450,'Nature essence':4e3,'wisdom':10},
		req:{'ingredient crafting':true},
	});
		new G.Tech({
		name:'7th essence',
		desc:'Discovers another essence which can be feeled in Paradise\'s air. Needs some things to be gathered.@unlocks [Holy wizard tower]',
		icon:[20,6,'magixmod',8,12,23,1], 
		cost:{'insight':1300},
		effects:[
			{type:'provide res',what:{'science':2}},
		],
		req:{'Second portal to new world':true},
	});
		new G.Tech({
		name:'7th complex tower',
		desc:'Due to 7th essence discovered [Wizard Complex] has a need to build up new tower specially for new essence.@More housing and since now [Wizard Complex] will use more [Mana] just to craft new essence too.',
		icon:[20,8,'magixmod'], 
		cost:{'insight':700},
		req:{'7th essence':true,'Wizard complex':true},
	});
		new G.Tech({
		name:'Architects knowledge',
		desc:'[architect,Architects] can now plan for you: [Brick house with a silo] & [Blockhouse] .',
		icon:[21,7,'magixmod'], 
		cost:{'insight':673,'wisdom':2},
		req:{'construction II':true},
	});
		new G.Tech({
		name:'Bookcrafting',
		desc:'[artisan] can craft books.',
		icon:[12,12,'magixmod'], 
		cost:{'insight':300},
		req:{'papercrafting':true},
	});
		new G.Tech({
		name:'Notewriting',
		desc:'[Florist], [Wizard] , [Poet] , (lawyer) will write their notes. Notes can be used to write specified books which may summon some <b>Knowledge</b> traits and turn into [insight].',
		icon:[21,6,'magixmod'], 
		cost:{'insight':300},
		req:{'Bookcrafting':true,'Ink crafting':true},
	});
		new G.Tech({
		name:'Bookwriting',
		desc:'[Florist\'s notes],[Poet\'s notes],[Wizard\'s notes] may now be written into some book.  @unlocks [Lodge of writers] who will convert their notes into books.',
		icon:[12,13,'magixmod'], 
		cost:{'insight':300},
		req:{'Bookcrafting':true,'Ink crafting':true},
	});
		new G.Tech({
		name:'Better influence & authority',
		desc:'Unlocks [Lawyer] and [Mediator]. Mediator will solve conflicts and gain [happiness] from solving them , while [Lawyer] will copy and share code of law.',
		icon:[21,0,'magixmod'], 
		cost:{'insight':1015},
		req:{'Wizard complex':true},
	});
		new G.Tech({
		name:'Ambrosium treeplanting',
		desc:'@Unlocks [Holy orchard] from which you can get [Armbrosium leaf,Ambrosium leaves] .',
		icon:[21,11,'magixmod'], 
		cost:{'insight':1015},
		req:{'Paradise building':true},
	});
		new G.Tech({
		name:'Ambrosium crafting',
		desc:'@Unlocks [Ambrosium shard shack] which can craft [Ambrosium shard]s with use of [Mana] , [Cloudy water] & [Ambrosium leaf,Ambrosium leaves] of course.',
		icon:[13,14,'magixmod'], 
		cost:{'insight':1015},
		req:{'Ambrosium treeplanting':true,'Paradise building':true},
	});
/////////////////////////////////////////////////////////////////////
	//UNITS
		new G.Unit({
		name:'Holy orchard',
		desc:'An orchard with planted trees with ambrosium leaves which are most common type of trees in new world. Gathers falling [ambrosium leaves]<>',
		icon:[4,14,'magixmod'],
		cost:{'basic building materials':900},
		use:{'Land of the Paradise':50,'Industry point':5},
		staff:{'worker':10},
		upkeep:{'Cloudy water':30},
		effects:[
		],
		req:{'Ambrosium treeplanting':true,'Paradise building':true},
		category:'paradiseunit',
	});
		new G.Unit({
		name:'Holy orchard',
		desc:'An orchard with planted trees with ambrosium leaves which are most common type of trees in new world. Gathers falling [ambrosium leaves]<>',
		icon:[4,14,'magixmod'],
		cost:{'basic building materials':900},
		use:{'Land of the Paradise':50,'Industry point':5},
		staff:{'worker':10},
		upkeep:{'Cloudy water':30},
		effects:[
		],
		req:{'Ambrosium treeplanting':true,'Paradise building':true},
		category:'paradiseunit',
	});
		new G.Unit({
		name:'hardened warehouse',
		desc:'@provides 6000 [material storage] .<>A large building for storing materials. Staffed with two guards to prevent theft even if it will be constructed in Paradise.',
		icon:[2,14,'magixmod'],
		cost:{'basic building materials':900},
		use:{'Land of the Paradise':3,'Industry point':0.2},
		staff:{'worker':2},
		effects:[
			{type:'provide',what:{'added material storage':6000}},
			{type:'waste',chance:0.001/1000}
		],
		req:{'stockpiling':true,'construction':true,'Paradise building':true},
		category:'paradiseunit',
	});
		new G.Unit({
		name:'Guru',
		desc:'@The one who can gain Insight^2 so in short we can say it is... [science,Science] used to much more complicated researches.',
		icon:[6,14,'magixmod'],
		cost:{},
		use:{'worker':1},
		limitPer:{'population':1e5},
		effects:[
			{type:'gather',what:{'insight':0.3}},
			{type:'gather',what:{'science':0.0005}},
		],
		req:{'God\'s trait #3 Science^2':true},
		category:'discovery',
	});
		new G.Unit({
		name:'Floored warehouse',
		desc:'@provides 3000 [material storage] and 3000 [food storage] .<>A large building for storing materials and food. Staffed with four guards to prevent theft even if it will be constructed in Paradise.',
		icon:[5,14,'magixmod'],
		cost:{'basic building materials':8500},
		use:{'Land of the Paradise':4,'Industry point':0.2},
		staff:{'worker':4},
		effects:[
			{type:'provide',what:{'added material storage':3000}},
			{type:'provide',what:{'food storage':3000}},
			{type:'waste',chance:0.001/1000}
		],
		req:{'stockpiling':true,'construction':true,'Paradise building':true},
		category:'paradiseunit',
	});
		new G.Unit({
		name:'Lawyer', 
		desc:'Lawyer will share code of law to people and comparing people\'s decisions with code of law.',
		icon:[10,13,'magixmod'],
		cost:{},
		use:{'worker':1},
		effects:[
			{type:'convert',from:{'Paper':14,'Ink':8},into:{'Lawyer\'s notes':1},every:11,req:{'Notewriting':true},chance:1/4}
       		],
		req:{'Better influence & authority':true},
		category:'political',
		limitPer:{'population':400},
	});
		new G.Unit({
		name:'Mediator',
		desc:'Solves people\' argues with help of law to prevent prisoning people. Generates happiness every now and then.',
		icon:[9,13,'magixmod'],
		cost:{},
		upkeep:{'food':0.2},
		effects:[
			{type:'gather',what:{'happiness':0.1}},
		],
		use:{'worker':1},
		req:{'Better influence & authority':true},
		category:'political',
		limitPer:{'population':600},
	});
		new G.Unit({
		name:'Lodge of writers',
		desc:'There writers will write books. Sources of information contained in them are notes of people from many jobs(manuals for instance).',
		icon:[11,13,'magixmod'],
		cost:{'basic building materials':700},
		use:{'land':1,'worker':7},
		effects:[
			{type:'convert',from:{'Florist\'s notes':1,'Empty book':1,'Ink':15},into:{'nature book':1},every:12},
			{type:'convert',from:{'Poet\'s notes':1.05,'Empty book':1,'Ink':16},into:{'novel':1},every:13},
			{type:'convert',from:{'Wizard\'s notes':1,'Empty book':1,'Ink':15},into:{'spellbook':1},every:12},
			{type:'convert',from:{'Lawyer\'s notes':1,'Empty book':1,'Ink':15},into:{'Book of law':1},every:12},
		],
		req:{'Bookwriting':true},
		category:'civil',
	});
		new G.Unit({
		name:'Library',
		desc:'Books from each source(delivered, written at [Lodge of writers] etc.) may be stored there to slow down their decay.',
		icon:[21,5,'magixmod'],
		cost:{'basic building materials':1100},
		use:{'land':1,'worker':5},
		req:{'Bookwriting':true,'construction':true},
		category:'civil',
	});
		new G.Unit({
		name:'Mana silo',
		desc:'Big silo. Can waste like [Fire essence storage,Essence storages] . Each one allows you to store 32500 [Mana].',
		icon:[6,5,'magixmod'],
		cost:{'basic building materials':700,'pot':850},
		use:{'land':1.2},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'mana capacity':32500}},
			{type:'waste',chance:0.0004/1000},
		],
		req:{'Mana brewery':true},
		category:'storage',
	});
		new G.Unit({
		name:'Fire essence storage',
		desc:'@One storage allows you to store 11500 [Fire essence] more<>A simple glass shielded storage with essence faucet. It is more tall than wide so that is why it consumes only 0.8 [land].',
		icon:[2,5,'magixmod'],
		cost:{'basic building materials':100,'glass':200},
		use:{'land':0.8},
		effects:[
			{type:'provide',what:{'fire essence limit':11500}},
			{type:'waste',chance:1/100000}
		],
		req:{'stockpiling':true,'building':true,'Essence storages':true},
		category:'storage',
	});
		new G.Unit({
		name:'Water essence storage',
		desc:'@One storage allows you to store 11500 [Water essence] more<>A simple glass shielded storage with essence faucet. It is more tall than wide so that is why it consumes only 0.8 [land].',
		icon:[0,5,'magixmod'],
		cost:{'basic building materials':100,'glass':200},
		use:{'land':0.8},
		effects:[
			{type:'provide',what:{'water essence limit':11500}},
			{type:'waste',chance:1/100000}
		],
		req:{'stockpiling':true,'building':true,'Essence storages':true},
		category:'storage',
	});
		new G.Unit({
		name:'Lightning essence storage',
		desc:'@One storage allows you to store 11500 [Lightning essence] more<>A simple glass shielded storage with essence faucet. It is more tall than wide so that is why it consumes only 0.8 [land].',
		icon:[5,5,'magixmod'],
		cost:{'basic building materials':100,'glass':200},
		use:{'land':0.8},
		effects:[
			{type:'provide',what:{'lightning essence limit':11500}},
			{type:'waste',chance:1/100000}
		],
		req:{'stockpiling':true,'building':true,'Essence storages':true},
		category:'storage',
	});
		new G.Unit({
		name:'Dark essence storage',
		desc:'@One storage allows you to store 11500 [Dark essence] more<>A simple glass shielded storage with essence faucet. It is more tall than wide so that is why it consumes only 0.8 [land].',
		icon:[1,5,'magixmod'],
		cost:{'basic building materials':100,'glass':200},
		use:{'land':0.8},
		effects:[
			{type:'provide',what:{'dark essence limit':11500}},
			{type:'waste',chance:1/100000}
		],
		req:{'stockpiling':true,'building':true,'Essence storages':true},
		category:'storage',
	});
		new G.Unit({
		name:'Nature essence storage',
		desc:'@One storage allows you to store 11500 [Nature essence] more<>A simple glass shielded storage with essence faucet. It is more tall than wide so that is why it consumes only 0.8 [land].',
		icon:[3,5,'magixmod'],
		cost:{'basic building materials':100,'glass':200},
		use:{'land':0.8},
		effects:[
			{type:'provide',what:{'nature essence limit':11500}},
			{type:'waste',chance:1/100000}
		],
		req:{'stockpiling':true,'building':true,'Essence storages':true},
		category:'storage',
	});
		new G.Unit({
		name:'Wind essence storage',
		desc:'@One storage allows you to store 11500 [Wind essence] more<>A simple glass shielded storage with essence faucet. It is more tall than wide so that is why it consumes only 0.8 [land].',
		icon:[4,5,'magixmod'],
		cost:{'basic building materials':100,'glass':200},
		use:{'land':0.8},
		effects:[
			{type:'provide',what:{'wind essence limit':11500}},
			{type:'waste',chance:1/100000}
		],
		req:{'stockpiling':true,'building':true,'Essence storages':true},
		category:'storage',
	});
		new G.Unit({
		name:'Holy essence storage',
		desc:'@One storage allows you to store 11500 [Essence of the Holliness] more<>A simple glass shielded storage with essence faucet. It is more tall than wide so that is why it consumes only 0.8 [land].',
		icon:[3,14,'magixmod'],
		cost:{'basic building materials':100,'glass':200},
		use:{'Land of the Paradise':0.8},
		effects:[
			{type:'provide',what:{'holy essence limit':11500}},
			{type:'waste',chance:1/100000}
		],
		req:{'stockpiling':true,'building':true,'Essence storages':true,'Paradise building':true,'7th essence':true},
		category:'storage',
	});
		new G.Unit({
		name:'holy well',
		desc:'@produces fresh [Cloudy water], up to 28 per day<>The [holy well] is a steady source of drinkable water.',
		icon:[10,14,'magixmod'],
		cost:{'stone':50,'basic building materials':120},
		use:{'Land of the Paradise':1},
		effects:[
			{type:'gather',what:{'Cloudy water':28}},
		],
		category:'paradiseunit',
		req:{'well-digging':true,'Paradise building':true},
		limitPer:{'land':10},
	});
	
		new G.Unit({
		name:'ingredient crafting stand',
		desc:'There you can craft ingredients for more advanced potions.',
		icon:[19,7,'magixmod'],
		cost:{'basic building materials':5},
		req:{'Beginnings of alchemy':true,'ingredient crafting':true},
		gizmos:true,
		modes:{
			'off':G.MODE_OFF,
			'bonedust':{name:'Bone dust',icon:[18,11,'magixmod'],desc:'Gain [Bone dust] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.25}},
			'flowsugar':{name:'Flowered sugar',icon:[18,10,'magixmod'],desc:'Gain [Flowered sugar] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.25}},
			'enchantice':{name:'Enchanted ice',icon:[17,11,'magixmod'],desc:'Gain [Enchanted ice] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.25,'Wand':1}},
			'darkfire':{name:'Dark fire pit',icon:[20,12,'magixmod'],desc:'Gain [Dark fire pit] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.25},req:{'Dark-essenced ingredients':true}},
			'withersalt':{name:'Withering salt',icon:[20,10,'magixmod'],desc:'Gain [Withering salt] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.25},req:{'Dark-essenced ingredients':true}},
			'undeadherb':{name:'Herb of the undead',icon:[20,11,'magixmod'],desc:'Gain [Herb of the undead] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.25},req:{'Dark-essenced ingredients':true}},
			'windsugar':{name:'Windy sugar',icon:[14,13,'magixmod'],desc:'Gain [Windy sugar] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.25},req:{'Wind-essenced ingredients':true}},
			'scoblife':{name:'Scobs of life',icon:[17,13,'magixmod'],desc:'Gain [Scobs of life] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.25},req:{'Nature-essenced ingredients':true}},
			'growgrass':{name:'Grass of growing',icon:[16,13,'magixmod'],desc:'Gain [Grass of growing] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.25},req:{'Nature-essenced ingredients':true}},
		},
		effects:[
			{type:'convert',from:{'bone':1.25},into:{'Bone dust':1},every:4,mode:'bonedust'},
			{type:'convert',from:{'Flowers':1.5,'sugar':1},into:{'Flowered sugar':1},every:4,mode:'flowsugar'},
			{type:'convert',from:{'Mana':0.75,'ice':2,'Wind essence':1},into:{'Enchanted ice':2},every:4,mode:'enchantice'},
			{type:'convert',from:{'fire pit':1,'Dark essence':1.75},into:{'Dark fire pit':1.02},every:6,mode:'darkfire'},
			{type:'convert',from:{'salt':1,'Dark essence':1},into:{'Withering salt':1},every:6,mode:'withersalt'},
			{type:'convert',from:{'herb':5,'Mana':0.5,'Nature essence':1},into:{'Grass of growing':1.25},every:5,mode:'growgrass'},
			{type:'convert',from:{'Mana':0.75,'sugar':1,'Wind essence':1},into:{'Windy sugar':2},every:4,mode:'windsugar'},
			{type:'convert',from:{'herb':2,'Dark essence':1,'fruit':0.5},into:{'Herb of the undead':2},every:4,mode:'undeadherb'},
			{type:'convert',from:{'Mana':0.75,'Scobs':1,'Nature essence':1,'water':0.25},into:{'Scobs of life':1.05},every:8,mode:'scoblife'},
		],
		category:'alchemy',
	});
		new G.Unit({
		name:'Paper-crafting shack',
		desc:'Allows to make [Paper] You can choose between 3 types of paper: [papyrus] , [pergamin] , [common paper] .',
		icon:[0,12,'magixmod',25,2],
		cost:{'basic building materials':800},
		use:{'land':0.7},
		gizmos:true,
		modes:{
			'off':G.MODE_OFF,
			'papyrus':{name:'Papyrus',icon:[15,12,'magixmod'],desc:'Gain mainly [papyrus] out of this shack. To craft [papyrus] , [worker] will use [Sugar cane] .',use:{'worker':1,'stone tools':1}},
			'pergamin':{name:'Pergamin',icon:[16,12,'magixmod'],desc:'Gain mainly [pergamin] out of this shack. To craft [pergamin] , [worker] will use [hide] or [leather] .',use:{'worker':1,'stone tools':1}},
			'commonpaper':{name:'Common paper',icon:[17,12,'magixmod'],desc:'Craft [common paper] out of [Bamboo] with help of secret non-magic recipe.',use:{'worker':1,'stone tools':1}},
		},
		effects:[
			{type:'convert',from:{'Sugar cane':3.25},into:{'papyrus':1.3},every:1,mode:'papyrus'},
			{type:'convert',from:{'hide':1.75},into:{'pergamin':1.05},every:4,mode:'pergamin'},
			{type:'convert',from:{'leather':1.75},into:{'pergamin':1.05},every:4,mode:'pergamin'},
			{type:'convert',from:{'Bamboo':4},into:{'common paper':1.3},every:2,mode:'commonpaper'},
			{type:'mult',value:1.17,req:{'Crafting & farm rituals':'on'}}
		],
		req:{'papercrafting':true},
		category:'crafting',
	});
		new G.Unit({
		name:'Syrup healer',
		desc:'This is other subclass of [healer] which heals with brews instead of herbs or bandages. He will mainly heal [sick] and [drunk].',
		icon:[18,0,'magixmod'],
		cost:{},
		use:{'worker':1},
		upkeep:{'food':0.2},
		effects:[
			{type:'convert',from:{'sick':1,'Essenced herb syrup':0.15,'Herb syrup':1},into:{'adult':1,'health':0.44},chance:4/10,every:10},
			{type:'convert',from:{'drunk':1,'Essenced herb syrup':0.25,'Herb syrup':0.9},into:{'adult':1,'health':0.44},chance:3/10,every:10},
			{type:'gather',context:'gather',what:{'health':0.1},req:{'Nutrition':true}},
		],
		req:{'healing':true,'Healing with brews':true},
		category:'spiritual',
	});
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
		name:'Painter',
		desc:'@generates [culture] by using [Dyes] to make a paintings. Requires artistic thinking.',
		icon:[12,2,'magixmod'],
		cost:{},
		use:{'worker':1},
		upkeep:{'coin':0.1,'Dyes':4},
		limitPer:{'population':40},
		effects:[
			{type:'gather',what:{'culture':0.08}},
			{type:'gather',what:{'Painting':0.008}},
			{type:'gather',what:{'culture':0.03},req:{'symbolism':true}},
			{type:'mult',value:1.3,req:{'artistic thinking':true}},
			{type:'mult',value:1.2,req:{'wisdom rituals':'on'}}
		],
		req:{'oral tradition':true,'artistic thinking':true},
		category:'cultural',
	});
		new G.Unit({
		name:'Archaic wizard',
		desc:'A man needed to make his towers even exist. Primitive wizard, occasionaly gains insight in very low rates.',
		icon:[6,1,'magixmod'],
		cost:{'insight':1,'stick':2,'food':1,'water':1},
		use:{'worker':1,'Wand':3},
		upkeep:{'food':11},
		req:{'Wizardry':true,'Wizard wisdom':false},
		//require:{'wizard':3},
		effects:[
			{type:'gather',what:{'insight':0.012}},
			{type:'convert',from:{'Paper':13},into:{'Poet\'s notes':1},every:30,req:{'Notewriting':true}},
        ],
		category:'discovery',
		limitPer:{'population':3},
	});
		new G.Unit({
		name:'Wizard',
		desc:'A man needed to make his towers even exist. Provides 1 [wisdom] per each one instead of gaining [insight] like [Archaic wizard]',
		icon:[21,8,'magixmod'],
		cost:{'insight':1,'stick':2,'food':1,'water':1},
		use:{'worker':1,'Wand':3},
		upkeep:{'food':12},
		req:{'Wizard wisdom':true},
		//require:{'wizard':3},
		effects:[
            		{type:'provide',what:{'wisdom':1},req:{'Wizard wisdom':true}},
			{type:'convert',from:{'Paper':14},into:{'Wizard\'s notes':1},every:11,req:{'Notewriting':true}}
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
			{type:'gather',what:{'Lightning essence':2}}
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
			{type:'mult',value:1.17,req:{'Crafting & farm rituals':'on'}}
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
		name:'Holy wizard tower',
		desc:'@provides 33 [housing]<>A tower for 30 citizens and 3 wizards. Gathers [Essence of the Holiness] by consuming mana.',
		icon:[20,7,'magixmod'],
		cost:{'basic building materials':750,'precious building materials':350},
		use:{'land':1},
		upkeep:{'Mana':6},
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true,'7th essence':true},
		//require:{'wizard':3},
		effects:[
			{type:'provide',what:{'housing':33}},
			{type:'gather',what:{'Essence of the Holiness':2.15}},
	],
		category:'housing',
		limitPer:{'land':2},
	});
		new G.Unit({
		name:'Church',
		desc:'Millenially generates some [spirituality]. Commonly generates [faith] at the lower rate than [soothsayer]. Further religion improvements may change it.',
		icon:[6,3,'magixmod'],
		cost:{'basic building materials':2000,'precious building materials':20},
		upkeep:{'faith':0.001},
		use:{'land':1,'worker':2},
		req:{'churches':true},
		effects:[
			{type:'gather',what:{'faith':0.03}},
			{type:'gather',what:{'spirituality':0.00000001}},
			{type:'waste',chance:0.01/1000}
	],
		category:'spiritual',
	});
		new G.Unit({
		name:'Cathedral',
		desc:'A precious place for worship. Commonly generates [faith] at the bigger rate than [soothsayer].',
		icon:[19,4,'magixmod'],
		cost:{'basic building materials':1700,'precious building materials':400},
		upkeep:{'faith':0.003},
		use:{'land':1,'worker':4},
		req:{'churches':true,'Stronger faith':true},
		effects:[
			{type:'gather',what:{'faith':0.09}},
			{type:'gather',what:{'faith':0.03},req:{'symbolism':true,'Stronger faith':true}},
			{type:'waste',chance:0.003/1000}
	],
		category:'spiritual',
	});
		new G.Unit({
		name:'Poet',
		desc:'@generates [culture] every now and then<>[Poet] spends his free time in his private life to write novels, stories, poems about any topic. Gathers a little bit more [culture] than storyteller but needs [Ink] as upkeep(he needs something with sense to write).',
		icon:[18,5,'magixmod'],
		cost:{},
		use:{'worker':1},
		upkeep:{'Ink':0.35},
		effects:[
			{type:'gather',what:{'culture':0.13}},
			{type:'gather',what:{'culture':0.05},req:{'symbolism':true}},
			{type:'mult',value:1.31,req:{'artistic thinking':true}},
			{type:'mult',value:1.21,req:{'wisdom rituals':'on'}},
			{type:'convert',from:{'Paper':21},into:{'Poet\'s notes':1},every:11,req:{'Bookwriting':true}},
		],
		req:{'oral tradition':true,'Poetry':true},
		category:'cultural',
	});
	
		new G.Unit({
		name:'Wizard Complex',
		desc:'@provides 690 [housing]<>A towers for 660 citizens and 30 wizards. Gathers all type of essences three times better than usual tower and consuming same mana. May provide more housing with further researches.',
		icon:[3,3,'magixmod'],
		cost:{'basic building materials':12500,'precious building materials':3000},
		use:{'land':9},
		upkeep:{'Mana':37},
		req:{'construction':true,'Wizard towers':true,'Wizard wisdom':true,'Well of Mana':true,'Wizard complex':true},
		//require:{'wizard':30},
		effects:[
			{type:'provide',what:{'housing':690}},
			{type:'provide',what:{'housing':115},req:{'7th complex tower':true}},
			{type:'provide',what:{'authority':15}},
			{type:'provide',what:{'spirituality':15}},
			{type:'provide',what:{'inspiration':30}},
			{type:'gather',context:'gather',what:{'Fire essence':6}},
			{type:'gather',context:'gather',what:{'Water essence':6}},
			{type:'gather',context:'gather',what:{'Nature essence':6}},
			{type:'gather',context:'gather',what:{'Lightning essence':6}},
			{type:'gather',context:'gather',what:{'Wind essence':6}},
			{type:'gather',context:'gather',what:{'Dark essence':6}},
			{type:'convert',from:{'Mana':6.33},into:{'Essence of the Holiness':6},every:4,req:{'7th essence':true}},
		],
		category:'housing',
		limitPer:{'land':300},
		limitPer:{'population':9000},
	});
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
			{type:'waste',chance:0.0004/1000},
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
			{type:'provide',what:{'housing':10},req:{'Mo\' floorz':true}},
			{type:'waste',chance:0.00001/1000},
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
		use:{'Land of the Plain Island':5},
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
		],
		category:'plainisleunit',
		limitPer:{'land':35},
	});
		new G.Unit({
		name:'Cemetary of Plain Island',
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
		name:'Hardened house',
		desc:'@provides 18 [housing]. Bigger, made with hardened materials. Has lower chances to waste.',
		icon:[6,6,'magixmod',4,6,'magixmod'],
		cost:{'basic building materials':1500,'glass':5},
		use:{'Land of the Plain Island':1},
		effects:[
			{type:'waste',chance:0.001/1000},
			{type:'provide',what:{'housing':18}},
		],
		req:{'construction II':true},
		category:'plainisleunit',
	});
		new G.Unit({
		name:'Hardened barn',
		desc:'@provides 5000[food storage]. Bigger, harder barn has lower chance to be wasted. To keep stored food safe and fresh it will need 3 guys.',
		icon:[7,6,'magixmod',4,6,'magixmod'],
		cost:{'basic building materials':1500,'glass':5},
		use:{'Land of the Plain Island':1,'worker':3},
		effects:[
			{type:'waste',chance:0.001/1000},
			{type:'provide',what:{'food storage':5000}},
		],
		req:{'construction II':true},
		category:'plainisleunit',
	});
		new G.Unit({
		name:'terrain conservator',
		desc:'@Each one hired [terrain conservator] will convert 25 [Land of the Plain Island] into 25 [Alchemy zone]. Hire them more to get more of its zone but not too much. @<b>WARNING! If you will fire one conservator you will lose [Alchemy zone] and you will not receive back your [Land of the Plain Island] so choose amount of them wisely!<b> ',
		icon:[17,6,'magixmod'],
		cost:{'Land of the Plain Island':25},
		use:{'worker':1},
		effects:[
			{type:'provide',what:{'Alchemy zone':25}},
		],
		req:{'Beginnings of alchemy':true,'Terrain conservacy':true},
		category:'alchemy',
	});
		new G.Unit({
		name:'Basic brewing stand',
		desc:'There you can brew basic potions.',
		icon:[18,9,'magixmod'],
		cost:{'basic building materials':3},
		req:{'Beginnings of alchemy':true},
		gizmos:true,
		modes:{
			'off':G.MODE_OFF,
			'sweetwater':{name:'Sweet water',icon:[0,10,'magixmod'],desc:'Gain [Sweet water pot,Sweet water] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.33}},
			'mundanewater':{name:'Mundane water',icon:[1,10,'magixmod'],desc:'Gain [mundane water pot,Mundane water] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.33}},
			'saltwater':{name:'Saltwater',icon:[2,10,'magixmod'],desc:'Gain [salted water pot,Saltwater] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.33}},
			'bubblingwater':{name:'Bubbling water',icon:[3,10,'magixmod'],desc:'Gain [Bubbling water pot,Bubbling water] out of its stand and its owner.',use:{'Alchemist':1,'Alchemy zone':0.33}},
		},
		effects:[
			{type:'convert',from:{'Potion pot':1,'water':0.75,'sugar':0.33},into:{'Sweet water pot':1},every:4,mode:'sweetwater'},
			{type:'convert',from:{'Potion pot':1,'water':0.75,'muddy water':0.05,'herb':0.1},into:{'mundane water pot':1},every:4,mode:'mundanewater'},
			{type:'convert',from:{'Potion pot':1,'water':0.8,'salt':0.2,'herb':0.1},into:{'salted water pot':1},every:4,mode:'saltwater'},
			{type:'convert',from:{'Potion pot':1,'water':0.8,'salt':0.02,'fire pit':0.12},into:{'Bubbling water pot':1},every:4,mode:'bubblingwater'},
		],
		category:'alchemy',
	});
		new G.Unit({
		name:'Alcohol brewing stand',
		desc:'There [Alchemists] can brew alcohol. Harmful for health but may be needed to make more potions.',
		icon:[19,9,'magixmod'],
		cost:{'basic building materials':4},
		req:{'Beginnings of alchemy':true,'Alcohol brewing':true},
		use:{'Alchemy zone':0.5,'Alchemist':1},
		effects:[
			{type:'convert',from:{'mundane water pot':0.75,'water':0.2,'Bubbling water pot':0.25},into:{'Alcohol pot':1},every:4},
		],
		category:'alchemy',
	});
		new G.Unit({
		name:'Mana crafting stand',
		desc:'There [Alchemists] can craft [Mana] with the same recipe as your [Mana maker] primarily did.',
		icon:[19,10,'magixmod'],
		cost:{'basic building materials':4},
		req:{'Beginnings of alchemy':true,'Mana brewery II':true},
		use:{'Alchemy zone':0.5},
		gizmos:true,
		modes:{
			'hireadult':{name:'Hire adult alchemist to craft mana',icon:[12,5,'magixmod'],desc:'Hire [Alchemist] to craft mana.',use:{'Alchemist':1}},
			'hirechild':{name:'Hire child alchemist to craft mana',icon:[12,7,'magixmod'],desc:'Hire [Child alchemist] to craft mana. Each stand used by children has 0.5% chance to make accident happen, but if you need adult [Alchemist] to other purposes you\'ll have\'em.',use:{'Child alchemist':1},req:{'Alchemy for children':'on'}},
		},
		effects:[
			{type:'gather',what:{'Mana':0.75}},
        ],
		category:'alchemy',
	});
		new G.Unit({
		name:'Alcohol drinks brewing stand',
		desc:'There [Alchemists] can brew drinks with help of [Alcohol pot,alcohol] . Tasty but harmful for health drinks are crafted there. Can craft [Wine] or [Pot of vodka].',
		icon:[19,8,'magixmod'],
		cost:{'basic building materials':4.3},
		req:{'Beginnings of alchemy':true,'Alcohol brewing':true},
		use:{'Alchemy zone':0.5},
		gizmos:true,
		modes:{
			'wine':{name:'Craft wine at this stand',icon:[8,10,'magixmod'],desc:'At this stand you may craft [Wine], an [Alcohol brews,Alcohol brew].',use:{'Alchemist':1}},
			'vodka':{name:'Craft vodka at this stand',icon:[10,10,'magixmod'],desc:'At this stand you may craft [Pot of vodka,Vodka], an [Alcohol brews,Alcohol brew]. This drink is very harmful for health so take care about health of your people.',use:{'Alchemist':1}},
		},	
		effects:[
			{type:'convert',from:{'Alcohol pot':0.1,'water':0.7,'mundane water pot':0.15,'fruit':0.6,'Sweet water pot':0.25},into:{'Wine':1},every:4,mode:'wine'},
			{type:'convert',from:{'Alcohol pot':0.5,'mundane water pot':0.3,'Bubbling water pot':0.05,'water':0.15},into:{'Pot of vodka':1},every:5,mode:'vodka'},
		],
		category:'alchemy',
	});
		new G.Unit({
		name:'Medicament brewing stand',
		desc:'There [Alchemists] can brew healthy syrups which may heal more efficiently [sick], [drunk]. Not so tasty but healthy. Can craft:[Herb syrup] ,[Essenced herb syrup], [Antidotum].',
		icon:[19,5,'magixmod'],
		cost:{'basic building materials':4.3},
		req:{'Beginnings of alchemy':true,'Medicaments brewing':true},
		use:{'Alchemy zone':0.5},
		gizmos:true,
		modes:{
			'herbsyrup':{name:'Craft syrup out of herbs',icon:[5,10,'magixmod'],desc:'At this stand you may craft [Herb syrup] a medicament used to heal people.',use:{'Alchemist':1}},
			'antidotum':{name:'Craft antidotum',icon:[4,10,'magixmod'],desc:'At this stand you may craft [Antidotum], which can be used to get rid of poison effect with a big chance to succed..',use:{'Alchemist':1}},		
			'EssHerbsyrup':{name:'Craft syrup out of herbs + <b>Nature essence',icon:[9,10,'magixmod'],desc:'At this stand you may craft [Essenced herb syrup] a medicament used to heal people which got heavily drunk or poisoned. @Be careful: At this mode alchemist has 10% to fail crafting its potion gaining nothing.',use:{'Alchemist':1}},
		},	
		effects:[
			{type:'convert',from:{'Alcohol pot':0.1,'water':0.7,'mundane water pot':0.15,'herb':0.05,'Sweet water pot':0.1},into:{'Antidotum':1},every:4,mode:'antidotum'},
			{type:'convert',from:{'salted water pot':0.3,'Bubbling water pot':0.05,'water':0.15,'herb':0.25,'Nature essence':0.2,'Mana':0.01},into:{'Essenced herb syrup':1},every:5,mode:'EssHerbsyrup',chance:9/10},
			{type:'convert',from:{'Sweet water pot':0.5,'water':0.15,'herb':0.5,'fruit':0.005},into:{'Herb syrup':1},every:5,mode:'herbsyrup'},
		],
		category:'alchemy',
	});
		new G.Unit({
		name:'School of alchemy',
		desc:'@The building where people may learn basics of alchemy. You can decide who may learn it in Policies tab. Needs water to work... you know why it does need water.',
		icon:[5,6,'magixmod'],
		cost:{'basic building materials':1500,'glass':5},
		use:{'Land of the Plain Island':1,'Instructor':3},
		upkeep:{'water':5},
		effects:[
			{type:'waste',chance:0.001/1000},
			{type:'convert',from:{'adult':1},into:{'Alchemist':1},every:400,req:{'Teach alchemists':'on','School of Alchemy - length of education cycle':'medium'}},
			{type:'convert',from:{'child':1},into:{'Child alchemist':1},every:400,req:{'Alchemy for children':'on','School of Alchemy - length of education cycle':'medium'}},
			{type:'convert',from:{'child':1},into:{'Child alchemist':1},every:200,req:{'Alchemy for children':'on','School of Alchemy - length of education cycle':'short'}},
			{type:'convert',from:{'adult':1},into:{'Alchemist':1},every:200,req:{'Teach alchemists':'on','School of Alchemy - length of education cycle':'short'}},
			{type:'convert',from:{'adult':1},into:{'Alchemist':1},every:600,req:{'Teach alchemists':'on','School of Alchemy - length of education cycle':'long'}},
			{type:'convert',from:{'child':1},into:{'Child alchemist':1},every:600,req:{'Alchemy for children':'on','School of Alchemy - length of education cycle':'long'}},
		],
		req:{'construction II':true},
		category:'plainisleunit',
	});
		new G.Unit({
		name:'Drying rack',
		desc:'@This small rack may dry [leather] making it become [Dried leather]. [Dried leather] is used to make even harder clothing, which decays much slower.',
		icon:[13,3,'magixmod'],
		cost:{'basic building materials':100},
		use:{'land':0.75},
		effects:[
			{type:'waste',chance:0.001/1000},
			{type:'convert',from:{'leather':5},into:{'Dried leather':5},every:20},
		],
		req:{'Sewing II':true},
		category:'crafting',
	});
		new G.Unit({
		name:'Florist',
		startWith:0,
		desc:'@subclass of gatherer which instead of Food and water, will collect flowers which will have its specific use. The further you will research the more types of [Flowers] he will be able to collect.',
		icon:[7,11,'magixmod'],
		cost:{},
		req:{},
		use:{'worker':1},
		category:'production',
		effects:[
			{type:'gather',context:'gather',what:{'cactus':1,'Pink tulip':1,'Salvia':1},amount:1,max:3},
			{type:'gather',context:'gather',what:{'Lime rose':1,'Pink rose':1,'Gray rose':1,'Cyan rose':1,'Desert rose':1},amount:1,max:3,req:{'plant lore':true,'Gather roses':'on'}},
			{type:'gather',context:'gather',what:{'Green Zinnia':1,'Sunflower':1},amount:1,max:1,req:{'plant lore':true}},
			{type:'gather',context:'gather',what:{'Lavender':1},amount:1,max:2,req:{'plant lore':true}},
			{type:'gather',context:'gather',what:{'Brown flower':1},amount:1,max:1,req:{'plant lore':true}},
			{type:'gather',context:'gather',what:{'Daisy':1},amount:1,max:1,req:{'plant lore':true}},
			{type:'gather',context:'gather',what:{'Bachelor\'s button':1,'Black lily':1},amount:1,max:1,req:{'plant lore':true}},	
			{type:'mult',value:1.05,req:{'harvest rituals for flowers':'on'}},
			{type:'convert',from:{'Paper':12,'Ink':3},into:{'Florist\'s notes':1},every:11,req:{'Notewriting':true},chance:1/95},
		],
	});
		new G.Unit({
		name:'Thoughts sharer',
		desc:'@consumes [insight] to give it to his students. Dreams himself or asks other dreamers. Then all knowledge he has gotten gives to people. @It is way to make very smart and intelligent [Instructor] appear.',
		icon:[19,12,'magixmod'],
		cost:{},
		use:{},
		gizmos:true,
		//upkeep:{'coin':0.2},
		modes:{
			'off':G.MODE_OFF,
			'thoughts':{name:'Make scholar people',icon:[12,6,'magixmod'],desc:'He will teach your [adult] people and make them [Instructor]s.',use:{'worker':1}},
		},
		effects:[
			{type:'convert',from:{'insight':4,'adult':1},into:{'Instructor':1},every:375,mode:'thoughts'},
		],
		req:{'speech':true},
		category:'discovery',
		priority:5,
	});
		new G.Unit({
		name:'bamboo hut',
		desc:'@provides 6 [housing]<>Small dwelling with roof out of branches and walls out of [Bamboo].',
		icon:[14,6,'magixmod'],
		cost:{'archaic building materials':65,'Bamboo':55},
		use:{'land':1},
		//require:{'worker':2,'stone tools':2},
		effects:[
			{type:'provide',what:{'housing':6}},
			{type:'waste',chance:0.13/1000}
		],
		req:{'building':true},
		category:'housing',
	});
		new G.Unit({
		name:'artisan of juice',
		desc:'@This subclass of [artisan] can make juices for you. In default he will extract sugar out of [Sugar cane]. Just switch mode to start crafting juices',
		icon:[15,5,'magixmod'],
		cost:{},
		use:{},
		gizmos:true,
		//upkeep:{'coin':0.2},
		modes:{
			'sugar':{name:'Extract sugar out of cane',icon:[15,2,'magixmod'],desc:'This artisan will only extract [sugar] out of [Sugar cane]. At least he will craft needed ingredient of tasty [Juices].',use:{'worker':1}},
			'sugarbeet':{name:'Extract sugar out of beet',icon:[10,11,'magixmod'],desc:'This artisan will only extract [sugar] out of [Beet]. At least he will craft needed ingredient of tasty [Juices].',use:{'worker':1}},
			'juices':{name:'Craft juices',icon:[14,3,'magixmod'],desc:'This artisan will craft [Juices] out of [Watermelon] or [Berries] , [sugar] and [water]. Have a good taste. <b>:)',use:{'worker':1}},
		},
		effects:[
			{type:'convert',from:{'Sugar cane':1.5},into:{'sugar':1},every:5,mode:'sugar'},
			{type:'convert',from:{'Beet':1},into:{'sugar':0.125},every:5,mode:'sugarbeet'},
			{type:'convert',from:{'sugar':1,'Berries':0.95,'water':1},into:{'Berry juice':1},every:5,mode:'juices'},
			{type:'convert',from:{'sugar':1,'Watermelon':0.4,'water':2},into:{'Watermelon juice':2},every:5,mode:'juices'},
			{type:'convert',from:{'sugar':1,'fruit':0.4,'water':2},into:{'Fruit juice':2},every:5,mode:'juices',req:{'Moar juices':true}},
			{type:'convert',from:{'sugar':3,'fruit':0.9,'water':6,'Berries':1,'Watermelon':0.25},into:{'Fruit juice':12,'Berry juice':8,'Watermelon juice':9},every:5,mode:'juices',req:{'Moar juices':true},chance:1/20},
		],
		req:{'Crafting a juice':true},
		category:'crafting',
	});
		new G.Unit({
		name:'First aid healer',
		desc:'@uses [Bandage]s,[Plaster]s,[Triangular bandage]s to heal the [wounded] mainly and slowly. Sometimes may use herb to heal wounded if these things are not enough.<>The [healer] knows the solution to bunch of wound types so it makes pain stay away.',
		icon:[18,1,'magixmod'],
		cost:{},
		use:{'worker':1},
		staff:{'stone tools':1},
		upkeep:{'coin':0.2},
		effects:[
			{type:'convert',from:{'wounded':1,'herb':2.5,'Bandage':1,'Plaster':0.5,'Triangular bandage':0.33},into:{'adult':1,'health':0.44},chance:4/10,every:10},
			{type:'gather',context:'gather',what:{'health':0.1},req:{'Nutrition':true}},
		],
		req:{'healing':true,'first aid':true},
		category:'spiritual',
		priority:5,
	});
	
		new G.Unit({
		name:'Berry farm',
		desc:'@Specialized farm which will harvest tasty [Berries] at the better rate than [gatherer].',
		icon:[14,1,'magixmod'],
		cost:{'Berry seeds':200},
		req:{'Farms in the new land':true},
		upkeep:{'water':12},
		use:{'worker':8,'Land of the Plain Island':35},
		category:'plainisleunit',
		effects:[
			{type:'gather',context:'gather',what:{'Berries':5.3}},
			{type:'mult',value:1.17,req:{'Crafting & farm rituals':'on'}},
			{type:'mult',value:8,req:{'God\'s trait #2 Berry rush':true}}
		],
	});
		new G.Unit({
		name:'Watermelon farm',
		desc:'@Specialized farm which will harvest tasty [Watermelon] at the better rate than [gatherer].',
		icon:[14,2,'magixmod'],
		cost:{'Watermelon seeds':200},
		req:{'Farms in the new land':true},
		use:{'worker':8,'Land of the Plain Island':35},
		upkeep:{'water':12},
		category:'plainisleunit',
		effects:[
			{type:'gather',context:'gather',what:{'Watermelon':0.14}},
			{type:'mult',value:1.17,req:{'Crafting & farm rituals':'on'}}
		],
	});
		new G.Unit({
		name:'Sugar cane farm',
		desc:'@Specialized farm which will harvest useful in [Juices] crafting [Sugar cane] at the better rate than [gatherer].',
		icon:[14,7,'magixmod'],
		cost:{'Sugar cane':500},
		req:{'Farms in the new land':true,'Farm of the Sugar cane':true},
		use:{'worker':8,'Land of the Plain Island':35,'Instructor':1},
		upkeep:{'water':36},
		category:'plainisleunit',
		effects:[
			{type:'gather',context:'gather',what:{'Sugar cane':0.85}},
			{type:'mult',value:1.17,req:{'Crafting & farm rituals':'on'}}
		],
	});
		new G.Unit({
		name:'Beet farm',
		desc:'@Specialized farm which will harvest useful in [Juices] crafting [Beet] - another source of [sugar].',
		icon:[9,11,'magixmod'],
		cost:{'Beet seeds':300},
		req:{'Farms in the new land':true,'Farm of the Beet':true},
		use:{'worker':8,'land':15},
		upkeep:{'water':14},
		category:'production',
		effects:[
			{type:'gather',context:'gather',what:{'Beet':0.1}},
			{type:'mult',value:1.17,req:{'Crafting & farm rituals':'on'}}
		],
	});
//New Wonder. The portal to Plain Island. If possible i make it being built same way as Mausoleum
		new G.Unit({
    		name:'Plain island portal',
    		desc:'@opens a portal to a huge <b>Plain Island</b>A creation made of ideas of wizards and dreams of population more exactly kids.//A Dream comes real. You will grant +25000 max land upon activation of portal',
    		wideIcon:[7,3,'magixmod'],
    		cost:{'precious building materials':5000,'insight':1500,'faith':100,'Fire essence':45000,'Water essence':47500,'Dark essence':37500,'Wind essence':27500,'Lightning essence':37750,'Nature essence':100750},
    		effects:[
    			{type:'provide',what:{'Land of the Plain Island':25000}},
			{type:'provide',what:{'Plain Island emblem':1}},
    		],
    		use:{'land':10},
		messageOnStart:'You built a portal to Plain Island. It is big isle. On this island you may build houses , mines and other but not these one you built in your mortal world. You will unlock new category of buildings, a little bit better but limited housing. You may gain new minerals, who know maybe new food or anything else you did not see anytime earlier.',
    		req:{'First portal to new world':true,'Belief in portals':true},
    		limitPer:{'land':100000000000000},//It is something like max 1
    		category:'dimensions',
	});
		new G.Unit({
    		name:'Portal to the Paradise',
    		desc:'@opens a portal to a huge <b>God\'s Paradise</b>A very hard project, allowed by God.//A Dream to see Paradise, angels and much, much more comes real. You will grant +26500 paradise land at your own but you <b>must</b> follow some of God\'s rules.',
    		wideIcon:[7,4,'magixmod'],
    		cost:{'precious building materials':35000,'insight':1500,'faith':250,'Fire essence':45000,'Water essence':47500,'Dark essence':37500,'Wind essence':27500,'Lightning essence':37750,'Nature essence':100750,'precious metal ingot':1e4},
    		effects:[
    			{type:'provide',what:{'Land of the Paradise':26500}},
			{type:'provide',what:{'Paradise emblem':1}},
    		],
    		use:{'land':10},
		messageOnStart:'You built a portal to Plain Island. It is big isle. On this island you may build houses , mines and other but not these one you built in your mortal world. You will unlock new category of buildings, a little bit better but limited housing. You may gain new minerals, who know maybe new food or anything else you did not see anytime earlier.',
    		req:{'Second portal to new world':true,'Belief in portals':true},
    		limitPer:{'land':100000000000000},//It is something like max 1
    		category:'dimensions',
	});
//New wonder. Temple of heaven.
		new G.Unit({
		name:'temple of heaven',
		desc:'@leads to the <b>Heavenly victory</b><>A mystical monument dedicated to angels, archangels and seraphins where.//A temple housing a tomb deep under its rocky platform, where the Temple\'s relics lie and there is last bastion of your religion if it will start fall. @The tower it does have is high, above clouds, despite fact there is cold on top some brave people may come up to prey its god, or listen heavenly symphonies and hums.',
		wonder:'temple of heaven',
		icon:[1,11,'magixmod'],
		wideIcon:[0,11,'magixmod'],
		cost:{'basic building materials':35000,'gem block':10},
		costPerStep:{'basic building materials':2500,'precious building materials':1250,'gem block':2,'concrete':25},
		steps:300,
		messageOnStart:'You begin the construction of the Temple. Its highest tower is a pass between land of people and sky of angels. No one may go on top unless it is coated. This temple will be last bastion of religion and a storage of relics. Your people with full of hope are building this mass, full of glory wonder.',
		finalStepCost:{'population':1000,'precious building materials':25000,'faith':100,'influence':75,'basic building materials':3000},
		finalStepDesc:'To complete the Temple, 1000 of your [population,People] and many more resources needed to finish Temple completely must be sacrificed to accompany you as servants in the afterlife and Angels of the Afterlife. Are you ready?',
		use:{'land':75},
		//require:{'worker':10,'stone tools':10},
		req:{'monument-building II':true},
		category:'wonder',
	});
	
	//Artisans will make wands for wizards. Mode for it.
		G.getDict('artisan').modes['Craftwands']={
			name:'Craft wands',
			icon:[6,4,'magixmod'],
			desc:'Your artisan will craft tool used by wizards. It is not any junk tool.',
			req:{'Wizardry':true},
			use:{'worker':1,'stone tools':2},
		};
		G.getDict('artisan').effects.push({type:'convert',from:{'stick':4,'stone':2},into:{'Wand':1},every:5,mode:'Craftwands'});
//Artisans will craft fishing nets for fishers
		G.getDict('artisan').modes['Craftnet']={
			name:'Craft fishing net',
			icon:[13,8,'magixmod'],
			desc:'Your artisan will craft [Fishing net]. Needs [Instructor] because net <b> must be strong. Will use [Dried leather] to make it stronger.',
			req:{'Fishing II':true},
			use:{'worker':1,'stone tools':2,'Instructor':1},
		};
		G.getDict('artisan').effects.push({type:'convert',from:{'Thread':35,'Dried leather':1},into:{'Fishing net':1},every:5,mode:'Craftnet'});
//Artisans will craft fishing nets for fishers
		G.getDict('artisan').modes['Craftink']={
			name:'Craft ink',
			icon:[18,6,'magixmod'],
			desc:'Your artisan will craft [Ink]. Will use water and [Black dye],[Blue dye] or [Brown dye].',
			req:{'Ink crafting':true},
			use:{'worker':1},
		};
		G.getDict('artisan').effects.push({type:'convert',from:{'Black dye':1,'mud':0.0015,'water':0.015},into:{'Ink':0.75},every:4,mode:'Craftink'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Brown dye':1,'mud':0.0015,'water':0.015},into:{'Ink':0.75},every:4,mode:'Craftink'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Blue dye':1,'mud':0.0015,'water':0.015},into:{'Ink':0.75},every:4,mode:'Craftink'});
//Artisans will craft bandages, plasters for First Aid Healer.
		G.getDict('artisan').modes['CraftFirstAid']={
			name:'Craft first aid things',
			icon:[16,10,'magixmod',15,10,'magixmod'],
			desc:'Your artisan will craft equipment for [First aid healer]. He will craft: [Triangular bandage],[Bandage],[Plaster].',
			req:{'first aid':true},
			use:{'worker':1,'stone tools':1},
		};
		G.getDict('artisan').effects.push({type:'convert',from:{'Thread':1.5,'herb':0.75},into:{'Bandage':1},every:5,mode:'CraftFirstAid'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Thread':0.5,'herb':1},into:{'Plaster':1},every:5,mode:'CraftFirstAid'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Thread':2,'herb':1.5,'hide':1},into:{'Triangular bandage':1},every:7,mode:'CraftFirstAid'});

//4 modes for Artisans. Each of them can convert 8 different flowers into its dyes.
		G.getDict('artisan').modes['Make dyes from flowers(Set 1)']={
			name:'Make dyes from flowers(Set 1)',
			desc:'Your artisan will convert these flowers into dyes: [Lavender],[Salvia],[Bachelor\'s button],[Desert rose],[Cosmos],[Pink rose],[Pink tulip],[Coreopsis].',
			req:{'plant lore':true},
			use:{'worker':1},
			icon:[11,7,'magixmod'],
		};

		G.getDict('artisan').effects.push({type:'convert',from:{'Lavender':2},into:{'Purple dye':1},every:5,mode:'Make dyes from flowers(Set 1)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Salvia':3},into:{'Magenta dye':1},every:5,mode:'Make dyes from flowers(Set 1)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Bachelor\'s button':2},into:{'Blue dye':1},every:5,mode:'Make dyes from flowers(Set 1)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Desert rose':2},into:{'Magenta dye':1},every:5,mode:'Make dyes from flowers(Set 1)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Cosmos':2},into:{'Magenta dye':1},every:5,mode:'Make dyes from flowers(Set 1)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Pink rose':3},into:{'Pink dye':1},every:5,mode:'Make dyes from flowers(Set 1)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Pink tulip':2},into:{'Pink dye':1},every:5,mode:'Make dyes from flowers(Set 1)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Coreopsis':2},into:{'Yellow dye':1},every:5,mode:'Make dyes from flowers(Set 1)'});
//Set 2
		G.getDict('artisan').modes['Make dyes from flowers(Set 2)']={
			name:'Make dyes from flowers(Set 2)',
			desc:'Your artisan will convert these flowers into dyes: [Crown imperial],[Cyan rose],[Himalayan blue poopy],[Cockscomb],[Red tulip],[Green Zinnia],[cactus],[Lime rose]. @Bonus: While crafting dyes out of [cactus] you will get its spikes and a dye as usual.',
			req:{'plant lore':true},
			use:{'worker':1},
			icon:[11,7,'magixmod'],
		};	
		G.getDict('artisan').effects.push({type:'convert',from:{'Crown imperial':2},into:{'Orange dye':1},every:5,mode:'Make dyes from flowers(Set 2)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Cyan rose':2},into:{'Cyan dye':1},every:5,mode:'Make dyes from flowers(Set 2)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Himalayan blue poopy':2},into:{'Cyan dye':1},every:5,mode:'Make dyes from flowers(Set 2)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Cockscomb':2},into:{'Red dye':1},every:5,mode:'Make dyes from flowers(Set 2)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Red tulip':2},into:{'Red dye':1},every:5,mode:'Make dyes from flowers(Set 2)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Green Zinnia':3},into:{'Green dye':1},every:5,mode:'Make dyes from flowers(Set 2)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'cactus':2},into:{'Green dye':1,'Cactus spikes':3},every:5,mode:'Make dyes from flowers(Set 2)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Lime rose':2},into:{'Lime dye':1},every:5,mode:'Make dyes from flowers(Set 2)'});
//Set 3
		G.getDict('artisan').modes['Make dyes from flowers(Set 3)']={
			name:'Make dyes from flowers(Set 3)',
			desc:'Your artisan will convert these flowers into dyes: [Lime tulip],[Azure bluet],[Daisy],[Sunflower],[Dandelion],[Black lily],[Black Hollyhock],[Cattail]. @Bonus: While crafting dyes out of [Sunflower] you will get its edible [Sunflower seeds] and a dye as usual.',
			req:{'plant lore':true},
			use:{'worker':1},
			icon:[11,7,'magixmod'],
		};	
		G.getDict('artisan').effects.push({type:'convert',from:{'Lime tulip':2},into:{'Lime dye':1},every:5,mode:'Make dyes from flowers(Set 3)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Azure bluet':4},into:{'Light gray dye':1},every:5,mode:'Make dyes from flowers(Set 3)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Daisy':2},into:{'Light gray dye':1},every:5,mode:'Make dyes from flowers(Set 3)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Sunflower':1},into:{'Yellow dye':1,'Sunflower seeds':3},every:7,mode:'Make dyes from flowers(Set 3)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Dandelion':2},into:{'Yellow dye':1},every:5,mode:'Make dyes from flowers(Set 3)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Black lily':3},into:{'Black dye':1},every:5,mode:'Make dyes from flowers(Set 3)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Black Hollyhock':2},into:{'Black dye':1},every:5,mode:'Make dyes from flowers(Set 3)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Cattail':2},into:{'Brown dye':1},every:5,mode:'Make dyes from flowers(Set 3)'});
//Set 4
		G.getDict('artisan').modes['Make dyes from flowers(Set 4)']={
			name:'Make dyes from flowers(Set 4)',
			icon:[11,7,'magixmod'],
			desc:'Your artisan will convert these flowers into dyes: [Flax],[Blue orchid],[White tulip],[Lily of the Valley],[Gray rose],[Gray tulip],[Brown flower].',
			req:{'plant lore':true},
			use:{'worker':1},
		};	
		G.getDict('artisan').effects.push({type:'convert',from:{'Flax':3},into:{'Light blue dye':1},every:5,mode:'Make dyes from flowers(Set 4)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Blue orchid':2},into:{'Light blue dye':1},every:5,mode:'Make dyes from flowers(Set 4)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'White tulip':2},into:{'White dye':1},every:5,mode:'Make dyes from flowers(Set 4)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Lily of the Valley':3},into:{'White dye':1},every:5,mode:'Make dyes from flowers(Set 4)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Brown flower':2},into:{'Brown dye':1},every:5,mode:'Make dyes from flowers(Set 4)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Gray rose':3},into:{'Gray dye':1},every:5,mode:'Make dyes from flowers(Set 4)'});
		G.getDict('artisan').effects.push({type:'convert',from:{'Gray tulip':2},into:{'Gray dye':1},every:5,mode:'Make dyes from flowers(Set 4)'});
	//After researching Hunting II Artisans with Craft bows mode will now be able to craft Crossbows and ammo to it
		G.getDict('artisan').effects.push({type:'convert',from:{'stick':3,'stone':2},into:{'Crossbow':1},every:5,req:{'Hunting II':true},mode:'bows'});
		G.getDict('artisan').effects.push({type:'convert',from:{'lumber':1,'stone':25},into:{'Crossbow belt':20},every:5,req:{'Hunting II':true},mode:'bows'});
//Bookcrafting
		G.getDict('artisan').modes['Craftbook']={
			name:'Craft book',
			icon:[13,12,'magixmod'],
			desc:'Your artisan will craft [Empty book,books].',
			req:{'Bookcrafting':true},
			use:{'worker':1,'stone tools':1},
		};
		G.getDict('artisan').effects.push({type:'convert',from:{'Paper':30,'hide':1},into:{'Empty book':1},every:7,mode:'Craftbook'});
	//Kilns will be able to make glass out of sand
		G.getDict('kiln').modes['Craftglass']={
			name:'Craft glass',
			icon:[4,8],
			desc:'Your kiln will now use sand to make a glass.',
			req:{'Crafting a glass':true},
			use:{'worker':1,'stone tools':1},
		};	
		G.getDict('kiln').effects.push({type:'convert',from:{'sand':8},into:{'glass':2},every:5,mode:'Craftglass'});
//Furnaces will be now able to smelt Cobalt, Nickel and Platinum
		G.getDict('furnace').modes['Cobalt smelting']={
			name:'Cobalt smelting',
			icon:[14,0,'magixmod'],
			desc:'Cast 1[Cobalt ingot] out of 8[Cobalt ore].',
			req:{'Cobalt-working':true},
			use:{'worker':2,'metal tools':2,'stone tools':1},
		};	
		G.getDict('furnace').effects.push({type:'convert',from:{'Cobalt ore':8},into:{'Cobalt ingot':1},every:5,mode:'Cobalt smelting'});
		G.getDict('furnace').modes['nickel']={
			name:'Nickel smelting',
			icon:[10,9],
			desc:'Cast 1[hard metal ingot] out of 6[nickel ore]s each.',
			req:{'prospecting II':true,'nickel-working':true},
			use:{'worker':2,'metal tools':2},
		};	
		G.getDict('furnace').effects.push({type:'convert',from:{'nickel ore':6},into:{'hard metal ingot':1},every:5,mode:'nickel'});
		G.getDict('furnace').modes['platinum']={
			name:'Platinum smelting',
			icon:[3,11,'magixmod'],
			desc:'Cast 1[platinum ingot] out of 5[platinum ore]s each.',
			req:{'prospecting II':true,'platinum-working':true},
			use:{'worker':2,'metal tools':2},
		};	
		G.getDict('furnace').effects.push({type:'convert',from:{'platinum ore':5},into:{'platinum ingot':1},every:5,mode:'platinum'});
//Carving wooden statuettes
		G.getDict('carver').modes['Carve wooden statuettes']={
			name:'Carve wooden statuettes',
			icon:[13,1,'magixmod'],
			desc:'Your carver will now use carve statuettes out of [log].',
			use:{'worker':1,'knapped tools':1},
		};	
		G.getDict('carver').effects.push({type:'convert',from:{'log':1},into:{'Wooden statuette':1,'Scobs':3},every:7,mode:'Carve wooden statuettes'});
//Carver will be able to smash granite, diorite, andesite blocks and craft them
		G.getDict('carver').modes['gdablockscraft']={
			name:'Cut other stones',
			icon:[4,12,'magixmod'],
			desc:'Your carver will craft [cut granite] , [cut diorite] , [cut andesite] out of 9 [Granite] , [Diorite] , [Andesite] each.',
			use:{'worker':1,'knapped tools':1},
			req:{'masonry':true},
		};	
		G.getDict('carver').effects.push({type:'convert',from:{'Granite':9},into:{'cut granite':1},every:5,mode:'gdablockscraft'});
		G.getDict('carver').effects.push({type:'convert',from:{'Diorite':9},into:{'cut diorite':1},every:5,mode:'gdablockscraft'});
		G.getDict('carver').effects.push({type:'convert',from:{'Andesite':9},into:{'cut andesite':1},every:5,mode:'gdablockscraft'});
		G.getDict('carver').modes['gdablockssmash']={
			name:'Smash other stone blocks',
			icon:[7,12,'magixmod'],
			desc:'Your carver will smash [cut granite] , [cut diorite] , [cut andesite] into 9 [Granite] , [Diorite] , [Andesite].',
			use:{'worker':1,'knapped tools':1},
			req:{'masonry':true},
		};	
		G.getDict('carver').effects.push({type:'convert',from:{'cut granite':1},into:{'Granite':9},every:5,mode:'gdablockssmash'});
		G.getDict('carver').effects.push({type:'convert',from:{'cut diorite':1},into:{'Diorite':9},every:5,mode:'gdablockssmash'});
		G.getDict('carver').effects.push({type:'convert',from:{'cut andesite':1},into:{'Andesite':9},every:5,mode:'gdablockssmash'});
//While woodcutter cuts tree to grant logs
		G.getDict('woodcutter').effects.push({type:'gather',context:'gather',what:{'Scobs': 0.1},amount:1,max:1});
//Weaving colored clothing
		G.getDict('clothier').modes['Weave leather colored clothing']={
			name:'Weave leather colored clothing',
			icon:[13,0,'magixmod'],
			desc:'Your clothier will now weave [leather] but colored clothing.',
			req:{'weaving':true},
			use:{'worker':1,'stone tools':1},
		};	
		G.getDict('clothier').effects.push({type:'convert',from:{'leather':2,'Dyes':3},into:{'Colored clothing':1},every:6,mode:'Weave leather colored clothing'});
		G.getDict('clothier').modes['Weave fiber colored clothing']={
			name:'Weave fiber colored clothing',
			icon:[13,0,'magixmod'],
			desc:'Your clothier will now weave fiber but colored clothing.',
			req:{'weaving':true},
			use:{'stone tools':1},
		};
		G.getDict('clothier').effects.push({type:'convert',from:{'herb':52,'Dyes':4},into:{'Colored clothing':1},every:6,mode:'Weave fiber colored clothing'});
		G.getDict('clothier').modes['Dye already made clothing']={
			name:'Dye already made clothing',
			icon:[13,0,'magixmod'],
			desc:'Your clothier will now dye already made [basic clothes] making them become[Colored clothing].',
			req:{'weaving':true},
			use:{'stone tools':1},
		};
		G.getDict('clothier').effects.push({type:'convert',from:{'basic clothes':1,'Dyes':4},into:{'Colored clothing':1},every:6,mode:'Dye already made clothing'});
		G.getDict('clothier').modes['Craft thread']={
			name:'Craft thread',
			icon:[13,9,'magixmod'],
			desc:'Your clothier will now craft [Thread] out of [herb].',
			req:{'Sewing II':true},
			use:{'stone tools':1},
		};
		G.getDict('clothier').effects.push({type:'convert',from:{'herb':18},into:{'Thread':3},every:6,mode:'Craft thread'});
//Hunter will now be able to hunt animals with Crossbow
			G.getDict('hunter').modes['Crossbow hunting']={
			name:'Crossbow hunting',
			icon:[13,6,'magixmod'],
			desc:'Hunt animals with crossbows.',
			req:{'Hunting II':true},
			use:{'worker':1,'Crossbow':1,'Crossbow belt':150},
		};
		G.getDict('hunter').effects.push({type:'gather',context:'hunt',amount:5,max:6,mode:'Crossbow hunting'});
//Quarry's mode
			G.getDict('quarry').modes['quarryotherstones']={
			name:'Quarry other stones',
			icon:[3,12,'magixmod'],
			desc:'Strike the Earth for other than common [cut stone] stones.',
			req:{'quarrying II':true},
			use:{'worker':3,'metal tools':3},
		};
		G.getDict('quarry').effects.push({type:'gather',context:'quarry',what:{'cut granite':5},mode:'quarryotherstones'});
		G.getDict('quarry').effects.push({type:'gather',context:'quarry',what:{'cut diorite':5},max:6,mode:'quarryotherstones'});
		G.getDict('quarry').effects.push({type:'gather',context:'quarry',what:{'cut andesite':5},max:6,mode:'quarryotherstones'});
//Fisher can fish with new fishing nets
			G.getDict('fisher').modes['Net fishing']={
			name:'Net fishing',
			icon:[13,8,'magixmod'],
			desc:'Catch fish with [Fishing net].',
			req:{'Fishing II':true},
			use:{'worker':1,'Fishing net':1},
		};
		G.getDict('fishing').effects.push({type:'gather',context:'gather',what:{'Seafood':5},amount:5,max:6,mode:'Net fishing'});
//2 new modes for potters. First one for precious pots, second for potion pots.
		G.getDict('potter').modes['Craft precious pots']={
			name:'Craft precious pots',
			icon:[15,8,'magixmod'],
			desc:'Your potter will craft [Precious pot] out of both [clay] and [mud].',
			req:{'Precious pottery':true},
			use:{'worker':1,'knapped tools':1,'stone tools':1,'Instructor':0.33},
		};	
		G.getDict('potter').effects.push({type:'convert',from:{'clay':5,'mud':12,'fire pit':0.03},into:{'Precious pot':1},every:3,repeat:2,mode:'Craft precious pots'});
		G.getDict('potter').modes['Craft potion pots']={
			name:'Craft potion pots',
			icon:[14,8,'magixmod'],
			desc:'Your potter will craft [Potion pot] out of both [clay] and [mud]. These pots do not provide additional [food storage].',
			req:{'Precious pottery':true},
			use:{'worker':1,'knapped tools':1,'stone tools':1,'Instructor':0.5},
		};	
		G.getDict('potter').effects.push({type:'convert',from:{'clay':4,'mud':11,'fire pit':0.025},into:{'Potion pot':1},every:3,repeat:1,mode:'Craft potion pots'});
//4 modes for blacksmiths so they can forge armor/weapons out of soft/hard metals
		G.getDict('blacksmith workshop').modes['forgeweapon']={
			name:'Forge weapons out of soft metals',
			icon:[15,11,'magixmod'],
			desc:'Forge [metal weapons] out of 2[soft metal ingot]s each.',
			req:{'Weapon blacksmithery':true},
			use:{'worker':1,'metal tools':1,'stone tools':1},
		};	
		G.getDict('blacksmith workshop').effects.push({type:'convert',from:{'soft metal ingot':2},into:{'metal weapons':1},repeat:2,mode:'forgeweapon'});
		G.getDict('blacksmith workshop').modes['forgeweaponhard']={
			name:'Forge weapons out of hard metals',
			icon:[15,11,'magixmod'],
			desc:'Forge [metal weapons] out of 1[hard metal ingot] each.',
			req:{'Weapon blacksmithery':true},
			use:{'worker':1,'metal tools':1,'stone tools':1},
		};	
		G.getDict('blacksmith workshop').effects.push({type:'convert',from:{'hard metal ingot':1},into:{'metal weapons':1},every:3,repeat:1,mode:'forgeweaponhard'});
		G.getDict('blacksmith workshop').modes['forgearmor']={
			name:'Forge armor out of soft metals',
			icon:[16,11,'magixmod'],
			desc:'Forge [armor set] out of 8[soft metal ingot]s each.',
			req:{'Armor blacksmithery':true},
			use:{'worker':1,'metal tools':1,'stone tools':1,'Instructor':0.25},
		};	
		G.getDict('blacksmith workshop').effects.push({type:'convert',from:{'soft metal ingot':8},into:{'armor set':1},every:4,mode:'forgearmor'});
		G.getDict('blacksmith workshop').modes['forgearmorhard']={
			name:'Forge armor out of hard metals',
			icon:[16,11,'magixmod'],
			desc:'Forge [armor set] out of 5[hard metal ingot] each.',
			req:{'Armor blacksmithery':true},
			use:{'worker':1,'metal tools':1,'stone tools':1,'Instructor':0.25},
		};	
		G.getDict('blacksmith workshop').effects.push({type:'convert',from:{'hard metal ingot':5},into:{'armor set':2},every:4,mode:'forgearmorhard'});
		G.getDict('blacksmith workshop').modes['platinum blocks']={
			name:'Craft platinum blocks',
			icon:[4,11,'magixmod'],
			desc:'Forge [platinum block]s out of 10[platinum ingot] each.',
			req:{'platinum-working':true},
			use:{'worker':1,'metal tools':1,'stone tools':1},
		};	
		G.getDict('blacksmith workshop').effects.push({type:'convert',from:{'platinum ingot':10},into:{'platinum block':1},every:4,mode:'platinum blocks'});
//Firekeeper can set fires with help of Fire essence
		G.getDict('firekeeper').modes['firesfromessence']={
			name:'Set up fires out of its essence',
			icon:[0,2,'magixmod'],
			desc:'Craft 2[fire pit]s with use of: 1[Fire essence],13[stick]s',
			req:{'Wizard complex':true},
			use:{'worker':1,'Wand':1,'knapped tools':1},
		};	
		G.getDict('firekeeper').effects.push({type:'convert',from:{'Fire essence':1,'stick':13},into:{'fire pit':5},mode:'firesfromessence'});
//Nickel mines
		G.getDict('mine').modes['nickel']={
			name:'Nickel',
			icon:[9,12,'magixmod'],
			desc:'Mine for [nickel ore] with 5x efficiency.',
			req:{'prospecting II':true},
			use:{'worker':3,'metal tools':3},
		};	
		G.getDict('mine').effects.push({type:'gather',context:'mine',what:{'nickel ore':40},max:25,mode:'nickel'});
//Other stones prospected mine
		G.getDict('mine').modes['ostones']={
			name:'Other stones',
			icon:[6,12,'magixmod'],
			desc:'Mine for other stones with 3x efficiency than common [stone].',
			req:{'prospecting II':true},
			use:{'worker':3,'metal tools':3},
		};	
		G.getDict('mine').effects.push({type:'gather',context:'mine',what:{'Granite':30},max:25,mode:'ostones'});
		G.getDict('mine').effects.push({type:'gather',context:'mine',what:{'Diorite':30},max:25,mode:'ostones'});
		G.getDict('mine').effects.push({type:'gather',context:'mine',what:{'Andesite':30},max:25,mode:'ostones'});
//2 modes for architect
		G.getDict('architect').modes['Brickhouser']={
			name:'Brickhouse building',
			icon:[5,1,'magixmod'],
			desc:'This architect will build more useful housing like [Brick house with a silo]',
			use:{'worker':1},
			req:{'Architects knowledge':true,'city planning':true}};
		G.getDict('architect')
		effects:[
		{type:'function',func:function(me){
		var wiggleRoom=3;
		var homeless=Math.max(0,(G.getRes('population').amount+wiggleRoom)-G.getRes('housing').amount);
		if (toMake>0 && G.canBuyUnitByName('house',toMake))
		{
			G.buyUnitByName('Brick house with a silo',toMake,true);
		}
	},mode:'Brickhouser'}
],	
		G.getDict('architect').modes['Blockhouser']={
			name:'Blockhouse building',
			icon:[9,1,'magixmod'],
			desc:'This architect will build more advanced [housing,housing] like [Blockhouse] .',
			use:{'worker':1},
			req:{'Architects knowledge':true,'city planning':true}},
		G.getDict('architect')
		effects:[
		{type:'function',func:function(me){
		var wiggleRoom=3;
		var homeless=Math.max(0,(G.getRes('population').amount+wiggleRoom)-G.getRes('housing').amount);
		if (toMake>0 && G.canBuyUnitByName('house',toMake))
		{
			G.buyUnitByName('Blockhouse',toMake,true);
		}
	},mode:'Blockhouser'}
],	
//Temple achiev
		new G.Achiev({
		tier:1,
		name:'Heavenly',
		icon:[1,11,'magixmod'],
		desc:'Your soul has been sent to Paradise as archangel with power of top Temple tower in an beautiful stone monument the purpose of which takes root in a pure religious thought.',
		fromUnit:'temple of heaven',
		effects:[
			{type:'addFastTicksOnStart',amount:300},
			{type:'addFastTicksOnResearch',amount:10}	
		],
	});

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
	//Category for buildings which can only be built on lands of Paradise
	G.unitCategories.unshift({
			id:'paradiseunit',
			name:'Paradise'
		});
	//Category for Alchemy
	G.unitCategories.unshift({
			id:'alchemy',
			name:'Alchemy'
		});
	G.policyCategories.push(
			{id:'Florists',name:'Florists gathering'}
	);
	G.policyCategories.push(
			{id:'Education',name:'Education'}
	);
	//
	G.knowCategories.push(
			{id:'gods',name:'God\'s traits'}
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
		new G.Policy({
		name:'Crafting & farm rituals',
		desc:'Improves [Paper-crafting shack] , [Well of mana] and <b>Farms</b> efficiency by 17%. Consumes 15 [faith] & 15 [influence] every 15 days; will stop if you run out.',
		icon:[8,12,14,2,'magixmod'],
		cost:{'faith':5,'influence':5},
		startMode:'off',
		req:{'ritualism':true,'papercrafting':true},
		category:'faith',
	});
		new G.Policy({
		name:'Teach alchemists',
		desc:'Will start teach alchemists. In short this option will allow you to start learning [adult] to become [Alchemist].',
		icon:[12,9,'magixmod',12,5,'magixmod'],
		cost:{'influence':15},
		startMode:'on',
		req:{'Will to know more':true},
		category:'Education',
	});
		new G.Policy({
		name:'Alchemy for children',
		desc:'Will start teach children to become [Child alchemist]. @Note: teaching children will make more [wounded],[sick] or even dead, because of drinking too strong potion by children.',
		icon:[12,9,'magixmod',12,7,'magixmod'],
		cost:{'influence':15},
		startMode:'off',
		req:{'Will to know more':true},
		category:'Education',
	});
		new G.Policy({
		name:'School of Alchemy - length of education cycle',
		desc:'The shorter length you choose the accidents rate with [Alchemists] as a victim will grow slightly.',
		icon:[2,0,'magixmod'],
		cost:{'influence':15},
		startMode:'medium',
		modes:{
			'short':{name:'Short',desc:'Teaching 1 [Alchemist] or 1 [Child alchemist] takes 400 days. Choosing this length you will increase rate of accidents at alchemy by 33%'},
			'medium':{name:'Medium',desc:'Teaching 1 [Alchemist] or 1 [Child alchemist] takes 600 days. Normal accident rate.'},
			'long':{name:'Long',desc:'Teaching 1 [Alchemist] or 1 [Child alchemist] takes 800 days. Choosing this length you will decrease rate of accidents at alchemy by 33%.'},
		},
		req:{'Will to know more':true},
		category:'Education',
	});
		new G.Policy({
		name:'Gather roses',
		desc:'Makes florist start gathering all types of rose.',
		icon:[0,7,'magixmod'],
		cost:{'influence':15},
		startMode:'off',
		req:{'plant lore':true},
		category:'Florists',
	});
		new G.Policy({
		name:'drink spoiled juice',
		desc:'Your people will drink [Spoiled juices] no matter when clean [water] gets scarce or not, with dire consequences for health and morale.',
		icon:[6,12,14,5,'magixmod'],
		cost:{'influence':3},
		startMode:'off',
		req:{'rules of food':true,'Crafting a juice':true},
		category:'food',
	});
	//New gains for gatherer
		G.getDict('gatherer').effects.push({type:'gather',context:'gather',what:{'Berry seeds': 0.005},amount:1,max:1});
		G.getDict('gatherer').effects.push({type:'gather',context:'gather',what:{'Beet seeds': 0.005},amount:1,max:1});
		G.getDict('gatherer').effects.push({type:'gather',context:'gather',what:{'Watermelon seeds':0.0001},amount:1,max:1});
//Healer generates health by trait and research(it is temporary)
		G.getDict('healer').effects.push({type:'gather',context:'gather',what:{'health': 0.008},amount:1,max:1,req:{'Nutrition':true}});
		G.getDict('healer').effects.push({type:'gather',context:'gather',what:{'health': 0.001},amount:1,max:1,req:{'first aid':true}}); 
//Effects of "Spell of Capacity"
		G.getDict('warehouse').effects.push({type:'provide',what:{'material storage debug':800},req:{'Spell of capacity':true}});
		G.getDict('barn').effects.push({type:'provide',what:{'food storage debug pots':800},req:{'Spell of capacity':true}});
		G.getDict('granary').effects.push({type:'provide',what:{'food storage debug pots':200},req:{'Spell of capacity':true}});
		G.getDict('stockpile').effects.push({type:'provide',what:{'material storage debug':200},req:{'Spell of capacity':true}});
		G.getDict('storage pit').effects.push({type:'provide',what:{'food storage debug pots':80,'material storage debug':80},req:{'Spell of capacity':true}});
//Effects of better house construction research
		G.getDict('house').effects.push({type:'provide',what:{'housing':0.125},req:{'Better house construction':true}});
		G.getDict('Brick house with a silo').effects.push({type:'provide',what:{'housing':0.2},req:{'Better house construction':true}});
//Effects of God's trait number one
		G.getDict('hovel').effects.push({type:'provide',what:{'housing':0.5},req:{'God\'s trait #1 Housing':true}});
		G.getDict('hut').effects.push({type:'provide',what:{'housing':1},req:{'God\'s trait #1 Housing':true}});
		G.getDict('bamboo hut').effects.push({type:'provide',what:{'housing':1},req:{'God\'s trait #1 Housing':true}});
		G.getDict('mud shelter').effects.push({type:'provide',what:{'housing':1},req:{'God\'s trait #1 Housing':true}});
		G.getDict('branch shelter').effects.push({type:'provide',what:{'housing':1},req:{'God\'s trait #1 Housing':true}});
////////////////////////////////////////////
//Fixes copied out of heritage mod
	G.fixTooltipIcons=function()
	{
		G.parse=function(what)
		{
			var str='<div class="par">'+((what
			.replaceAll(']s',',*PLURAL*]'))
			.replace(/\[(.*?)\]/gi,G.parseFunc))
			.replaceAll('http(s?)://','http$1:#SLASH#SLASH#')
			.replaceAll('//','</div><div class="par">')
			.replaceAll('#SLASH#SLASH#','//')
			.replaceAll('@','</div><div class="par bulleted">')
			.replaceAll('<>','</div><div class="divider"></div><div class="par">')+'</div>';
			return str;
		}
	}
	G.initializeFixIcons=function()
	{
		if (G.parse("http://").search("http://") == -1)
		{
			G.fixTooltipIcons();
			setTimeout(G.initializeFixIcons,500);	// check again to make sure this version of the function stays applied during page load
		}
	}
	G.initializeFixIcons();
//Magix tab
G.writeMSettingButton=function(obj)
	{
		G.pushCallback(function(obj){return function(){
			var div=l('MsettingButton-'+obj.id);
			if (div)
			{
				var me=G.getMSetting(obj.name);
				if (me.binary==true)
				{
					var on = (G.checkMSetting(obj.name)=="on");

					div.innerHTML=obj.text||me.name;
					if (on) div.classList.add('on');
				}

				div.onclick=function(div,name,value,siblings){return function(){G.clickMSettingButton(div,name,value,siblings);}}(div,obj.name,obj.value,obj.siblings);
				if (obj.tooltip) G.addTooltip(div,function(str){return function(){return str;};}(obj.tooltip),{offY:-8});
			}
		}}(obj));
		return '<div class="button" id="msettingButton-'+obj.id+'"></div>';
	}

	G.clickmSettingButton=function(div,name,value,siblings)
	{
		var me=G.getmSetting(name);

		if (me.binary)
		{
			if (G.checkmSetting(name)=="on")
			{
				G.setmSettingMode(me,me.modes["off"]);
			}
			else{
				G.setmSettingMode(me,me.modes["on"]);
			}
		}
		else
		{
			G.setmSettingMode(me,me.modes[value]);
		}

		if (div)
		{
			var on=(me.mode.id=="on");
			if (on) div.classList.add('on'); else div.classList.remove('on');
			if (siblings)
			{
				for (var i in siblings)
				{
					if (('msettingButton-'+siblings[i])!=div.id)
					{l('msettingButton-'+siblings[i]).classList.remove('on');}
				}
			}
		}
	}

	// A function to write each category of settings and buttons
	G.writeMSettingCategories=function()
	{
		var str='';
		for (c in G.mSettingCategory)
		{
			if (c=='hidden') continue;
			var category=G.mSettingCategory[c];
			str+='<div class="barred fancyText">'+category.displayName+'</div>';
			for (var i in G.mSetting)
			{
				var s = G.mSetting[i];
				if (s.hcategory == c)
				{
					if (s.type=='setting')
					{
						str+=G.writeSettingButton({
							id:s.id,
							name:s.name,
							text:s.displayName,
							tooltip:s.desc
						});
					} else {
						str+=G.writeMSettingButton({
							id:s.name,
							name:s.name,
							text:s.displayName,
							tooltip:s.desc,
						});
					}
				}
			}
			str+='<br /><br />';
		}
		return str;
	}

	// only add the tab once per page load (otherwise tab will duplicate itself with new game or mod reloading)
	for (t in G.tabs) {
		if (G.tabs[t].name=='Magix:About')
		{
			G.mSettingsLoaded = true;
		}
	}

	if (!G.HSettingsLoaded)
	{
		G.tabs.push({
			name:'Magix:About',
			id:'Magix:About',
			popup:true,
			addClass:'right',
			desc:'Options and information about the Magix mod.'
		});
		// Don't make assumptions about the existing tabs
		// (or another mod that does the same thing)
		// make sure everything is numbered and built properly
		for (var i=0;i<G.tabs.length;i++){G.tabs[i].I=i;}
		G.buildTabs();
		
	}

	G.tabPopup['Magix:About']=function()
	{
		var str='';
		str+='<div class="par">'+
		'<b>The Magix mod</b> is a mod for NeverEnding Legacy made by <b>pelletsstarPL</b>.'+'It is currently in semi-alpha, may feature strange and exotic bugs, and may be updated at any time.</div>'+'<div class="par">While in development, the mod may be unstable and subject to changes, but the overall goal is to '+
		'expand and improve the legacy with flexible, balanced, user-created content and improvements to existing mechanics.</div>'+
		'Below this description you will see something like Q&A with me.</div>'+
		'<div class="fancyText title">The Magix mod - why did I make this mod?</div>'+
		'<b>The Magix mod</b> has been made while i was wondering how legacy would look if last update was at February 2019(to 2017 it would be 3 more vanilla game updates) let\'s say.'+
		'I was checking bunch of mods and noticed... <b>There is none mod about magic... But I am gonna change it</b>.'+
		'As i said i did and effect of that is at your screen.'+
		'Even today i am proud of fruits of my creativity and time i sacrificed to make this entertaining mod.'+
		'I made this mod due to my hobby: IT. I like things like coding, networking. Who knows... maybe i will become expert of javascript.'+
		'<div class="fancyText title">Why does this mod have a lot of content?</div>'+
		'This mod has a lot of content thanks to my creativity.'+
		'Let\'s be serious. This mod will get more and more content sometime. These concepts, ideas... i have \'em a lot.'+
		'Not everything of my conceptions, imaginations will be added. I wanted to improve vanilla units too, hope you like it.'+
		'<div class="fancyText title">What will Magix get soon?</div>'+
		'I do not want to spoil and <b>ruin the fun</b> so i won\'t answer that question.:)'+
		'But i can say sooner or later if it will be <b>possible and reasonable</b> i may think about compatibilty with mods of other people.</div>'+
		'<div class="fancyText title">Will you add more wonders or portals?</div>'+
		'Yes i will... unless i run out of ideas so then i won\'t :D'+
		'<div class="fancyText title">How i can ask you by question which is not in Q&A there?</div>'+
		'Find me at <a href="https://discordapp.com/invite/cookie" target="_blank">Dashnet discord server</a><div>'+
		'<div class="barred fancyText"><a href="https://raw.githubusercontent.com/pelletsstarPL/Magixmod/master/Changelog" target="_blank">Update log</a><div><div>'+
		'<div class="divider"></div>'+
		G.writeMSettingCategories()+
		'<div class="divider"></div>'+
		'<div class="buttonBox">'+
		G.dialogue.getCloseButton()+
		'</div>';
		return str;
	}

		//New tile generation is InDev. I am open to any programming tips
	
				//var biomes=[];
				//if (tempTile<-0.1)
				//{
				//	if (landTile=='ocean') biomes.push('arctic ocean');
				//	else biomes.push('ice desert');
				//}
				//else if (tempTile<0.15)
				//{
				//	if (landTile=='ocean') biomes.push('arctic ocean');
				//	else if (wetTile<0.25) biomes.push('ice desert');
				//	else if (wetTile>0.5) biomes.push('boreal forest');
				//	else biomes.push('tundra');
				//}
				//else if (tempTile>0.3)
				//{
				//	if (landTile=='ocean') biomes.push('ocean');
				//	else if (wetTile<0.25) biomes.push('forestdesert');
				//	else if (wetTile>0.5) biomes.push('Lavender fields');
				//	else biomes.push('Flower forest');
				//}
				//else if (tempTile>1.1)
				//{
				//	if (landTile=='ocean') biomes.push('tropical ocean');
				//	else biomes.push('desert');
				//}
				//else if (tempTile>0.85)
				//{
				//	if (landTile=='ocean') biomes.push('tropical ocean');
				//	else if (wetTile<0.25) biomes.push('desert');
				//	else if (wetTile>0.5) biomes.push('jungle');
				//	else biomes.push('savanna');
				//}
				//else
				//{
				//	if (landTile=='ocean') biomes.push('ocean');
				//	else if (wetTile<0.25) biomes.push('shrubland');
				//	else if (wetTile>0.5) biomes.push('forest');
				//	else biomes.push('prairie');
				//}
				//if (biomes.length==0) biomes.push('prairie');
				//lvl[x][y]=choose(biomes);
			//}
		//}
		
		//for (var x=0;x<w;x++)//clean all tiles with no terrain
		//{
			//for (var y=0;y<h;y++)
			//{
				//if (lvl[x][y]=='none') lvl[x][y]='forest';
			//}
		//}
		//return lvl; //*
}});
