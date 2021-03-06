G.AddData({
name:'Extra ores contexts',
author:'pelletsstarPL',
desc:'fix',
engineVersion:1,
manifest:'ModManifest.js',
func:function(){
G.contextNames['deepmining']='Deepmining';
G.contextNames['deepquarrying']='Deepquarrying';
new G.Goods({

		name:'rocky substrate',
		desc:'A [rocky substrate] is found underneath most terrain types.//Surface [stone]s may be gathered by hand.//Digging often produces [mud], more [stone]s and occasionally [copper ore,Ores] and [clay].//Mining provides the best results, outputting a variety of [stone]s, rare [gold ore,Ores], and precious [gems].',
		icon:[11,10],
		res:{
			'gather':{'stone':0.25,'clay':0.005,'limestone':0.005},
			'dig':{'mud':2,'clay':0.15,'stone':0.6,'copper ore':0.01,'tin ore':0.01,'limestone':0.1,'salt':0.05},
			'mine':{'stone':1,'copper ore':0.1,'tin ore':0.1,'iron ore':0.05,'gold ore':0.005,'coal':0.1,'salt':0.1,'gems':0.005,'pyrite':0.004},
			'quarry':{'cut stone':1,'limestone':0.5,'marble':0.01,'osmium ore':0.001},
      'deepmining':{'zinc ore':0.004,'gems':0.0045,'dinium ore':0.004},
      'deepquarrying':{'mythril ore':0.004,'blackium ore':0.001,'lead ore':0.08,'salt':0.0001,'unknownium ore':0.001}
		},
		affectedBy:['mineral depletion'],
		noAmount:true,
		mult:5,
	});
}});
