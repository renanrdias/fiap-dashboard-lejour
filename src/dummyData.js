const data = [
  {
    periodo: "abr/18",
    total: 25,
  },
  {
    periodo: "mai/18",
    total: 37,
  },
  {
    periodo: "jun/18",
    total: 100,
  },
  {
    periodo: "jul/18",
    total: 55,
  },
  {
    periodo: "ago/18",
    total: 79,
  },
  {
    periodo: "set/18",
    total: 90,
  },
  {
    periodo: "out/18",
    total: 127,
  },
  {
    periodo: "nov/18",
    total: 223,
  },
  {
    periodo: "dez/18",
    total: 61,
  },
  {
    periodo: "jan/19",
    total: 72,
  },
  {
    periodo: "fev/19",
    total: 54,
  },
  {
    periodo: "mar/19",
    total: 94,
  },
  {
    periodo: "abr/19",
    total: 84,
  },
  {
    periodo: "mai/19",
    total: 169,
  },
  {
    periodo: "jun/19",
    total: 210,
  },
  {
    periodo: "jul/19",
    total: 259,
  },
  {
    periodo: "ago/19",
    total: 97,
  },
  {
    periodo: "set/19",
    total: 159,
  },
  {
    periodo: "out/19",
    total: 307,
  },
  {
    periodo: "nov/19",
    total: 234,
  },
  {
    periodo: "dez/19",
    total: 85,
  },
  {
    periodo: "jan/20",
    total: 315,
  },
  {
    periodo: "fev/20",
    total: 223,
  },
  {
    periodo: "mar/20",
    total: 211,
  },
  {
    periodo: "abr/20",
    total: 147,
  },
  {
    periodo: "mai/20",
    total: 130,
  },
  {
    periodo: "jun/20",
    total: 143,
  },
  {
    periodo: "jul/20",
    total: 199,
  },
  {
    periodo: "ago/20",
    total: 169,
  },
  {
    periodo: "set/20",
    total: 240,
  },
  {
    periodo: "out/20",
    total: 213,
  }
];

const data01 = [
  {
    estilo: "classico",
    total: 2221
  },
  {
    estilo: "rustico",
    total: 1258
  },
  {
    estilo: "moderno",
    total: 282
  }
];



const intencao = [  
  {
    mes: "jan",
    total: 81,
  },
  {
    mes: "fev",
    total: 74,
  },
  {
    mes: "mar",
    total: 103,
  },
  {
    mes: "abr",
    total: 142,
  },
  {
    mes: "mai",
    total: 111,
  },
  {
    mes: "jun",
    total: 114,
  },
  {
    mes: "jul",
    total: 84,
  },
  {
    mes: "ago",
    total: 78,
  },
  {
    mes: "set",
    total: 169,
  },
  {
    mes: "out",
    total: 211,
  },
  {
    mes: "nov",
    total: 188,
  },
  {
    mes: "dez",
    total: 130,
  },
];

const colors = ["#e2645a", "#86d9e2", "#84b8e2"];

const orcamento = [
  {
    estilo: "Clássico",
    budget: 115951,
  },
  {
    estilo: "Rústico",
    budget: 63588,
  },
  {
    estilo: "Moderno",
    budget: 63989,
  },
];



export default data;
export { data01, intencao, orcamento, colors };



// axios
//   .get("https://dash-lejour.firebaseio.com/-MMNUAz4MGsZv6q5b7jT.json")
//   .then((response) => {
//     this.setState({ cadastros: response.data });
//   })
//   .catch((err) => console.log(err));

// axios
//   .get("https://dash-lejour.firebaseio.com/-MMNW19ZI318CUwoQNbj.json")
//   .then((response) => {
//     this.setState({ data01: response.data });
//   })
//   .catch((err) => console.log(err));

// axios
//   .get("https://dash-lejour.firebaseio.com/-MMNWBnKfPc0pMvePqy8.json")
//   .then((response) => this.setState({ intencao: response.data }))
//   .catch((err) => console.log(err));

// axios
//   .get("https://dash-lejour.firebaseio.com/-MMNWfPh6CaypQci_49s.json")
//   .then((response) => this.setState({ colors: response.data }))
//   .catch((err) => console.log(err));

// axios
//   .get("https://dash-lejour.firebaseio.com/-MMNWsryMW51m6_zqiBN.json")
//   .then((response) => this.setState({ orcamento: response.data }))
//   .catch((err) => console.log(err));



