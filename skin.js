// Garden Gnome Software - Skin
// Pano2VR 6.1.11/18043
// Filename: Skin.ggsk
// Generated 2021-04-27T10:41:05

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._menuizq=document.createElement('div');
		el.ggId="MenuIzq";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0.19%;';
		hs+='height : 67.3148%;';
		hs+='left : 0.21%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30.8854%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menuizq.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menuizq.ggUpdatePosition=function (useTransition) {
		}
		el=me._instrc=document.createElement('div');
		els=me._instrc__img=document.createElement('img');
		els.className='ggskin ggskin_instrc';
		hs=basePath + 'images/instrc.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Instrc";
		el.ggDx=-3.72;
		el.ggDy=-8.94;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 75.5158%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 73.3559%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._instrc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._instrc.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._menuizq.appendChild(me._instrc);
		el=me._btninstr=document.createElement('div');
		els=me._btninstr__img=document.createElement('img');
		els.className='ggskin ggskin_btninstr';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BtnInstr";
		el.ggDx=-2.87;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 4.26%;';
		hs+='cursor : pointer;';
		hs+='height : 11.5543%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 51.2648%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btninstr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btninstr.onclick=function (e) {
			me._instrc.ggVisible = !me._instrc.ggVisible;
			var flag=me._instrc.ggVisible;
			me._instrc.style[domTransition]='none';
			me._instrc.style.visibility=((flag)&&(Number(me._instrc.style.opacity)>0||!me._instrc.style.opacity))?'inherit':'hidden';
		}
		me._btninstr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._menuizq.appendChild(me._btninstr);
		me.divSkin.appendChild(me._menuizq);
		el=me._menuder=document.createElement('div');
		el.ggId="MenuDer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0.09%;';
		hs+='height : 67.2222%;';
		hs+='position : absolute;';
		hs+='right : 0.1%;';
		hs+='visibility : inherit;';
		hs+='width : 30.8333%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menuder.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menuder.ggUpdatePosition=function (useTransition) {
		}
		el=me._lista=document.createElement('div');
		el.ggId="Lista";
		el.ggDx=4;
		el.ggDy=-58;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 73.8292%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 72.2974%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lista.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lista.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._fondo0=document.createElement('div');
		els=me._fondo0__img=document.createElement('img');
		els.className='ggskin ggskin_fondo0';
		hs=basePath + 'images/fondo0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Fondo";
		el.ggDx=2.1028;
		el.ggDy=0.746269;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 101.168%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fondo0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fondo0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._lista.appendChild(me._fondo0);
		el=me._btnparque=document.createElement('div');
		els=me._btnparque__img=document.createElement('img');
		els.className='ggskin ggskin_btnparque';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BtnParque";
		el.ggDx=2.33645;
		el.ggDy=-16.0448;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11.3806%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 47.8972%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btnparque.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btnparque.onclick=function (e) {
			player.openNext("{node32}","");
		}
		me._btnparque.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._lista.appendChild(me._btnparque);
		el=me._btngensa=document.createElement('div');
		els=me._btngensa__img=document.createElement('img');
		els.className='ggskin ggskin_btngensa';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BtnGensa";
		el.ggDx=2.33645;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11.3806%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 47.8972%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btngensa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btngensa.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._btngensa.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._lista.appendChild(me._btngensa);
		el=me._btngranja=document.createElement('div');
		els=me._btngranja__img=document.createElement('img');
		els.className='ggskin ggskin_btngranja';
		hs='data:image/png;base64,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'+
			'B9OQwnpL2UclAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BtnGranja";
		el.ggDx=2.57009;
		el.ggDy=16.0448;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11.3806%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 47.8972%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btngranja.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btngranja.onclick=function (e) {
			player.openNext("{node15}","");
		}
		me._btngranja.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._lista.appendChild(me._btngranja);
		me._menuder.appendChild(me._lista);
		el=me._btnmenu=document.createElement('div');
		els=me._btnmenu__img=document.createElement('img');
		els.className='ggskin ggskin_btnmenu';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BtnMenu";
		el.ggDx=4.72176;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 4.2641%;';
		hs+='cursor : pointer;';
		hs+='height : 11.4168%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 46.8803%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btnmenu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btnmenu.onclick=function (e) {
			me._lista.ggVisible = !me._lista.ggVisible;
			var flag=me._lista.ggVisible;
			me._lista.style[domTransition]='none';
			me._lista.style.visibility=((flag)&&(Number(me._lista.style.opacity)>0||!me._lista.style.opacity))?'inherit':'hidden';
		}
		me._btnmenu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._menuder.appendChild(me._btnmenu);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_mute';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAHl0lEQVR4nO2dO2wTWRSGP0cpgBTOIi1FGhylJFJc8KhQTIpUoNgV7higAolgWBfLAlqvQGILiwSQQIsUMulCZVu7zVKAIyoehSMlZRRTLMUiLXFBSOct5s5kxq/x2Hdm/PokKx57PHP85/jcc9+BcrlMJxCIJUNA2PQYFX+DNh8tAQVgR/wtAIVyJl10y1YnBPwSOBBLjgJRICIeRyXf4hOQF49sOZPekXz9pvBUYJOoUWDOsxtr5IAsHovticDi558AFOx/8m5TAlRg0Ysw4qrAQtgUcMG1m7THCpByU2hXBBahYJHOFbaSFSDhRugYkn3BQCyZAIp0j7ig2VoUtktFmgeLcKAC01Iu6B9rgCIrbEjx4EAsqaDln90uLmjfoRCIJaMyLta2wIFYch'+
			'FYxv/sQCZBICO+W1u0HCJEQZalN7y2EWtAtNUCsCWBhbh5YKqVm3Yh60CkFZEdh4g+FBe075oX390RjgTuU3F1WhK5aYH7XFwdxyI78eAs/S2uzhSaFk3RlMAiXen1bMEJ082mcLZZhKhELEswqheJlTPpht7cUGBR/S3QW5UImZSAcKNqtV2IUBmI24ggmkZ1qSuwaFkaxF17phu1wtUMESINKTLw3mYpAaFaNb16HrzIQFwnBNE0q6LKg0XBtu2+Tc4JHTlM8d///DajEeOVBV4tD055YooDUvFZypk023/8QvH5bcLjY36bVI9U5QsWD+407x0dOUj2lsL0sQnL67n3m0QfdGxqbvHiSg+W3ifVKuHxMQoLN6vEBZg7ecwHi5rGoqEhsMgcFK+tqYUyc4L8/asc/fEHAEq7e8R+V/01qnkU84HZg6N0QOagzsdZ'+
			'vnae4KEDAKwXPxO585Tsuw2fLWuaoGheAGDY9IaUTr5WCR05TPaWwlRovwBbefORxFKOnW/ffbSsJaKIGt4QGOHB67FiBpHJCQoLNy3i3niRQ3m82o3iAszpbca6B/vmvan4LL+enzWOS7t7RB8sk9/Y8sskWUQBVRc44vXdR0cOos7HLRmBFm+fdavXVhLBL4EjkxOo83EjSwB49NdbEks5L81wmwjAsKhcSB38HDpymMS500QmJyxxtRal3T0SSznU1x/avm9kUsuZWw0v0VOTALIylqOBWDI0jDZMXxrKzAkWL88ZaVYjSrt7RO48pbD9ue37hsfHeHPvCqBlH8rjVUefV2ZOsHztPABn7j6TVQaEpQocPTVpGKmztmk1NHTksBEaEks5KeLq19W5cOY4QNMiL16e4/rZ01LsqECuwIuX9zO93PvNmmmWOWuQ2T'+
			'KWfbfBxScvjX9wsyKr83HjXNC8X2IGEx5Gm83TNpHJCcMz1za3fGmM0eN4syLXEtdpaLFhdAhJ3UJ6AQOw+OdbGZdsCfX1By4+eWkcXzhzHHU+Xn2e++IChKWPcAd8z2PtRE7FZ70QFyA4bH9Od1IvXOQ3tiw1RxfFBayNPT1HLZE98lwDV0JEJ6G+/sCNF9U1RC/EhT4Q2G96XmBl5gQLl6pbYutlF7LpaYHN1V/QwsLKm4/GsRci92whV0tcc8zVCzun1WqnDKEN+5GKuV3AD+zEVR6veuXJpSG04altY66/KzPHG5zpLnbiGud5I3JhCG2lkLbJb2zx6ctXAKaPaQ3qoyMHZVy6aZoV1zjffZF3htE8WEqHZ2IpR+ZnBdhP6teLny1VZ3P40J7LabkKj485EldHP8cck7PvNmQ1uhd0gaWgNxmaG9wb9Wik4rMU'+
			'tv+R0iZs/rU4rURUiiyRQoDoTyEkj0dzq8uonEkbzwOxZNX7kckJbTxbi94XHh9jdOSgzPbg8UC5XCYQSxaRvyhRXVrt9LQTuMP4VM6kQ3pFI+/lnfMbW4RvPCT3ftN47frZ0xQWbnpeMLpIHvZrcnmv777z7TvRB8v89vKV8dpUaIzi89uWxvsuJg/7Ajc9c1E2qdVXnLn7jNLuHgDBQwd4c+8KiXOudEJ6SRaEwGLyhm+jPvSQsV7czyYWLs2RvXWxW0NGTp8QY27s8c2LQethDt94aEn8504eI3//SidPGaiHoWWlwNLbJZyiPF7l4pOXRsiYCo2Rv3/VGHXTBZTKmbSqHxgCC5dWa3zAc9TXH4jceWpUvYOHDhg1xC5ANR9Utge3vQiQLArbn6tSOZ1ar3UQFg0tAovZMSteWtOIWqncpy9fSa3+7aNVDVmpnC'+
			'fXVRMRw+Nj0sayuYT9RMRO82IzHS5ulfdC/T65BB2QUXQRJerMMawpsMgoUi4a1Guk6q2pZrfiSZ7BmhF2rJUz6Ui9N+267RUGoaIRJWxmxzYUWATthhfoc2yXwbUdeCJWVXoky6Ie4pHdilPgYHHQQTy20DDumnEydCqKtgppv7OOg5mxTQss0pAI/S2y42VuHQ3+63ORW1pD2PHoyj4V2bsFmsEi8lorn+8y1mhRXJCwzYNYhfR6WxfpXB6VM+m21jGSso+G2BJBpQOWpJFECa0S0XY/pZQR7sKQML0RMtbQVlSV0gksfS8jsVBmiu7z5hJaq5jUbrPBZlEarm0WNdjurBu3O6u6yWDDPm/ohC0nzYNCvGCwaarL+CZwJb267e//NnptOOjItoEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 4.82094%;';
		hs+='height : 10.6061%;';
		hs+='position : absolute;';
		hs+='right : 3.20946%;';
		hs+='visibility : hidden;';
		hs+='width : 13.0068%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
				player.playPauseSound("_background","1");
			me._sonido.style[domTransition]='none';
			me._sonido.style.visibility=(Number(me._sonido.style.opacity)>0||!me._sonido.style.opacity)?'inherit':'hidden';
			me._sonido.ggVisible=true;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		me._menuder.appendChild(me._mute);
		el=me._sonido=document.createElement('div');
		els=me._sonido__img=document.createElement('img');
		els.className='ggskin ggskin_sonido';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Sonido";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 4.82%;';
		hs+='height : 10.6061%;';
		hs+='position : absolute;';
		hs+='right : 3.21%;';
		hs+='visibility : inherit;';
		hs+='width : 13.0068%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sonido.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sonido.onclick=function (e) {
				player.playPauseSound("_background","1");
			me._sonido.style[domTransition]='none';
			me._sonido.style.visibility='hidden';
			me._sonido.ggVisible=false;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._sonido.ggUpdatePosition=function (useTransition) {
		}
		me._menuder.appendChild(me._sonido);
		me.divSkin.appendChild(me._menuder);
		el=me._inicio=document.createElement('div');
		el.ggId="Inicio";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._inicio.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._inicio.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._fondo=document.createElement('div');
		els=me._fondo__img=document.createElement('img');
		els.className='ggskin ggskin_fondo';
		hs=basePath + 'images/fondo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Fondo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fondo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fondo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._inicio.appendChild(me._fondo);
		el=me._btniniciar=document.createElement('div');
		els=me._btniniciar__img=document.createElement('img');
		els.className='ggskin ggskin_btniniciar';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BtnIniciar";
		el.ggDx=-0.09;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 12.04%;';
		hs+='cursor : pointer;';
		hs+='height : 7.68519%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 9.0625%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btniniciar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btniniciar.onclick=function (e) {
			me._inicio.style[domTransition]='none';
			me._inicio.style.visibility='hidden';
			me._inicio.ggVisible=false;
		}
		me._btniniciar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._inicio.appendChild(me._btniniciar);
		me.divSkin.appendChild(me._inicio);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};