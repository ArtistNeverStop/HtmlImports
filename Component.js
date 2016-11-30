class Component{


	constructor(name, template, prototype){
		this.name = name;
		this.$fragment = template.document.currentScript.ownerDocument.getElementsByTagName('template')[0].content;
		this.$proto = prototype;
		this.injectPrototype();
	}

	//¨**Methods
	injectTemplate(){
		document.registerElement(this.name, {prototype: this.$proto});

	}

	injectPrototype(){
		if(this.$proto == undefined){
			this.$proto =  Object.create(HTMLElement.prototype);
			let frag = this.$fragment;
			this.$proto.createdCallback = function () {
				console.log('3213');
				this.appendChild(document.importNode(frag, true));
			};
		}
		else{

			console.log(this.$proto);
		}
		this.injectTemplate();
	}
}

		//var element = document.registerElement(this.name, {prototype: proto});
		//var elementInstance = new element;
		//elementInstance.innerHTML = this.template.document.currentScript.ownerDocument.getElementsByTagName('template')[0].innerHTML;
		//document.body.appendChild(elementInstance);

		//console.log(this.template.document.currentScript.ownerDocument);
		//console.log(this.template.document.currentScript.ownerDocument.getElementsByTagName('template')[0].innerHTML);
		//document.body.appendChild(this.node.content, true);