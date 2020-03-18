Feature: Automatizacion de ams


    Scenario: Hacer una pregunta con undergraded text
        Given Ingresar al sitio web sapling con usuario admin
        When Click raptor item
        And click add
        And click ungruded text
        And click en la parte de edicion
        And click more
        And click save as draft para guardar
        And verificar que este en la pagina de ams

        
    Scenario: Hacer una pregunta con multiple choice
        Given Inicio sesion en ams con usuario admin
        When Hago click en raptor item
        And  Click add
        And  Click multiple choice
        And  Click en la parte de edicion
        And  Click more
        And  Click save as draft para guardar
        And  Verificar que este en la pagina de ams
