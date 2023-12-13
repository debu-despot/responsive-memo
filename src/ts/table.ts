const arcanums =[
	  {
		"name": "呪術師",
		"meaning_upright": "創造力、力、自己表現",
		"meaning_reversed": "欺瞞、無力感、スキル不足"
	  },
	  {
		"name": "女教皇",
		"meaning_upright": "直感、秘密、神秘",
		"meaning_reversed": "虚偽、無知、混乱"
	  },
	  {
		"name": "女帝",
		"meaning_upright": "豊かさ、母性、創造性",
		"meaning_reversed": "依存、無駄遣い、過保護"
	  },
	  {
		"name": "皇帝",
		"meaning_upright": "統治、権威、秩序",
		"meaning_reversed": "支配欲、無秩序、反抗"
	  },
	  {
		"name": "教皇",
		"meaning_upright": "伝統、信仰、指導",
		"meaning_reversed": "無神経、反抗、異端視"
	  },
	  {
		"name": "戦車",
		"meaning_upright": "勝利、意志力、移動",
		"meaning_reversed": "制御喪失、停滞、障害"
	  },
	  {
		"name": "正義",
		"meaning_upright": "公平、真実、調和",
		"meaning_reversed": "不正、偏見、制裁"
	  },
	  {
		"name": "奇者",
		"meaning_upright": "内省、孤独、知恵",
		"meaning_reversed": "孤立、孤独感、無知"
	  },
	  {
		"name": "運命の輪",
		"meaning_upright": "運命、周期、幸運",
		"meaning_reversed": "変動、停滞、運不運"
	  },
	  {
		"name": "力",
		"meaning_upright": "強さ、忍耐、自己制御",
		"meaning_reversed": "弱さ、怒り、制御不足"
	  },
	  {
		"name": "吊られた男",
		"meaning_upright": "無抵抗、犠牲、逆境",
		"meaning_reversed": "要請、拒絶、妨害"
	  },
	  {
		"name": "死神",
		"meaning_upright": "変化、再生、終わりと始まり",
		"meaning_reversed": "抵抗、拒否、停滞"
	  },
	  {
		"name": "節制",
		"meaning_upright": "調和、均衡、節制",
		"meaning_reversed": "不調和、過剰、極端"
	  },
	  {
		"name": "悪魔",
		"meaning_upright": "欲望、束縛、誘惑",
		"meaning_reversed": "解放、自由、解放感"
	  },
	  {
		"name": "塔",
		"meaning_upright": "崩壊、変革、破壊",
		"meaning_reversed": "建設、安定、避けるべき危険"
	  },
	  {
		"name": "星",
		"meaning_upright": "希望、癒し、啓示",
		"meaning_reversed": "失望、不安、幻滅"
	  },
	  {
		"name": "月",
		"meaning_upright": "意識の深化、直感、夢",
		"meaning_reversed": "混乱、隠れた危険、幻惑"
	  },
	  {
		"name": "太陽",
		"meaning_upright": "幸福、明るさ、成功",
		"meaning_reversed": "自己疑念、暗黒、失敗"
	  },
	  {
		"name": "審判",
		"meaning_upright": "評価、再生、決定",
		"meaning_reversed": "自己評価、避けてきた決断、罪悪感"
	  },
	  {
		"name": "世界",
		"meaning_upright": "完成、達成、統合",
		"meaning_reversed": "不完全、未完了、分裂"
	  }
	];


const div =(id:string)=> document.getElementById(id) as HTMLDivElement;
const table =(id:string)=> document.getElementById(id) as HTMLTableElement;

const grid = div("grid");
const v_table = table("table");
const s_table = table("scroll");

const td = (value:string) => {
	const t = document.createElement("td");
	t.innerText = value;
	return t;
}

for (const arcanum of arcanums) {
	const tr = document.createElement("tr");
	const name = document.createElement("th");
	const upright = document.createElement("td");
	const reversed = document.createElement("td");

	name.innerText = arcanum.name;
	upright.innerText = arcanum.meaning_upright;
	reversed.innerText = arcanum.meaning_reversed;

	tr.append(name,upright,reversed);

	v_table.appendChild(tr);
	s_table.appendChild(tr.cloneNode(true));

	const d = (v:string) =>{
		const d = document.createElement("div");
		d.innerText = v;
		return d;
	}
	grid.appendChild(d(arcanum.name));
	grid.appendChild(d(arcanum.meaning_upright));
	grid.appendChild(d(arcanum.meaning_reversed));

}
