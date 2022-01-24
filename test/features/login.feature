Feature: Login page

    Feature Description

    Login as a HR Admin with correct and incorrect login credentials. Check to see if you get logged in or if you get correct error message.

    Scenario: Login as HR Admin, happy path
        #UI
        Given I am on the emprising login page
        When I login with username and password "visnjap06+menadzer@gmail.com" "Su8um!ga" as "HR ADMIN"
        Then I should land on 4-box dashboard

    Scenario: Try to login as HR Admin with correct username and incorrect password
        #UI
        Given I am on the emprising login page
        When I login with username and password "visnjap06+menadzer@gmail.com" "susumiga" as "HR ADMIN"
        Then I should get an error message
        And The error message should say: "We do not recognize your email and/or password."

    Scenario: Try to login as HR Admin with incorrect username and correct password
        #UI
        Given I am on the emprising login page
        When I login with username and password "visnjap00@gmail.com" "Su8um!ga" as "HR ADMIN"
        Then I should get an error message
        And The error message should say: "We do not recognize your email and/or password."

    Scenario: Try to login as HR Admin with incorrect username and incorrect password
        #UI
        Given I am on the emprising login page
        When I login with username and password "visnjap77@gmail.com" "lalala" as "HR ADMIN"
        Then I should get an error message
        And The error message should say: "We do not recognize your email and/or password."

    Scenario: Try to login as HR Admin with incorrectly inputed mail and correct password
        #UI
        Given I am on the emprising login page
        When I login with username and password "visnjap06#gmail.com" "Su8um!ga" as "HR ADMIN"
        Then I should get an email error message: "The Email field is not a valid e-mail address."


