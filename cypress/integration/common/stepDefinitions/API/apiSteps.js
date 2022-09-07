Given('I make a GET request for {string}', (urlPath) => {
  cy.request({
    method: 'GET',
    url: 'http://localhost:8080/hem/v1/' + urlPath,
    failOnStatusCode: false,
    headers: {
      'Content-Type': 'application/json'
    }
  }).as('get_offsets')

});
  
  Then('Verify {string} response status code is {int}', (requestAliasName, statusCode) => {
    cy.get(`${requestAliasName}`).should((response)=> {
      expect(response.status).to.eq(statusCode);
      
    })
  });

  When('I save the user offset data', () => {
    cy.get('@get_offsets').then((response)=> {
      let body = response.body
      cy.saveState("offsetData", body)
    });
  });

  When('I verify that all returned offsets are of type {string}', (offsetType) => {
    cy.get('@get_offsets').then((response)=> {
      let body =response.body
      for(let i = 0; i < body.offsets.length; i ++) {
        expect(body.offsets[i]).to.have.property('list_state', offsetType);  
      }
    })
    });

    When('I verify that all returned NFTS have a max and min price', () => {
      cy.get('@get_offsets').then((response)=> {
        let body =response.body
        for(let i = 0; i < body.prices.length; i ++) {
          expect(body.prices[i]).to.have.property('min_price');
          expect(body.prices[i]).to.have.property('max_price')  
        }
      })
      }); 


    When('I verify that no offsets are returned', (offsetType) => {
      cy.get('@get_offsets').then((response)=> {
        let body = response.body
          expect(body.offsets.length).to.have.equal(0);  
      })
      });

    When('I verify that the returned offsets are of type {string} and {string}', (offsetType, offsetType2) => {
      cy.get('@get_offsets').then((response)=> {
        let body = response.body
        for(let i = 0; i < body.offsets.length; i ++) {
          expect(body.offsets[i].list_state).to.be.oneOf([offsetType, offsetType2]);  
        }
      })
      });


    When('I verify that all returned offsets are owned by {string}', (accountId) => {
      cy.get('@get_offsets').then((response)=> {
        let body = response.body
        for(let i = 0; i < body.offsets.length; i ++) {
          expect(body.offsets[i].offset).to.have.property('owner_id', accountId);  
        }
      })
      });

  When('I make a GET request on {string} endpoint with the stored id', () => {
    cy.getState("PokemonData>PokemonID").then(pokeID => {
      cy.request({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/' + pokeID,
        headers: {
          'Content-Type': 'application/json'  
        },
        failOnStatusCode:false
      }).as('get_pokemon_data_by_id')
    })
  });