const div =(id:string)=> document.getElementById(id) as HTMLDivElement;
const content = div("content");
const main = div("main");
const pain = div("pain");
const contents = [content,main,pain];

const resetClasses = ()=>{
	for (const c of contents) {
		c.classList.remove(...Array.from(c.classList));
	}
};
const input = (id:string)=>document.getElementById(id) as HTMLInputElement;

const absolute = input("absolute");
const liquid = input("liquid");
const adaptive = input("adaptive");
const responsive = input("responsive");

const switchClass = (name:string) => ()=>{
	resetClasses();
	content.classList.add(name);
	document.title = name;
};

absolute.onclick  = switchClass("absolute");
liquid.onclick  = switchClass("liquid");
adaptive.onclick  = switchClass("adaptive");

responsive.onclick = ()=>{
	resetClasses();
	pain.classList.add("d-none","d-sm-inline-block");
	document.title = "responsive";
};
responsive.onclick  = switchClass("responsive");

absolute.click();


