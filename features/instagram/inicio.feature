    Feature: Pruebas en inicio


    Scenario: probar seguir gente
        Given Inicio sesion en instagram
        When saltear cartel
        And buscar
        And seguir a sus seguidores

    Scenario:  Probar seguir y dejar de seguir gente
        Given Inicio sesion en instagram con usuario "flynndjset" y contraseña "lesbofeminismopopular"
        When saltear cartel
        And Seguir un usuario del menu sugerencias y dejarlo de seguir
        Then Verificar que se haya dejado de seguir
        
     Scenario: Poner MG en publicaciones

    Scenario: Comentar publicaciones

    Scenario: Ver historias



