Feature: Automatizacion de instagram


    Scenario: probar seguir gente
       Given Inicio sesion en instagram 
        When saltear cartel
        And buscar
        And seguir a sus seguidores

