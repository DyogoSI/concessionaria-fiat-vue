// 1. Pega a função createApp do objeto global Vue que importamos no HTML
const { createApp } = Vue;

// 2. Cria a nossa aplicação Vue
createApp({
    // 3. A função data() retorna um objeto com todos os dados reativos da nossa aplicação
    data() {
        return {
            // A lista de carros da nossa loja
            carros: [
                {
                    id: 1,
                    nome: 'Fiat Pulse',
                    ano: 2026,
                    preco: 'R$ 136.990,00',
                    imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/96/modules/sub_modules/238/independent/ccb12c5cc02e059bf2a41748463414.png',
                    descricao: 'Experimente o máximo de tecnologia com o Pulse Impetus. A versão topo de linha vem com motor Turbo 200 Flex, painel 100% digital, central multimídia de 10.1" e um acabamento que esbanja exclusividade. O SUV que pulsa no seu ritmo, em sua forma definitiva.'
                },
                {
                    id: 2,
                     nome: 'Fiat Toro Ranch',
                     ano: 2026,
                     preco: 'R$ 235.990,00',
                     imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/96/modules/sub_modules/238/independent/ce8f1451a72db9e54a7c1755097253.png',
                     descricao: 'A expressão máxima de sofisticação e robustez. Com motor Turbo Diesel e tração 4x4, a Toro Ranch se destaca pelo acabamento premium com bancos em couro marrom e detalhes exclusivos. A escolha perfeita para quem não abre mão do estilo, no campo ou na cidade.'
                },
                {
                     id: 3,
                     nome: 'Fiat Fastback',
                     ano: 2026,
                     preco: 'R$ 143.490,00',
                     imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/96/modules/sub_modules/238/independent/e22542e60b06b2f611621751458209.png',
                     descricao: 'O design SUV Coupé que todos desejam, agora na versão Audace. Equipado com o eficiente motor Turbo 200 Flex, ele entrega a combinação perfeita de performance e consumo, sem abrir mão do estilo arrojado e do porta-malas gigante de 600 litros.'
                },
                {
                    id: 4,
                    nome: 'Fiat Mobi Trekking',
                    ano: 2026,
                    preco: 'R$ 81.990,00',
                    imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/96/modules/sub_modules/238/independent/7c6ef67ce74a23c426351754491101.png',
                    descricao: 'O seu parceiro para a selva de pedra. Compacto por fora e surpreendente por dentro, o Mobi Trekking é ágil, super econômico e vem com design aventureiro e suspensão elevada para encarar qualquer desafio urbano.'
                },
                {
                     id: 5,
                     nome: 'Fiat Cronos ',
                     ano: 2026,
                     preco: 'R$ 132.490,00',
                     imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/96/modules/sub_modules/238/independent/4e8eb9379b8b65d94cbc1754413301.png',
                     descricao: 'A expressão máxima de esportividade e elegância no Fiat Cronos. A versão HGT traz um design arrojado com acabamentos escurecidos, rodas exclusivas e um interior que respira performance.'
                },
                {
                    id: 6,
                    nome: 'Fiat Strada ',
                    ano: 2026,
                    preco: 'R$ 128.990,00',
                    imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/96/modules/sub_modules/238/independent/f08a51be5cd0390352ed1718044735.png',
                    descricao: 'A versatilidade em forma de picape. A Strada Volcano é a escolha ideal para quem usa o carro para o trabalho e o lazer, combinando a robustez característica da Strada com um pacote completo de conforto e tecnologia.'
                },
                {
                    id: 7,
                    nome: 'Fiat Fiorino',
                    ano: 2026,
                    preco: 'R$ 107.940,00',
                    imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/96/modules/sub_modules/238/independent/570ab04dee84b75b2c441718044736.png',
                    descricao: 'A parceira que o seu negócio precisa. A Fiat Fiorino é sinônimo de agilidade e economia para o transporte de cargas na cidade. Com compartimento de 3.3m³ e capacidade para 650 kg, ela está pronta para qualquer entrega.'
                },
                // Objeto do Argo Drive adicionado aqui
                {
                    id: 8,
                    nome: 'Fiat Argo Drive',
                    ano: 2026,
                    preco: 'R$ 97.990,00',
                    imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/96/modules/sub_modules/238/independent/7a6c10ce0fdac0cfe44e1753883617.png',
                    descricao: 'O hatch que conquistou o Brasil em sua versão mais equilibrada. O Argo Drive 1.0 é a escolha inteligente, combinando design, o eficiente motor Firefly e central multimídia.'
                },

                {
                    id: 9,
                    nome: 'Fiat Titano',
                    ano: 2026,
                    preco: '289.990,00',
                    imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/96/modules/sub_modules/238/independent/7434009723cb445673521751919675.png',
                    descricao: 'Para quem precisa de força de verdade, a Fiat Titano é a resposta. Equipada com um potente motor Turbo Diesel e tração 4x4, ela oferece performance e robustez inigualáveis, além da maior capacidade de caçamba da categoria para encarar qualquer desafio.'
                },
                {
                    id: 10,
                    nome: 'Fiat Ducato',
                    ano: 2026,
                    preco: 'R$ 256.950,00',
                    imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/96/modules/sub_modules/238/independent/566cbeb769af96280d1d1751566956.png',
                    descricao: 'A ferramenta definitiva para o seu negócio. A Fiat Ducato Maxi Cargo é projetada para maximizar sua produtividade, com um compartimento de carga gigante de 13m³, agilidade e um motor Turbo Diesel potente e econômico.'
                },

                {
                    id: 11,
                    nome: 'Fiat FASTBACK IMPETUS TURBO 200 HYBRID FLEX AT ',
                    ano: 2026,
                    preco: 'R$ 138.900,00',
                    imagem: 'https://ofertas.fiat.com.br/content/dam/fiat/products/376/al4/1/2026/page/hero-webp/hero-743.webp',
                    descricao: 'A versão topo de gama com o motor T200 Hybrid. O SUV Coupé com melhorias no acabamento, design renovado e a eficiência da tecnologia híbrida para o máximo em performance e economia.'
                }



            ],
            // 4. Guarda o texto que o usuário digita no campo de busca. Começa vazio.
            termoBusca: '',
            // 5. Guarda o carro que foi clicado para mostrar os detalhes. Começa nulo (nenhum carro selecionado).
            carroSelecionado: null
        }
    },

    // 6. Computed properties: são dados que derivam de outros dados. São como "variáveis inteligentes".
    computed: {
        // Esta função filtra os carros com base no termoBusca
        carrosFiltrados() {
            // Se o campo de busca estiver vazio, retorna a lista completa de carros
            if (this.termoBusca === '') {
                return this.carros;
            }

            // Se tiver algo digitado, filtra a lista
            // 'this' se refere aos dados (data) da nossa aplicação
            return this.carros.filter(carro => {
                // Compara o nome do carro (em minúsculas) com o termo de busca (em minísculas)
                return carro.nome.toLowerCase().includes(this.termoBusca.toLowerCase());
            });
        }
    },

    // 7. Methods: aqui ficam as funções que podemos chamar a partir do nosso HTML (ex: @click)
    methods: {
        // Função para selecionar um carro e mostrar seus detalhes
        selecionarCarro(carro) {
            this.carroSelecionado = carro;
        },
        // Função para fechar a janela de detalhes
        fecharDetalhes() {
            this.carroSelecionado = null;
        }
    }

// 8. Monta a aplicação na div com o id="app" que definimos no HTML
}).mount('#app');