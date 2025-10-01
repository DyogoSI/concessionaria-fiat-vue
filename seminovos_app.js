// 1. Pega a função createApp do objeto global Vue que importamos no HTML
const { createApp } = Vue;

// 2. Cria a nossa aplicação Vue
createApp({
    // 3. A função data() retorna um objeto com todos os dados reativos da nossa aplicação
    data() {
        return {
            // A lista de carros da nossa loja (SEMINOVOS FIAT)
            carros: [
                {
                    id: 1,
                    nome: 'Fiat Strada Freedom Cab. Dupla',
                    ano: 2022,
                    quilometragem: '58.000',
                    cor: 'Cinza',
                    preco: 'R$ 96.990,00',
                    imagem: 'https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Fiat/Nova+Strada/Freedom+CD/2022/Fiat-Strada-Freedom1-CD-2022.png',
                    descricao: 'A picape mais amada do Brasil, na versão Freedom. Ideal para quem busca um veículo robusto para o trabalho, sem abrir mão do conforto para a família. Econômica e com ótima valorização.'
                },
                {
                    id: 2,
                    nome: 'Fiat Argo Drive 1.0',
                    ano: 2023,
                    quilometragem: '22.000',
                    cor: 'Vermelho',
                    preco: 'R$ 78.900,00',
                    imagem: 'https://garagem360.com.br/wp-content/uploads/2022/12/Fiat-ArgoDrive-2023-5.jpg',
                    descricao: 'Seminovo super conservado! O Fiat Argo Drive é o hatch moderno e conectado que você procura. Completo com central multimídia, volante multifuncional e motor Firefly super econômico.'
                },
                {
                    id: 3,
                    nome: 'Fiat Toro Volcano Turbo Diesel 4x4',
                    ano: 2021,
                    quilometragem: '75.000',
                    cor: 'Preta',
                    preco: 'R$ 138.500,00',
                    imagem: 'https://production.autoforce.com/uploads/version/profile_image/4927/model_main_webp_comprar-volcano-2-0-at9-4x4-diesel_6fd0afc6dd.png.webp',
                    descricao: 'A picape que redefiniu o mercado. A Toro Volcano Diesel 4x4 oferece o máximo de força e tecnologia. Com bancos em couro, câmbio automático de 9 marchas e tração integral, está pronta para qualquer terreno.'
                },
                {
                    id: 4,
                    nome: 'Fiat Mobi Like',
                    ano: 2023,
                    quilometragem: '25.000',
                    cor: 'Branco',
                    preco: 'R$ 62.900,00',
                    imagem: 'https://img0.icarros.com/dbimg/galeriaimgmodelo/0/142095_1.jpg',
                    descricao: 'Oportunidade única! Fiat Mobi Like, o carro ideal para quem busca economia e praticidade no dia a dia. Super fácil de manobrar e estacionar, com baixo consumo de combustível. Completo com ar e direção.'
                },

                {
                   id: 5,
                    nome: 'Fiat Strada Endurance',
                    ano: 2022,
                    quilometragem: '45.000',
                    cor: 'Branco',
                    preco: 'R$ 89.900,00',
                    imagem: 'https://production.autoforce.com/uploads/version/profile_image/11074/model_main_webp_comprar-endurance-cabine-plus-1-3_6db2f09082.png.webp',
                    descricao: 'A força que o seu trabalho precisa. Esta Strada Endurance 2022 é a picape ideal para quem busca um veículo robusto, com baixo custo de manutenção e pronta para qualquer serviço pesado.'
                },

                {
                   id: 6,
                    nome: 'Pulse Abarth',
                    ano: 2023,
                    quilometragem: '15.000',
                    cor: 'Branco',
                    preco: 'R$ 145.900,00',
                    imagem: 'https://production.autoforce.com/uploads/version/profile_image/8639/comprar-turbo-270-at_f2f9bcb268.png',
                    descricao: 'Sinta o veneno do escorpião neste seminovo exclusivo. O Pulse Abarth 2023 com baixa quilometragem oferece a performance de um esportivo de verdade. Uma oportunidade única!'
                },

                {
                   id: 7,
                    nome: 'Fiat Pulse Drive 1.3 AT',
                    ano: 2024,
                    quilometragem: '8.000',
                    cor: 'Preto',
                    preco: 'R$ 108.990,00',
                    imagem: 'https://next-files-bucket.s3.us-east-1.amazonaws.com/template/9/site/89/modules/sub_modules/233/new/05e18377bef23462b47e1748456887.png',
                    descricao: 'Praticamente zero km! Este Pulse Drive 1.3 Automático 2024 é a escolha perfeita para quem quer o conforto e a tecnologia de um SUV moderno sem o preço de um novo.'
                },

                {
                  id: 7,
                    nome: 'Fiat Pulse Drive 1.3 AT',
                    ano: 2024,
                    quilometragem: '4.000',
                    cor: 'Prata',
                    preco: 'R$ 110.850,00',
                    imagem: 'https://production.autoforce.com/uploads/version/profile_image/6764/comprar-drive-1-3-automatico_c89582d8f5.png',
                    descricao: 'Praticamente zero km! Este Pulse Drive 1.3 Automático 2024 é a escolha perfeita para quem quer o conforto e a tecnologia de um SUV moderno sem o preço de um novo.'
                }
            ],
            // O resto do código (lógica de busca e seleção) permanece o mesmo
            termoBusca: '',
            carroSelecionado: null
        }
    },

    computed: {
        carrosFiltrados() {
            if (this.termoBusca === '') {
                return this.carros;
            }
            return this.carros.filter(carro => {
                return carro.nome.toLowerCase().includes(this.termoBusca.toLowerCase());
            });
        }
    },

    methods: {
        selecionarCarro(carro) {
            this.carroSelecionado = carro;
        },
        fecharDetalhes() {
            this.carroSelecionado = null;
        }
    }

}).mount('#app');