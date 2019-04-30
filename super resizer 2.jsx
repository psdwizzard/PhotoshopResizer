var doc = app.activeDocument;  
//var Path = 'C:/Users/photoshop/Desktop/final renders/dump/';  
var Path = 'C:/Users/kloeb/Downloads/PhotoshopResizer-master';
var Name = doc.name.replace(/\.[^\.]+$/, '');   

var imgNameWidth= doc.name;
imgNameWidth = imgNameWidth.split("_X_")[0]; // you must add "--" were you want your file to spit
imgNameWidth = /--w(.+)/.exec(imgNameWidth)[1];
var fWidth=  imgNameWidth;

var imgNameHeight= doc.name;
imgNameHeight = imgNameHeight.split("_SSS")[0]; // you must add "--" were you want your file to spit
imgNameHeight = /X_h(.+)/.exec(imgNameHeight)[1];

var fWidth=  imgNameWidth;
var fHeiight=  imgNameHeight;



var fSize = (UnitValue(fWidth,"in")) >=( UnitValue(fHeiight,"in")) ?

fSize = 1 :  fSize = 0;


var iWidth = app.activeDocument.width;
var iHeight = app.activeDocument.height;


var iSize = (UnitValue(iWidth,"in")) >=( UnitValue(iHeight,"in")) ?

iSize = 1 :  iSize = 0;

if (fSize === iSize){

doc.resizeImage(UnitValue(fWidth,"in"), UnitValue(fHeiight,"in"),null,ResampleMethod.BICUBIC);

} else {

doc.resizeImage(UnitValue(fHeiight,"in"), UnitValue(fWidth,"in"),null,ResampleMethod.BICUBIC);}

var saveFile = File(Path + "/" + Name + ".jpg");  
SaveJPEG(saveFile, 12);  
  
function SaveJPEG(saveFile, jpegQuality){  
jpgSaveOptions = new JPEGSaveOptions();  
jpgSaveOptions.embedColorProfile = true;  
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;  
jpgSaveOptions.matte = MatteType.NONE;  
jpgSaveOptions.quality = jpegQuality;  
activeDocument.saveAs(saveFile, jpgSaveOptions, true,Extension.LOWERCASE);  
}  
