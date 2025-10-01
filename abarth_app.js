// 1. Pega a função createApp do objeto global Vue que importamos no HTML
const { createApp } = Vue;

// 2. Cria a nossa aplicação Vue
createApp({
    // 3. A função data() retorna um objeto com todos os dados reativos da nossa aplicação
    data() {
        return {
            // A lista de carros da nossa loja (APENAS MODELOS ABARTH)
            carros: [
                {
                    id: 1,
                    nome: 'Pulse Abarth',
                    ano: 2025,
                    preco: 'R$ 151.990,00',
                    imagem: 'https://production.autoforce.com/uploads/highlight/image/118/image_webp_pulse_abarth_destaque_2026.webp',
                    descricao: 'O primeiro SUV da Abarth no mundo. Equipado com o motor Turbo 270, entrega performance envenenada, design arrojado e uma experiência de condução que vai acelerar seu coração.'
                },
                {
                    id: 2,
                    nome: 'Fastback Abarth',
                    ano: 2025,
                    preco: 'R$ 162.990,00',
                    imagem: 'https://production.autoforce.com/uploads/version/profile_image/13211/model_main_webp_comprar-turbo-270-flex-at_45e7f8d063.png.webp',
                    descricao: 'A silhueta inconfundível de um SUV Coupé com o veneno do escorpião. Performance, design e exclusividade se unem no Fastback Abarth para criar uma máquina de pura emoção.'
                }
            ],
            // O resto do código é igual
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