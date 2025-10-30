const { createApp } = Vue;

createApp({
    data() {
        return {
            modelos: [
                {
                    id: 1,
                    nome: 'Pulse Abarth',
                    tagline: 'O SUV com veneno.', 
                    preco: 'R$ 151.990,00',
                    imagem: 'https://www.fiat.com.br/content/dam/fiat/home-abarth/pilares/my26/pulse-desk.webp',
                    descricao: 'O primeiro SUV da Abarth no mundo. Equipado com o motor Turbo 270, entrega performance envenenada, design arrojado e uma experiência de condução que vai acelerar seu coração.',
                    specs: [ 
                        { label: 'Motor Turbo T270', value: '185cv e 270 Nm' },
                        { label: 'Suspensão', value: 'Esportiva' },
                        { label: '0 a 100 Km/h em', value: '7,6s' }
                    ]
                },
                {
                    id: 2,
                    nome: 'Fastback Abarth',
                    tagline: 'O SUV Coupé envenenado.', 
                    preco: 'R$ 162.990,00',
                    imagem: 'https://www.fiat.com.br/content/dam/fiat/fastback-abarth-my26/fastback-desk.webp',
                    descricao: 'A silhueta inconfundível de um SUV Coupé com o veneno do escorpião. Performance, design e exclusividade se unem no Fastback Abarth para criar uma máquina de pura emoção.',
                    specs: [ 
                        { label: 'Motor Turbo T270', value: '185cv e 270 Nm' },
                        { label: 'Suspensão', value: 'Esportiva' },
                        { label: '0 a 100 Km/h em', value: '7,6s' }
                    ]
                }
            ],
            indiceSelecionado: 0 
        }
    },
    computed: {
        modeloSelecionado() {
            return this.modelos[this.indiceSelecionado];
        }
    },
    methods: {
        selecionarModelo(index) {
            this.indiceSelecionado = index;
        },
        proximoModelo() {
            this.indiceSelecionado = (this.indiceSelecionado + 1) % this.modelos.length;
        },
        modeloAnterior() {
            this.indiceSelecionado = (this.indiceSelecionado - 1 + this.modelos.length) % this.modelos.length;
        }
    }
}).mount('#modelos-abarth'); // ALTERADO AQUI para montar o Vue na seção correta