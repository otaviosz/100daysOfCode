const animais = [
  {
    title: "Elefante",
    description:
      "Mamífero grande conhecido por sua longa tromba e inteligência, encontrado principalmente na África e na Ásia.",
  },
  {
    title: "Pinguim",
    description:
      "Ave que não voa, adaptada à vida aquática, conhecida por sua aparência de smoking e encontrada principalmente na Antártida.",
  },
  {
    title: "Leão",
    description:
      "Conhecido como o rei da selva, este grande felino é um poderoso predador nativo da África.",
  },
  {
    title: "Canguru",
    description:
      "Marsupial nativo da Austrália, conhecido por suas fortes patas traseiras e cauda grande, usadas para saltar.",
  },
  {
    title: "Golfinho",
    description:
      "Mamífero marinho inteligente, conhecido por seu comportamento brincalhão e habilidades de comunicação, encontrado em oceanos ao redor do mundo.",
  },
  {
    title: "Panda",
    description:
      "Grande urso nativo da China, conhecido por sua pelagem distintiva preta e branca e dieta de bambu.",
  },
  {
    title: "Girafa",
    description:
      "O animal terrestre mais alto, com um pescoço longo e manchas distintas, encontrado nas savanas da África.",
  },
  {
    title: "Tigre",
    description:
      "Grande felino com pelagem laranja e listras pretas, encontrado principalmente na Ásia e conhecido por sua força.",
  },
  {
    title: "Coruja",
    description:
      "Ave de rapina noturna, conhecida por sua visão aguçada e capacidade de voar silenciosamente.",
  },
  {
    title: "Jacaré",
    description:
      "Réptil grande e predador com pele escamosa, encontrado em regiões de água doce e salobra.",
  },
  {
    title: "Lobo",
    description:
      "Mamífero carnívoro, ancestral selvagem dos cães domésticos, conhecido por viver em matilhas.",
  },
  {
    title: "Orangotango",
    description:
      "Grande primata arborícola encontrado nas florestas tropicais da Ásia, conhecido por sua inteligência e pelagem ruiva.",
  },
  {
    title: "Baleia Azul",
    description:
      "O maior animal do planeta, um mamífero marinho que pode ser encontrado em todos os oceanos.",
  },
  {
    title: "Tartaruga Marinha",
    description:
      "Réptil marinho com casco duro, conhecido por suas longas migrações e vida marinha.",
  },
  {
    title: "Águia",
    description:
      "Ave de rapina poderosa, conhecida por sua visão aguçada e habilidades de voo, simbolizando liberdade.",
  },
  {
    title: "Rinoceronte",
    description:
      "Grande mamífero herbívoro com um ou dois chifres no focinho, encontrado na África e Ásia.",
  },
  {
    title: "Lêmure",
    description:
      "Primata pequeno e ágil, nativo de Madagascar, conhecido por seus olhos grandes e cauda longa.",
  },
  {
    title: "Camelo",
    description:
      "Mamífero adaptado ao deserto, conhecido por sua habilidade de armazenar água e energia nas corcovas.",
  },
  {
    title: "Arara",
    description:
      "Ave colorida e inteligente, nativa das florestas tropicais da América do Sul, conhecida por seu bico forte.",
  },
  {
    title: "Hipopótamo",
    description:
      "Grande mamífero semi-aquático, encontrado na África, conhecido por seu tamanho e comportamento territorial.",
  },
  {
    title: "Zebra",
    description:
      "Mamífero africano com listras pretas e brancas, conhecido por viver em grandes manadas nas savanas.",
  },
  {
    title: "Pavão",
    description:
      "Ave conhecida por sua impressionante cauda em leque, exibida pelos machos durante a corte.",
  },
  {
    title: "Cobra",
    description:
      "Réptil alongado e sem pernas, com diversas espécies venenosas, encontrado em todo o mundo.",
  },
  {
    title: "Gorila",
    description:
      "Grande primata terrestre, conhecido por sua força e inteligência, encontrado nas florestas da África.",
  },
  {
    title: "Formiga",
    description:
      "Inseto social que vive em colônias altamente organizadas, encontrado em quase todos os ambientes terrestres.",
  },
  {
    title: "Borboleta",
    description:
      "Inseto conhecido por suas asas coloridas e ciclo de vida que inclui uma metamorfose completa.",
  },
  {
    title: "Jacaré",
    description:
      "Grande réptil predador encontrado em regiões de água doce e salobra, principalmente nas Américas.",
  },
  {
    title: "Tartaruga",
    description:
      "Réptil conhecido por seu casco duro que o protege, encontrado em habitats terrestres e aquáticos.",
  },
  {
    title: "Tucano",
    description:
      "Ave tropical da América do Sul, conhecida por seu bico grande e colorido.",
  },
  {
    title: "Urso Polar",
    description:
      "Grande mamífero carnívoro adaptado ao ambiente ártico, conhecido por sua pelagem branca.",
  },
  {
    title: "Foca",
    description:
      "Mamífero marinho adaptado à vida na água, conhecido por sua pele lisa e comportamento brincalhão.",
  },
  {
    title: "Lontra",
    description:
      "Mamífero semi-aquático conhecido por seu comportamento brincalhão e habilidade de usar ferramentas.",
  },
  {
    title: "Lince",
    description:
      "Felino de médio porte com orelhas pontudas e cauda curta, encontrado em florestas e regiões montanhosas.",
  },
  {
    title: "Hiena",
    description:
      "Mamífero carnívoro da África conhecido por seu riso característico e comportamento de caça em grupo.",
  },
  {
    title: "Cisne",
    description:
      "Ave aquática conhecida por sua beleza e graça, com penas brancas e pescoço longo.",
  },
  {
    title: "Puma",
    description:
      "Grande felino nativo das Américas, também conhecido como leão-da-montanha, com habilidades de caça e escalada.",
  },
  {
    title: "Falcão",
    description:
      "Ave de rapina ágil e rápida, conhecida por sua habilidade de caçar em voo.",
  },
  {
    title: "Caranguejo",
    description:
      "Crustáceo com exoesqueleto duro e pinças, encontrado em ambientes marinhos e costeiros.",
  },
  {
    title: "Lagarto",
    description:
      "Réptil de corpo alongado e patas curtas, encontrado em uma variedade de habitats.",
  },
  {
    title: "Raposa",
    description:
      "Mamífero carnívoro pequeno e ágil, conhecido por sua astúcia e pelagem espessa.",
  },
  {
    title: "Suricata",
    description:
      "Pequeno mamífero social que vive em grupos, encontrado nas savanas e desertos da África.",
  },
  {
    title: "Vaca",
    description:
      "Mamífero domesticado para produção de leite, carne e couro, amplamente distribuído em todo o mundo.",
  },
  {
    title: "Cabra",
    description:
      "Mamífero domesticado conhecido por sua agilidade e adaptabilidade, utilizado para leite, carne e lã.",
  },
  {
    title: "Cavalo",
    description:
      "Mamífero herbívoro domesticado, conhecido por sua velocidade e força, utilizado em transporte e esportes.",
  },
  {
    title: "Porco",
    description:
      "Mamífero domesticado para produção de carne, conhecido por sua inteligência e comportamento social.",
  },
  {
    title: "Cão",
    description:
      "Mamífero domesticado, conhecido como o melhor amigo do homem, com diversas raças adaptadas a diferentes funções.",
  },
  {
    title: "Gato",
    description:
      "Mamífero carnívoro pequeno, domesticado como animal de estimação, conhecido por sua independência e agilidade.",
  },
  {
    title: "Camaleão",
    description:
      "Réptil conhecido por sua capacidade de mudar de cor para camuflagem e sua língua longa e pegajosa.",
  },
  {
    title: "Abelha",
    description:
      "Inseto essencial para a polinização, conhecido por sua produção de mel e vida em colmeias organizadas.",
  },
  {
    title: "Morça",
    description:
      "Mamífero marinho com longas presas e bigodes, encontrado nas regiões árticas.",
  },
  {
    title: "Orca",
    description:
      "Grande mamífero marinho, também conhecido como baleia assassina, conhecido por sua inteligência e comportamento social.",
  },
  {
    title: "Polvo",
    description:
      "Molusco marinho com oito tentáculos, conhecido por sua inteligência, camuflagem e capacidade de escapar de predadores.",
  },
  {
    title: "Urso Pardo",
    description:
      "Grande mamífero carnívoro encontrado na América do Norte e Eurásia, conhecido por sua força e habilidade de caçar.",
  },
  {
    title: "Salamandra",
    description:
      "Anfíbio com corpo alongado e cauda, encontrado em ambientes úmidos e florestados.",
  },
  {
    title: "Corvo",
    description:
      "Ave inteligente e adaptável, conhecida por sua plumagem preta e habilidades de resolver problemas.",
  },
  {
    title: "Coala",
    description:
      "Marsupial nativo da Austrália, conhecido por sua dieta de folhas de eucalipto e hábitos arborícolas.",
  },
  {
    title: "Pombo",
    description:
      "Ave comum em áreas urbanas, conhecida por sua capacidade de se adaptar e viver em grandes grupos.",
  },
  {
    title: "Caracol",
    description:
      "Molusco terrestre com concha espiralada, conhecido por seu movimento lento e produção de muco.",
  },
  {
    title: "Lagosta",
    description:
      "Crustáceo marinho com casca dura e garras poderosas, muito apreciado na gastronomia.",
  },
  {
    title: "Besouro",
    description:
      "Inseto com exoesqueleto rígido e asas protegidas por élitros, encontrado em quase todos os ambientes terrestres.",
  },
  {
    title: "Aranha",
    description:
      "Aracnídeo com oito pernas e capacidade de tecer teias para capturar presas.",
  },
  {
    title: "Corvo-Marinho",
    description:
      "Ave aquática que mergulha para capturar peixes, encontrada em regiões costeiras e de água doce.",
  },
  {
    title: "Peixe-Palhaço",
    description:
      "Peixe colorido e pequeno, conhecido por sua relação simbiótica com anêmonas marinhas.",
  },
  {
    title: "Raia",
    description:
      "Peixe cartilaginoso de corpo achatado, encontrado em oceanos e conhecido por suas grandes nadadeiras em forma de asas.",
  },
  {
    title: "Flamingo",
    description:
      "Ave alta e elegante, conhecida por suas penas rosadas e hábito de viver em grandes colônias em regiões aquáticas.",
  },
  {
    title: "Esquilo",
    description:
      "Mamífero pequeno e ágil, conhecido por sua habilidade de escalar árvores e armazenar nozes para o inverno.",
  },
  {
    title: "Papagaio",
    description:
      "Ave colorida e inteligente, conhecida por sua habilidade de imitar sons e viver em florestas tropicais.",
  },
  {
    title: "Capivara",
    description:
      "O maior roedor do mundo, nativo da América do Sul, conhecido por sua natureza social e vida aquática.",
  },
  {
    title: "Preguiça",
    description:
      "Mamífero arborícola de movimento lento, encontrado nas florestas tropicais da América Central e do Sul.",
  },
  {
    title: "Javali",
    description:
      "Mamífero selvagem de porte médio, conhecido por suas presas curvas e vida em florestas.",
  },
  {
    title: "Pinguim Imperador",
    description:
      "A maior espécie de pinguim, conhecida por sua resistência ao frio extremo da Antártida.",
  },
  {
    title: "Cobra Naja",
    description:
      "Serpente venenosa conhecida por sua habilidade de expandir o pescoço em um capuz quando ameaçada.",
  },
  {
    title: "Tucano-de-Bico-Preto",
    description:
      "Ave tropical com um bico grande e colorido, encontrada nas florestas da América do Sul.",
  },
  {
    title: "Águia-Calva",
    description:
      "Símbolo nacional dos Estados Unidos, conhecida por sua cabeça branca e habilidades de caça.",
  },
  {
    title: "Jabuti",
    description:
      "Tartaruga terrestre conhecida por sua vida longa e carapaça dura.",
  },
  {
    title: "Macaco-Prego",
    description:
      "Primata inteligente encontrado nas florestas da América do Sul, conhecido por seu uso de ferramentas.",
  },
  {
    title: "Iaque",
    description:
      "Grande mamífero bovino, adaptado a viver em altitudes elevadas nos Himalaias.",
  },
  {
    title: "Morcego",
    description:
      "Único mamífero capaz de voar, conhecido por sua ecolocalização e hábitos noturnos.",
  },
  {
    title: "Ganso",
    description:
      "Ave aquática conhecida por sua migração em longas distâncias e comportamento territorial.",
  },
  {
    title: "Água-Viva",
    description:
      "Animal marinho gelatinoso com tentáculos, encontrado em todos os oceanos do mundo.",
  },
  {
    title: "Dragão-de-Komodo",
    description:
      "O maior lagarto do mundo, encontrado na Indonésia, conhecido por sua força e mordida venenosa.",
  },
  {
    title: "Ouriço-Cacheiro",
    description:
      "Pequeno mamífero coberto por espinhos, conhecido por sua defesa contra predadores.",
  },
  {
    title: "Bicho-Preguiça",
    description:
      "Mamífero arborícola que se move lentamente, encontrado nas florestas tropicais da América Central e do Sul.",
  },
  {
    title: "Lobo-Marinho",
    description:
      "Mamífero marinho encontrado em costas rochosas, conhecido por seu comportamento social e vocalização alta.",
  },
  {
    title: "Anta",
    description:
      "Grande mamífero herbívoro, encontrado nas florestas tropicais da América do Sul e do Sudeste Asiático.",
  },
  {
    title: "Guepardo",
    description:
      "O animal terrestre mais rápido, conhecido por sua velocidade e habilidade de caça.",
  },
  {
    title: "Morsa",
    description:
      "Mamífero marinho encontrado nas regiões árticas, conhecido por suas longas presas e bigodes grossos.",
  },
  {
    title: "Lêmure-Ruivo",
    description:
      "Primata endêmico de Madagascar, conhecido por sua pelagem vermelha e cauda longa e peluda.",
  },
  {
    title: "Urso-Kodiak",
    description:
      "Uma das maiores subespécies de urso, encontrada nas ilhas Kodiak no Alasca.",
  },
  {
    title: "Rena",
    description:
      "Mamífero herbívoro adaptado ao frio, conhecido por suas longas migrações e chifres.",
  },
  {
    title: "Gazela",
    description:
      "Antílope gracioso, conhecido por sua velocidade e saltos altos, encontrado nas savanas e desertos.",
  },
  {
    title: "Peixe-Boi",
    description:
      "Grande mamífero marinho herbívoro, encontrado em rios e costas tropicais.",
  },
  {
    title: "Ariranha",
    description:
      "Grande lontra sul-americana, conhecida por seu comportamento social e vida em grupo.",
  },
  {
    title: "Jaguar",
    description:
      "Grande felino da América do Sul, conhecido por sua força e habilidade de nadar.",
  },
  {
    title: "Esquilo-Vermelho",
    description:
      "Pequeno mamífero ágil, conhecido por sua pelagem vermelha e habilidade de armazenar nozes.",
  },
  {
    title: "Galo-da-Serra",
    description:
      "Ave nativa da América do Sul, conhecida por sua crista brilhante e hábitos de exibição durante a corte.",
  },
  {
    title: "Tamanduá-Bandeira",
    description:
      "Grande mamífero insetívoro encontrado nas florestas e savanas da América do Sul, conhecido por sua longa língua.",
  },
  {
    title: "Paca",
    description:
      "Roedor de porte médio, encontrado nas florestas tropicais da América Central e do Sul.",
  },
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = (data) => {
  cardContainer.innerHTML = "";
  data.forEach((e) => {
    cardContainer.innerHTML += `
      <div class="card">
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </div>
      `;
  });
};

searchInput.addEventListener("keyup", (e) => {
  const search = animais.filter((i) =>
    i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()),
  );
  displayData(search);
});

window.addEventListener("load", displayData.bind(null, animais));
