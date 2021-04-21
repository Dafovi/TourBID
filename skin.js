// Garden Gnome Software - Skin
// Pano2VR 6.1.11/18043
// Filename: Skin.ggsk
// Generated 2021-04-21T11:56:07

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
		hs+='bottom : 0.185185%;';
		hs+='height : 67.3148%;';
		hs+='left : 0.208333%;';
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
		el=me._instruc=document.createElement('div');
		els=me._instruc__img=document.createElement('img');
		els.className='ggskin ggskin_instruc';
		hs=basePath + 'images/instruc.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="instruc";
		el.ggDx=-1.51771;
		el.ggDy=-6.87758;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 73.8652%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 73.1872%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._instruc.ggIsActive=function() {
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
		me._instruc.ggUpdatePosition=function (useTransition) {
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
		me._menuizq.appendChild(me._instruc);
		el=me._btninfor=document.createElement('div');
		els=me._btninfor__img=document.createElement('img');
		els.className='ggskin ggskin_btninfor';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._btninfor__img.ggOverSrc=hs;
		el.ggId="BtnInfor";
		el.ggDx=-1.68634;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 3.43879%;';
		hs+='cursor : pointer;';
		hs+='height : 11.4168%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 47.0489%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btninfor.ggIsActive=function() {
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
		me._btninfor.onclick=function (e) {
			me._instruc.ggVisible = !me._instruc.ggVisible;
			var flag=me._instruc.ggVisible;
			me._instruc.style[domTransition]='none';
			me._instruc.style.visibility=((flag)&&(Number(me._instruc.style.opacity)>0||!me._instruc.style.opacity))?'inherit':'hidden';
		}
		me._btninfor.onmouseover=function (e) {
			me._btninfor__img.src=me._btninfor__img.ggOverSrc;
		}
		me._btninfor.onmouseout=function (e) {
			me._btninfor__img.src=me._btninfor__img.ggNormalSrc;
		}
		me._btninfor.ggUpdatePosition=function (useTransition) {
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
		me._menuizq.appendChild(me._btninfor);
		me.divSkin.appendChild(me._menuizq);
		el=me._menuder=document.createElement('div');
		el.ggId="MenuDer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0%;';
		hs+='height : 67.3148%;';
		hs+='position : absolute;';
		hs+='right : 0.0520833%;';
		hs+='visibility : inherit;';
		hs+='width : 30.8854%;';
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
		el.ggDy=-54;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 536px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 428px;';
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
		el=me._fondoder=document.createElement('div');
		els=me._fondoder__img=document.createElement('img');
		els.className='ggskin ggskin_fondoder';
		hs=basePath + 'images/fondoder.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="FondoDer";
		el.ggDx=0.7;
		el.ggDy=0.19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 94.2164%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 95.17%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fondoder.ggIsActive=function() {
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
		me._fondoder.ggUpdatePosition=function (useTransition) {
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
		me._lista.appendChild(me._fondoder);
		el=me._btngranja=document.createElement('div');
		els=me._btngranja__img=document.createElement('img');
		els.className='ggskin ggskin_btngranja';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BtnGranja";
		el.ggDx=1.86916;
		el.ggDy=-2.05224;
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
		el=me._btnparque=document.createElement('div');
		els=me._btnparque__img=document.createElement('img');
		els.className='ggskin ggskin_btnparque';
		hs='data:image/png;base64,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'+
			'rkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BtnParque";
		el.ggDx=1.64;
		el.ggDy=-18.84;
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
		hs='data:image/png;base64,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'+
			'jisvDuf3SWY/7vkyWoAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BtnGensa";
		el.ggDx=1.87;
		el.ggDy=14.74;
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
		me._menuder.appendChild(me._lista);
		el=me._btnrpd=document.createElement('div');
		els=me._btnrpd__img=document.createElement('img');
		els.className='ggskin ggskin_btnrpd';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAABUCAYAAABHqhicAAAJt0lEQVR4nO3dPW8b2RUG4HcuyYYFmYINgSXjBRsFhJDAjSHDwNpF1lwo1SJguwuDLtJJqx+g6AfIu70Fr9MShrDFGpKTwikCC24UBAIRNQQMKgAbFiELFUvNTIqZoTjDe4dD8pKcUd4HEGAPP3Q5H2fOuR+U8Yc/7SKq4+2T3wH4VeQXENFd8enrt199ivrkdNiDx9snjwF8C+AxgF8v0CgiSrjj7RMA+BeAnwC8Dgs0hixjcTOTHwB8sZwmEtEd8BcAO1+//eq/wQdEcMPx9sm3AP4JBhUiCvcNgE9uIuLjCyzH2yevAfy4okYRUfLlAfw9GFxGgcXNVL5ZcaOIKPm84HLP2yAAwN3ww3raRER3QB7Aa+8/XsbyZ/cBIqJ5feFWPhButsISiIh02A'+
			'EA45efN3YAfL/mxhDR3fG5gDP5jYhIl8cCwL11t4KI7pR7AsBv190KIrpbJmbeEhEtioGFiLRjYCEi7RhYiEg7BhYi0o6BhYi0Y2AhIu0YWIhIOwYWItKOgYWItGNgISLtGFiISLvQvytE8ZPa2AOyn8HunTk/11frbtJcUht7MIpPYXffwe63YHVP190k0sj45ecNe92NoGhEsYbUff93ctn9Fqz2UaIuTKOwhfSDV/6NwwGsThPm5eF6GkU6HTBjSYpMDqnNg4nNdu8MVu/DGho0J8XnMNsvYbWP1tAgWgYGloRIbR4AmdzthuEA5sV+ojIVAEhVnsPIlm43DAe4Od+B3TtbX6NIOwaWBDDyVRiZ/Ojis4d9WJcvkte/ksnBHvZ95Y7VaQLDwRobRcvAPhYi0m39fSyi0nBGOgLs3hluPj4Lfa2RLSH95K/Sx4Zv'+
			'fzP6d2b73wu1cdp7We2j0E5H1Wccf98oz5nnfaeZZd94o1B272z2EiyTQ+bJ3/zlHKId59FbRGirfX0FXP8HVu+DM+KkyOpk72VeHvr6eVT71/f7+i2n47n3wdk//dbUNsoY2RKM4lOIwkMY+epoP9nXV7D7Lecn5PPEzdoDi4pR2IIo1kJPYFkn4DqISgP29ZWT1t9hRmELBraAch2i34B5vhv5RBfF2kRQGb1ntqTtgjGyJSBbQqqwBWzsweqewrzYX1q5ZeSrAOD8PjiBwLp8ETnwGtkSRKUBUa4rHzeyJaBYcz6PN3IW8/Ix1hPkJjosx4hyHYZ7MOMgtbE3Osn+Hxj5KtKP3iiPT5CoNNSPKS4qHUSx5gxtR2znooxsCan734eeu762PXoz0+cX5TrSj97E/lyLdWBBJodU5bl8+5QUdeUyOWeOyYpO4FjI5J'+
			'C+P/1PfntZiYoo15e634x8VX4eLZEo10PPUVGuz32+GNkS0g9exTq4xLYU8ohKY1S/eqLcDaZZxvwPI1tCavMA5vmu1vddNa+fYtx43e/bHqGUmXpHzuScsneOUjJ4HEWxJr3gRKUBs/1SSwkxfi6q9gvgfG77+mpifo6Rry5exmdySD94heH738eyLIp9YAGcQHLz/ksAt30vi7J6H5YyIUsUa7ArrURP9rI6zcn2u1miLEgY+aoysBjZUqTjJSqNuQJL8Dha7SOkNg+k7RSFh1rm/QQ7m43ClrIUTlWeTwypKzOZ4QBm+6Wvk9bIVyHKdXlwdjP6OM5Wjncp5PI6uFSzNuMmtbGnJfjFynCgPoGznylfJrsgZEHIyJa09ZnN085FeCNb0hGhTM63D4zClvxzDge4+fgMVvvIt3/sfgvmxb7TAS3hXRdxk4iMBbjt'+
			'HA2r1WcR9USed0ZoavNgNFR4Z8yRcssCi9U+ckqWwP4X5TpMHTNw11EauIF3Yg0U4MtkVDcc8/Iw9FyxOs1R9hI0bxm5TPENLMPBRCSWHhTJ86JQppfBt59hToiPm11FnaORBKpArLogpJ2yw8GoHEkFA0uxBiu7+Ixi5Q0j0G+kmzfPJ3jzGw8s0g5XdwHmNFanKS9FNd1sdYptKWS2X059TlzmjljdU+ldUksn3Rp42dz4j6g05CNAw0F4YAnw9pVqKv+iQ8+iWFOOVK1ksaYkeI1f+LLAEjWrVT0vjqNDsc1YrPaRMwsxpFwxz3djMZfF7rdg9s6kQUQUa7BjeODDRM3mAChHWozClvSEH78RWJ3mxPwWUa7P1BmZ2tiLNPWAa5JWK7YZC4DQGZPTatJVk46kuOKYqurgfReMjKxs9aame6TZZqCzUwe731rdyI'+
			'mkg3j8M8vO2agZh+p5cboOPLHNWACn1DHbLyfuSGEndFTBdSE6mJeHTgezxizKyFdnSoFXtZYkdP8pgoORr0Za7yPKdW0lrjeqsopsRTURMBhYJo6bu7+mfWZVwI3j+qFYZyyAUxIFR2ZUQ29xcHO+M9eBVvZTKKbCG/mqvDN7yR2UgDspLSQoL5px6AjO3hqhm3/8cTV39JDZ4L7Aohj1mrYkRFmejnWGx0msMxaPebE/WpcStxJownAA83zXae8MVCecKNaA+/B9/4oo1iA2vpM+X0cH5Xg2kn7wauIi9zpzlWWQhlJGFGuRhp6tTtN/YYV0Ji+FO2tYVBrybCUwwGB1TyGuv5t8biaH9KM3zvk9tko6dIIc1H1c65aIwOKVRKJY01a+iMLD6L9/xuXqXvo964iQajhRFGuRJ9zZ3Xcz/c5pxoP6uFTluXS/iHJd'+
			'S5+SKNcnJovJeF/jsEqzfNWEdfliYpt5sS+d7wKEzMqViMuoqEwiAgvglkQaLxqjsDUxj0Llpt8CZixvwiY0KV/jThybdyaleXmovd5W9XOp5ulIO22vr0LLV2+N1cT24lPYSV8aISlT7N7ZXDceHzczjmO2AiSgj2VcHDupwpgX+zOl5dMuwDBW93Rp65Nk/VzAbUk0+r+ib8TqNG//XInkx+o0pcd21SuSdbLaR6HH0uo05+5Utvst9RKCmEhUYEmim4/PZjp5rO6p0+E4QxA1Lw+XvqJadRGMfzm2ctQiQqa5qqHnZbOvr3Dz8Vmk4W2r03SO9QylnNU+in1QARJUCiWWu7hsls5cu9/CzfsvR+tpjHzVN2Iw/nWFq5r4NbUkOt+RlkFW9zRSkLS77wBJ/0Ic18EEeZ2twa/3iPRaNxB52V7YV1MmaZIfv0ybiH'+
			'Q7YClERNoxsBCRdgwsRKQdAwsRacfAQkTaMbAQkXYMLESkHQMLEWnHwEJE2jGwEJF2DCxEpB0DCxFpx8BCRNoxsBCRdgwsRKQdAwsRacfAQkTaMbAQkXYMLESkHQMLEWnHwEJE2jGwEJF2DCxEpB0DCxFpx8BCRNoxsBCRdgwsRKQdAwsRacfAQkTaMbAQkXYMLESkXRrAk3U3gojulE//Ax/7dfOsKJU5AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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'+
			'm0c1MESwAAAAAElFTkSuQmCC';
		me._btnrpd__img.ggOverSrc=hs;
		el.ggId="BtnRpd";
		el.ggDx=3.20405;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 3.44%;';
		hs+='cursor : pointer;';
		hs+='height : 11.5543%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 46.8803%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._btnrpd.ggIsActive=function() {
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
		me._btnrpd.onclick=function (e) {
			me._lista.ggVisible = !me._lista.ggVisible;
			var flag=me._lista.ggVisible;
			me._lista.style[domTransition]='none';
			me._lista.style.visibility=((flag)&&(Number(me._lista.style.opacity)>0||!me._lista.style.opacity))?'inherit':'hidden';
		}
		me._btnrpd.onmouseover=function (e) {
			me._btnrpd__img.src=me._btnrpd__img.ggOverSrc;
		}
		me._btnrpd.onmouseout=function (e) {
			me._btnrpd__img.src=me._btnrpd__img.ggNormalSrc;
		}
		me._btnrpd.ggUpdatePosition=function (useTransition) {
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
		me._menuder.appendChild(me._btnrpd);
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
		el=me._btninicio=document.createElement('div');
		els=me._btninicio__img=document.createElement('img');
		els.className='ggskin ggskin_btninicio';
		hs='data:image/png;base64,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'+
			'JvwhZ/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._btninicio__img.ggOverSrc=hs;
		el.ggId="BtnInicio";
		el.ggDx=0.58;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 11.48%;';
		hs+='cursor : pointer;';
		hs+='height : 10.5556%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 16.0417%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btninicio.ggIsActive=function() {
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
		me._btninicio.onclick=function (e) {
			me._inicio.style[domTransition]='none';
			me._inicio.style.visibility='hidden';
			me._inicio.ggVisible=false;
		}
		me._btninicio.onmouseover=function (e) {
			me._btninicio__img.src=me._btninicio__img.ggOverSrc;
		}
		me._btninicio.onmouseout=function (e) {
			me._btninicio__img.src=me._btninicio__img.ggNormalSrc;
		}
		me._btninicio.ggUpdatePosition=function (useTransition) {
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
		me._inicio.appendChild(me._btninicio);
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