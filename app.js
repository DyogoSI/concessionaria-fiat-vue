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
                    nome: 'Fiat Pulse Audace',
                    ano: 2024,
                    preco: 'R$ 118.990,00',
                    imagem: 'https://s3.agsistema.net/5704/vehicles/1743193/photos/WPpondIyQq7fq5ophynCl03UB82ScJbwqOl8.jpg?partner=dealersites',
                    descricao: 'O SUV que pulsa com você. Design arrojado, tecnologia e performance para o seu dia a dia.'
                },
                {
                    id: 2,
                    nome: 'Fiat Toro Volcano',
                    ano: 2024,
                    preco: 'R$ 164.500,00',
                    imagem: 'https://production.autoforce.com/uploads/version/profile_image/9869/comprar-volcano-turbo-270-flex-at6_b64d58b10f.png',
                    descricao: 'A picape que combina a força do campo com o conforto da cidade. Robusta e versátil.'
                },
                {
                    id: 3,
                    nome: 'Fiat Fastback Limited',
                    ano: 2024,
                    preco: 'R$ 150.990,00',
                    imagem: 'https://production.autoforce.com/uploads/version/profile_image/9582/comprar-turbo-200-flex-at_31dbe34317.png',
                    descricao: 'O design de um SUV com a alma de um Coupé. Sofisticação e esportividade em um só carro.'
                },
                {
                    id: 4,
                    nome: 'Fiat Cronos Precision',
                    ano: 2024,
                    preco: 'R$ 110.990,00',
                    imagem: 'https://production.autoforce.com/uploads/version/profile_image/9980/comprar-precision-1-3-automatico_21aa482199.png',
                    descricao: 'O sedan com design italiano, amplo espaço interno e um porta-malas gigante para toda a família.'
                },

                  {
                    id: 5,
                    nome: 'Fiat Argo Trekking',
                    ano: 2024,
                    preco: 'R$ 99.990,00',
                    imagem: 'https://production.autoforce.com/uploads/version/profile_image/9677/comprar-trekking-1-3_33851cbe52.png',
                    descricao: 'O hatch com espírito aventureiro. Design robusto, suspensão elevada e pronto para qualquer desafio na cidade ou fora dela.'
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
                // Compara o nome do carro (em minúsculas) com o termo de busca (em minúsculas)
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