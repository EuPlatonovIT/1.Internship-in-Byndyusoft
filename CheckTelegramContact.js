//The secocnd task is written in Cypress

describe('E2E тест для проверки контактных данных Telegram на сайте Byndyusoft', () => {
    it('Проверить ссылку на Telegram в нижней части страницы', () => {
  
      cy.visit('https://www.google.ru/'); // Открыть сайт google.com
  
      cy.get('[aria-label="Найти"]').type('Byndyusoft{enter}'); // Ввести "Byndyusoft" в поисковую строку и нажать "Enter"
  
      cy.get('div#search a').first().should('be.visible').first().invoke('attr', 'target', '_self').click(); // Найти первую видимую ссылку в результатах поиска и кликнуть на нее
  
      cy.origin('https://byndyusoft.com', {}, () => { // Перейти на сайт Byndyusoft.com и выполнить действия внутри определенной области сайта
        cy.wait(10000); // Подождать 10 секунд
        cy.url().should('eq', 'https://byndyusoft.com/'); // Проверить, что текущий URL равен 'https://byndyusoft.com/'
  
        cy.get('section.knowMore').contains('Заказать презентацию').should('exist').click(); // Найти раздел с текстом "Заказать презентацию" и кликнуть на него
  
        cy.get('[href="http://t.me/alexanderbyndyu"]').contains('в Телеграм') // Проверить наличие ссылки с атрибутом href="http://t.me/alexanderbyndyu" и текстом "в Телеграм"
      })
    });
  });