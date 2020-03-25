    Feature: Pruebas en inicio


    Scenario: probar seguir gente
        Given Inicio sesion en instagram
        When saltear cartel
        And buscar
        And seguir a sus seguidores

    Scenario:  Probar seguir y dejar de seguir gente

    Scenario: Poner MG en publicaciones
        Given Inicio sesion en instagram
        When saltear cartel
        And poner me gusta en la primer publicación
        Then Verificar que se haya puesto Me Gusta

    Scenario: Comentar publicaciones

    Scenario: Ver historias



