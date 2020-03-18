Feature: Automatizacion de ams


    Scenario: Hacer una pregunta con multiple choice
        Given Inicio sesion en ams con usuario admin
        When Hago click en raptor item
        And  Entrar al sitio web: sapling con usuario admin
        And  Click add
        And  Click multiple choice
        And  Click en la parte de edicion
        And  Click more
        And  Click save as draft para guardar
        And  Verificar que este en la pagina de ams




