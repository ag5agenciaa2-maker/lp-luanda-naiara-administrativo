/**
 * Cookie Banner - Padrão AG5 Premium
 * Versão: 2.1.0
 * Conformidade: LGPD/GDPR
 */

(function() {
  'use strict';

  // Configurações
  const CONFIG = {
    cookieName: 'cookie_consent_ag5',
    cookieExpiry: 365, // dias
    showDelay: 1500, // ms
    showFloatingBtn: false // Link no rodapé apenas
  };

  // Estado
  let consentData = {
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: null
  };

  // Utilitários de Cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        try {
          return JSON.parse(decodeURIComponent(c.substring(nameEQ.length, c.length)));
        } catch(e) {
          return null;
        }
      }
    }
    return null;
  }

  // Criar elementos HTML
  function createBanner() {
    const banner = document.createElement('div');
    banner.id = 'ck-banner';
    banner.innerHTML = `
      <div class="ck-banner-content">
        <p class="ck-banner-text">
          <strong>Respeitamos sua privacidade.</strong> 
          Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. 
          <a href="politica-de-privacidade.html">Saiba mais</a>
        </p>
        <div class="ck-banner-actions">
          <button class="ck-btn ck-btn-secondary" id="ck-customize">Personalizar</button>
          <button class="ck-btn ck-btn-primary" id="ck-accept-all">Aceitar Todos</button>
        </div>
      </div>
    `;
    return banner;
  }

  function createModal() {
    const modal = document.createElement('div');
    modal.id = 'ck-modal';
    modal.innerHTML = `
      <div class="ck-modal-content">
        <div class="ck-modal-header">
          <h3 class="ck-modal-title">Preferências de Cookies</h3>
          <button class="ck-modal-close" id="ck-modal-close" aria-label="Fechar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="ck-modal-body">
          <p class="ck-modal-text">
            Você pode escolher quais cookies deseja permitir. Os cookies necessários são essenciais 
            para o funcionamento do site e não podem ser desativados. 
            <a href="politica-de-privacidade.html">Leia nossa Política de Privacidade</a>.
          </p>
          <div class="ck-options">
            <div class="ck-option">
              <div class="ck-option-info">
                <div class="ck-option-title">Necessários</div>
                <div class="ck-option-desc">Essenciais para o funcionamento básico do site. Não podem ser desativados.</div>
              </div>
              <label class="ck-toggle">
                <input type="checkbox" checked disabled>
                <span class="ck-toggle-slider"></span>
              </label>
            </div>
            <div class="ck-option">
              <div class="ck-option-info">
                <div class="ck-option-title">Análise e Desempenho</div>
                <div class="ck-option-desc">Nos ajudam a entender como os visitantes interagem com o site.</div>
              </div>
              <label class="ck-toggle">
                <input type="checkbox" id="ck-toggle-analytics">
                <span class="ck-toggle-slider"></span>
              </label>
            </div>
            <div class="ck-option">
              <div class="ck-option-info">
                <div class="ck-option-title">Marketing</div>
                <div class="ck-option-desc">Utilizados para oferecer conteúdo mais relevante aos seus interesses.</div>
              </div>
              <label class="ck-toggle">
                <input type="checkbox" id="ck-toggle-marketing">
                <span class="ck-toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="ck-modal-footer">
          <button class="ck-btn ck-btn-secondary" id="ck-reject-all">Rejeitar Opcionais</button>
          <button class="ck-btn ck-btn-primary" id="ck-save-prefs">Salvar Preferências</button>
        </div>
      </div>
    `;
    return modal;
  }

  // Inicializar
  function init() {
    // Vincular link no rodapé (sempre, independente do consentimento)
    const prefsLink = document.getElementById('ck-prefs-link');
    if (prefsLink) {
      prefsLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.CookieBanner.open();
      });
    }

    // Verificar consentimento existente
    const savedConsent = getCookie(CONFIG.cookieName);
    if (savedConsent) {
      consentData = savedConsent;
      applyConsent();
      return; // Se já existe, não precisa criar banner e modal agora
    }

    // Criar e adicionar elementos (apenas se não houver consentimento)
    const banner = createBanner();
    const modal = createModal();
    document.body.appendChild(banner);
    document.body.appendChild(modal);

    // Event listeners para o banner recém criado
    const bannerEl = document.getElementById('ck-banner');
    const modalEl = document.getElementById('ck-modal');

    // Mostrar banner após delay
    setTimeout(() => {
      bannerEl.classList.add('show');
    }, CONFIG.showDelay);

    // Aceitar todos
    document.getElementById('ck-accept-all').addEventListener('click', () => {
      consentData = {
        necessary: true,
        analytics: true,
        marketing: true,
        timestamp: new Date().toISOString()
      };
      saveConsent();
      hideBanner();
    });

    // Personalizar
    document.getElementById('ck-customize').addEventListener('click', () => {
      showModal();
    });

    // Fechar modal
    document.getElementById('ck-modal-close').addEventListener('click', hideModal);
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) hideModal();
    });

    // Rejeitar todos (exceto necessários)
    document.getElementById('ck-reject-all').addEventListener('click', () => {
      consentData = {
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString()
      };
      saveConsent();
      hideModal();
      hideBanner();
    });

    // Salvar preferências
    document.getElementById('ck-save-prefs').addEventListener('click', () => {
      consentData = {
        necessary: true,
        analytics: document.getElementById('ck-toggle-analytics').checked,
        marketing: document.getElementById('ck-toggle-marketing').checked,
        timestamp: new Date().toISOString()
      };
      saveConsent();
      hideModal();
      hideBanner();
    });
  }

  function showModal() {
    const modal = document.getElementById('ck-modal');
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
      
      // Sincronizar toggles com estado atual
      const analyticsToggle = document.getElementById('ck-toggle-analytics');
      const marketingToggle = document.getElementById('ck-toggle-marketing');
      if (analyticsToggle) analyticsToggle.checked = consentData.analytics;
      if (marketingToggle) marketingToggle.checked = consentData.marketing;
    }
  }

  function hideModal() {
    const modal = document.getElementById('ck-modal');
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  function hideBanner() {
    const banner = document.getElementById('ck-banner');
    if (banner) {
      banner.classList.add('hide');
      setTimeout(() => {
        banner.style.display = 'none';
      }, 500);
    }
  }

  function saveConsent() {
    setCookie(CONFIG.cookieName, consentData, CONFIG.cookieExpiry);
    applyConsent();
    
    // Disparar evento para analytics
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
      detail: { preferences: consentData }
    }));
  }

  function applyConsent() {
    // Aplicar configurações baseadas no consentimento
    if (consentData.analytics) {
      // Habilitar Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    } else {
      if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
    }

    if (consentData.marketing) {
      if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted'
        });
      }
    } else {
      if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
      }
    }
  }

  // API pública
  window.CookieBanner = {
    open: function() {
      // Recriar modal se não existir
      if (!document.getElementById('ck-modal')) {
        const modal = createModal();
        document.body.appendChild(modal);
        
        // Re-adicionar event listeners
        document.getElementById('ck-modal-close').addEventListener('click', hideModal);
        document.getElementById('ck-reject-all').addEventListener('click', () => {
          consentData = {
            necessary: true,
            analytics: false,
            marketing: false,
            timestamp: new Date().toISOString()
          };
          saveConsent();
          hideModal();
        });
        document.getElementById('ck-save-prefs').addEventListener('click', () => {
          consentData = {
            necessary: true,
            analytics: document.getElementById('ck-toggle-analytics').checked,
            marketing: document.getElementById('ck-toggle-marketing').checked,
            timestamp: new Date().toISOString()
          };
          saveConsent();
          hideModal();
        });
        document.getElementById('ck-modal').addEventListener('click', (e) => {
          if (e.target.id === 'ck-modal') hideModal();
        });
      }
      showModal();
    },
    getConsent: function() {
      return getCookie(CONFIG.cookieName);
    }
  };

  // Inicializar quando DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
