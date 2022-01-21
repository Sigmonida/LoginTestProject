Feature: Login page

    Feature Description

    Login as a HR Admin with correct and incorrect login credentials. Check to see if you get logged in or if you get correct error message.

    Scenario: Login as HR Admin, happy path
    #UI
        Given I am on the emprising login page
        When I login with username and password "visnjap06+menadzer@gmail.com" "Su8um!ga" as "HR ADMIN"
        #And I land on trouble logging in page, I should click on try again button
        Then I should land on 4-box dashboard