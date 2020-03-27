Feature: Automatizacion de ams

    Scenario: Recorrer la lista id y seleccionar los 3 primeros items
             Given Inicio sesion en ams con usuario admin
             When Seleccionar los "3" primeros items de la lista
             And Ir a view selected items
             Then Verificar que los "3" se encuentren en view selected items

    Scenario: Hacer una pregunta con undergraded text
       Given Inicio sesion en ams con usuario admin
        When Hago click raptor item
        And Click add
        And Click ungruded text
        And Click en la parte de edicion
        And Click more
        And Click save as draft para guardar
        And Verificar que este en la pagina de ams

        
    Scenario: Hacer una pregunta con multiple choice
        Given Inicio sesion en ams con usuario admin
        When Hago click en raptor item
        And  Click add
        And  Click multiple choice
        And  Click en la parte de edicion
        And  Click more
        And  Click save as draft para guardar
        And  Verificar que este en la pagina de ams
