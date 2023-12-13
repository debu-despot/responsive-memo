const div =(id:string)=> document.getElementById(id) as HTMLDivElement;
const content = div("content");
const contents = [content];

const input = (id:string)=>document.getElementById(id) as HTMLInputElement;
const vanilla = input("vanilla");
const grid = input("grid");
const flexbox = input("flexbox");

const resetClasses = ()=>{
	for (const c of contents) {
		c.classList.remove(...Array.from(c.classList));
	}
};

const numbers =  [...Array(10)].map((v, i)=> i+1);
for (let i = numbers.length; 1 < i; i--) {
	const k = Math.floor(Math.random() * i);
	[numbers[k], numbers[i - 1]] = [numbers[i - 1], numbers[k]];
}

for (const n of numbers) {
	const d = document.createElement("div");
	d.style.height = `${n}rem`;
	d.style.width = `${n}rem`;
	d.className="item";
	content.appendChild(d);
}


const switchClass = (name:string) => ()=>{
	resetClasses();
	content.classList.add(name);
	document.title = name;
};

grid.onclick = switchClass("grid");
flexbox.onclick = switchClass("flexbox");
vanilla.onclick = switchClass("vanilla");

vanilla.click();