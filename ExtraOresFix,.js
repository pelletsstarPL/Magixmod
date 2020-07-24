G.AddData({
name:'Extra ores contexts',
author:'pelletsstarPL',
desc:'fix',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
func:function(){
  if(G.year>=2){
G.contextNames['deep mining']='Deep mining';
G.contextNames['deep quarrying']='Deep quarrying';
  }
}});
