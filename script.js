// FLUAP STOCK - JavaScript

// Navegação ativa
document.addEventListener('DOMContentLoaded', function() {
    // Marcar item de navegação ativo baseado na página atual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Formulário de entrada
    const entradaForm = document.getElementById('entradaForm');
    if (entradaForm) {
        entradaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Entrada registrada com sucesso!');
            entradaForm.reset();
        });
    }

    // Formulário de saída
    const saidaForm = document.getElementById('saidaForm');
    if (saidaForm) {
        saidaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Saída registrada com sucesso!');
            // Resetar formulário e ocultar seções
            saidaForm.reset();
            document.getElementById('prescricaoCard').style.display = 'none';
            document.getElementById('lotesSection').style.display = 'none';
            document.getElementById('responsavelSection').style.display = 'none';
        });
    }

    // Formulário de alertas
    const alertasForm = document.getElementById('alertasForm');
    if (alertasForm) {
        alertasForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Configurações de alertas salvas com sucesso!');
        });
    }
});

// Função para buscar prescrição (simulada)
function buscarPrescricao() {
    const input = document.getElementById('prescricaoInput');
    if (input && input.value) {
        // Simular busca de prescrição
        const prescricaoCard = document.getElementById('prescricaoCard');
        const lotesSection = document.getElementById('lotesSection');
        const responsavelSection = document.getElementById('responsavelSection');
        
        if (prescricaoCard) prescricaoCard.style.display = 'block';
        if (lotesSection) lotesSection.style.display = 'block';
        if (responsavelSection) responsavelSection.style.display = 'block';
    } else {
        alert('Por favor, insira um código de prescrição ou escaneie o QR Code.');
    }
}

// Função para cancelar saída
function cancelarSaida() {
    const prescricaoCard = document.getElementById('prescricaoCard');
    const lotesSection = document.getElementById('lotesSection');
    const responsavelSection = document.getElementById('responsavelSection');
    const prescricaoInput = document.getElementById('prescricaoInput');
    
    if (prescricaoCard) prescricaoCard.style.display = 'none';
    if (lotesSection) lotesSection.style.display = 'none';
    if (responsavelSection) responsavelSection.style.display = 'none';
    if (prescricaoInput) prescricaoInput.value = '';
}

// Simular política FEFO (First Expired, First Out)
function aplicarFEFO(produtoId) {
    // Esta função seria implementada no backend
    // Aqui apenas simulamos a lógica
    console.log('Aplicando política FEFO para produto:', produtoId);
    return {
        lote: '#12345',
        quantidade: 25,
        validade: '20/01/2025',
        diasRestantes: 20
    };
}

// Atualizar contadores em tempo real (simulado)
function atualizarContadores() {
    // Esta função seria implementada com dados reais do backend
    console.log('Atualizando contadores...');
}

// Inicializar quando a página carregar
window.addEventListener('load', function() {
    atualizarContadores();
});

