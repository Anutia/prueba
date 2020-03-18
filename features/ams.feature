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

        
