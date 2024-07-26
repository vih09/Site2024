const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Depois de sair da escola, você se depara com uma nova tecnologia: um chat que consegue responder todas as perguntas que uma pessoa pode ter, além de gerar imagens e áudios hiper-realistas. Qual é o seu primeiro pensamento?",
        alternativas: [
            "Isso é surpreendente!",
            "Isso é inacreditável!"
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decide realizar uma série de aulas sobre o tema. No final de uma dessas aulas, ela solicita que você escreva um trabalho sobre o uso de IA na educação. Qual é a sua abordagem?",
        alternativas: [
            "Utiliza uma ferramenta de busca baseada em IA para encontrar informações relevantes e as explica em uma linguagem acessível.",
            "Escreve o trabalho com base em discussões com colegas, pesquisa na internet e conhecimentos próprios sobre o assunto."
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora promove um debate em sala para discutir como a IA está impactando o futuro do trabalho. Qual é a sua posição neste debate?",
        alternativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            "Expressa preocupação com as pessoas que podem perder seus empregos para máquinas e argumenta sobre a importância de proteger os trabalhadores."
        ]
    },
    {
        enunciado: "Ao final da discussão, é solicitado que você crie uma imagem no computador que represente sua visão sobre IA. O que você faz?",
        alternativas: [
            "Cria uma imagem usando uma plataforma de design como o Paint.",
            "Cria uma imagem utilizando um gerador de imagem baseado em IA."
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto de biologia em grupo que deve ser entregue na próxima semana. O progresso do trabalho está atrasado e um membro do grupo decide usar uma IA para ajudar. O problema é que o trabalho parece idêntico ao gerado pelo chat. Qual é a sua reação?",
        alternativas: [
            "Acredita que escrever comandos para o chat é uma forma válida de contribuir com o trabalho e não vê problema em utilizar o texto inteiro.",
            "Reconhece que a IA pode ser uma tecnologia avançada, mas ressalta a importância de revisar o trabalho para incluir perspectivas pessoais e garantir originalidade."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();